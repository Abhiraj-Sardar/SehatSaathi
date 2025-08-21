import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 8000;
const ORIGIN = process.env.CORS_ORIGIN?.split(',').map(s => s.trim()) || ['http://localhost:5173'];

app.use(cors({ origin: ORIGIN }));
app.get('/', (_req, res) => res.send('Signaling server is running ✅'));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ORIGIN, methods: ['GET', 'POST'] }
});

// --- Socket.io signaling ---
io.on('connection', (socket) => {
  console.log('🔌 client connected:', socket.id);

  // Join a meeting room
  socket.on('join', ({ meetingId, displayName }) => {
    socket.join(meetingId);
    socket.data.displayName = displayName || 'Guest';

    // Notify existing peers in the room about the new user
    socket.to(meetingId).emit('user-joined', {
      socketId: socket.id,
      displayName: socket.data.displayName
    });

    // Tell the new user who is already in the room
    const clients = [...(io.sockets.adapter.rooms.get(meetingId) || [])].filter(id => id !== socket.id);
    socket.emit('joined', {
      meetingId,
      selfId: socket.id,
      participants: clients.map(id => ({
        socketId: id,
        displayName: io.sockets.sockets.get(id)?.data?.displayName || 'Guest'
      }))
    });

    console.log(`👥 ${socket.id} joined room ${meetingId}`);
  });

  // WebRTC signaling pass-through
  socket.on('webrtc-offer', ({ to, offer, from }) => {
    io.to(to).emit('webrtc-offer', { from: from || socket.id, offer });
  });

  socket.on('webrtc-answer', ({ to, answer, from }) => {
    io.to(to).emit('webrtc-answer', { from: from || socket.id, answer });
  });

  socket.on('webrtc-ice-candidate', ({ to, candidate, from }) => {
    io.to(to).emit('webrtc-ice-candidate', { from: from || socket.id, candidate });
  });

  // Leaving room
  socket.on('leave', ({ meetingId }) => {
    socket.leave(meetingId);
    socket.to(meetingId).emit('user-left', { socketId: socket.id });
    console.log(`👋 ${socket.id} left room ${meetingId}`);
  });

  socket.on('disconnect', () => {
    // Inform rooms this socket was in
    const rooms = [...socket.rooms].filter(r => r !== socket.id);
    rooms.forEach(room => {
      socket.to(room).emit('user-left', { socketId: socket.id });
    });
    console.log('❌ client disconnected:', socket.id);
  });

  socket.on("chat-message", ({ meetingId, message, from }) => {
  io.to(meetingId).emit("chat-message", {
    from: from || socket.id,
    message,
  });
});
  
});

server.listen(PORT, () => {
  console.log(`🚀 Signaling server listening on http://localhost:${PORT}`);
});

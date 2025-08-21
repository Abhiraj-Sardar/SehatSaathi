import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { socket } from "../utils/socket";

export default function Meeting() {
  const { meetingId } = useParams();
  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    // connect socket
    socket.connect();

    socket.emit("join", { meetingId, displayName: "Guest" });

    socket.on("joined", (payload) => {
      console.log("[joined]", payload);
    });

    socket.on("user-joined", (payload) => {
      console.log("[user-joined]", payload);
    });

    socket.on("user-left", ({ socketId }) => {
      console.log("[user-left]", socketId);
    });

    // --- chat ---
    socket.on("chat-message", ({ from, message }) => {
      setMessages((prev) => [...prev, { from, message }]);
    });

    // get local media
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localStreamRef.current = stream;
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Media error:", err));

    return () => {
      socket.emit("leave", { meetingId });
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, [meetingId]);

  // --- Mute / Unmute mic ---
  const toggleMute = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current
        .getTracks()
        .find((track) => track.kind === "audio");
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setMuted(!audioTrack.enabled);
      }
    }
  };

  // --- Turn camera on/off ---
  const toggleCamera = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current
        .getTracks()
        .find((track) => track.kind === "video");
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setCameraOff(!videoTrack.enabled);
      }
    }
  };

  // --- Chat ---
  const sendMessage = () => {
    if (chatInput.trim() !== "") {
      socket.emit("chat-message", {
        meetingId,
        message: chatInput,
        from: socket.id,
      });
      setMessages((prev) => [...prev, { from: "You", message: chatInput }]);
      setChatInput("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meeting ID: {meetingId}</h1>
        <div className="flex gap-2">
          <button
            onClick={toggleMute}
            className={`px-4 py-2 rounded-lg ${
              muted ? "bg-yellow-600" : "bg-blue-600"
            }`}
          >
            {muted ? "Unmute Mic" : "Mute Mic"}
          </button>
          <button
            onClick={toggleCamera}
            className={`px-4 py-2 rounded-lg ${
              cameraOff ? "bg-yellow-600" : "bg-green-600"
            }`}
          >
            {cameraOff ? "Turn Camera On" : "Turn Camera Off"}
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Leave
          </button>
        </div>
      </header>

      {/* Main Area */}
      <div className="flex flex-1">
        {/* Video Section */}
        <main className="flex-1 flex items-center justify-center">
          <div className="relative">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-2xl rounded-xl border-4 border-blue-500"
            />
            {cameraOff && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 rounded-xl">
                <span className="text-lg font-bold text-gray-300">
                  Camera Off
                </span>
              </div>
            )}
          </div>
        </main>

        {/* Chat Section */}
        <aside className="w-1/3 bg-gray-800 p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-2">Chat</h2>
          <div className="flex-1 overflow-y-auto space-y-2 border rounded-lg p-2 bg-gray-700">
            {messages.map((msg, i) => (
              <div key={i}>
                <span className="font-bold">{msg.from}: </span>
                <span>{msg.message}</span>
              </div>
            ))}
          </div>

          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 p-2 rounded-l-lg text-white"
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 hover:bg-green-700 px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

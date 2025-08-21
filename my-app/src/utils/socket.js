import { io } from "socket.io-client";

// Signaling server URL
const URL = import.meta.env.VITE_SIGNALING_URL || "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});

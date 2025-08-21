import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";

export default function ConsultHome() {
  const [meetingCode, setMeetingCode] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (meetingCode.trim() !== "") {

      navigate(`/meeting/${meetingCode}`,{replace:true});
    }
  };

  const handleCreate = () => {
    const newCode = Math.random().toString(36).substring(2, 8);
    navigate(`/meeting/${newCode}`);
  };

  return (
    <div className="flex v-screen items-center justify-center  text-white mt-50">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">Video Consultation</h1>

        <input
          type="text"
          placeholder="Enter meeting code"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          className="w-full p-3 rounded-lg text-white outline-none"
        />

        <button
          onClick={handleJoin}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Join Meeting
        </button>

        <div className="mt-4 text-gray-400">OR</div>

        <button
          onClick={handleCreate}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Create New Meeting
        </button>
      </div>
    </div>
  );
}

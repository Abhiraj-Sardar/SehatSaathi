import { useState } from 'react';

function Ngolist() {
  // Sample events data
  const events = [
    {
      id: 1,
      ngo: "HealthAid Foundation",
      title: "Free Eye Checkup",
      date: "2025-08-25",
      location: "Community Hall, Kolkata",
    },
    {
      id: 2,
      ngo: "CareWell NGO",
      title: "Blood Donation Camp",
      date: "2025-08-28",
      location: "City Park, Kolkata",
    },
    {
      id: 3,
      ngo: "Wellness First",
      title: "Mental Health Awareness",
      date: "2025-09-01",
      location: "Library Auditorium, Kolkata",
    },
    {
      id: 4,
      ngo: "Healthy Minds",
      title: "Nutrition & Diet Workshop",
      date: "2025-09-05",
      location: "Community Center, Kolkata",
    },
    {
      id: 5,
      ngo: "Wellness World",
      title: "Free Health Screening",
      date: "2025-09-10",
      location: "Town Hall, Kolkata",
    },
  ];

  // EventCard component
  const EventCard = ({ event }) => {
    const [status, setStatus] = useState(null); // null, "attending", "not-attending"

    return (
      <div
        className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-5xl 
                   transform transition duration-300 hover:scale-105 hover:shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>

        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Organized by:</span> {event.ngo}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Date:</span> {event.date}
        </p>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Location:</span> {event.location}
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => setStatus("attending")}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              status === "attending"
                ? "bg-green-500 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            Attending
          </button>

          <button
            onClick={() => setStatus("not-attending")}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              status === "not-attending"
                ? "bg-red-500 text-white"
                : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
          >
            Not Attending
          </button>
        </div>

        {status && (
          <p className="mt-4 font-semibold">
            You are {status.replace("-", " ")} this event.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col w-[80vw] items-center py-8">
      <h1 className="text-3xl font-bold mb-8">NGO Health Drives</h1>

      <div className="flex flex-col items-center w-full px-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Ngolist;
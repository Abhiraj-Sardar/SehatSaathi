import React, { useState } from "react";
import { Plus, ArrowRight, Calendar, Tag, X } from "lucide-react";

const Articles = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "React Development Mastery",
      description:
        "Complete guide to building modern React applications with hooks, context, and best practices for scalable development.",
      date: "Aug 21, 2025",
    },
    {
      id: 2,
      title: "Tailwind CSS Design System",
      description:
        "Learn to create beautiful, responsive designs using utility-first CSS framework with component examples.",
      date: "Aug 20, 2025",
    },
    {
      id: 3,
      title: "Node.js Backend APIs",
      description:
        "Build robust RESTful APIs with Node.js, Express, and MongoDB for full-stack web applications.",
      date: "Aug 19, 2025",
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features",
      description:
        "Master modern JavaScript features including async/await, destructuring, modules, and arrow functions.",
      date: "Aug 18, 2025",
    },
    {
      id: 5,
      title: "Database Design Principles",
      description:
        "Understand relational database design, normalization, indexing, and optimization techniques.",
      date: "Aug 17, 2025",
    },
    {
      id: 6,
      title: "Exercise Helps",
      description: "Exercise helps your body to keep fit and fine",
      date: "Aug 17, 2025",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleCardClick = (card) => {
    alert(
      `Opening: ${card.title}\n\nDate: ${card.date}\n\nDescription: ${card.description}`
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const today = new Date();
    const dateStr = today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const newCard = {
      id: cards.length + 1,
      title: formData.title,
      description: formData.description,
      date: dateStr,
    };

    setCards((prev) => [...prev, newCard]);
    setFormData({ title: "", description: "" });
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            We care For You
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Every report tells a story, Read it to stay healthy.
          </p>
        </div>

        {/* Cards Container - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-white/20"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{card.date}</span>
                  </div>
                </div>
                <div className="ml-4 p-3 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-colors duration-300">
                  <ArrowRight
                    size={24}
                    className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      Click to explore →
                    </span>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Articles;

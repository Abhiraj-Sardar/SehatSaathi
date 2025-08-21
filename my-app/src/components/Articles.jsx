import React, { useState } from "react";
import { Plus, ArrowRight, Calendar, Tag, X } from "lucide-react";

const Articles = () => {
  const [cards, setCards] = useState([
     {
    id: 1,
    title: "Holistic Wellness Blueprint",
    description:
      "A step-by-step guide to balancing physical fitness, mental health, and nutrition for a healthier lifestyle.",
    date: "Aug 21, 2025",
  },
  {
    id: 2,
    title: "Mindful Eating Habits",
    description:
      "Learn how mindful eating can improve digestion, reduce stress, and help you build a positive relationship with food.",
    date: "Aug 22, 2025",
  },
  {
    id: 3,
    title: "Strength Training for Beginners",
    description:
      "An easy-to-follow introduction to resistance training, muscle building, and preventing injuries.",
    date: "Aug 23, 2025",
  },
  {
    id: 4,
    title: "Yoga for Inner Peace",
    description:
      "Discover yoga practices and breathing techniques to reduce anxiety, improve posture, and enhance mindfulness.",
    date: "Aug 24, 2025",
  },
  {
    id: 5,
    title: "Sleep Smarter, Live Better",
    description:
      "Science-backed strategies to improve sleep quality and boost daily energy levels naturally.",
    date: "Aug 25, 2025",
  },
  {
    id: 6,
    title: "Cardio That Works",
    description:
      "Effective cardio routines for heart health, fat loss, and building long-lasting stamina.",
    date: "Aug 26, 2025",
  },
  {
    id: 7,
    title: "Healthy Habits for Busy People",
    description:
      "Practical wellness routines to stay fit and healthy even with a demanding lifestyle.",
    date: "Aug 27, 2025",
  },
  {
    id: 8,
    title: "Mental Fitness Mastery",
    description:
      "Boost focus, resilience, and emotional well-being with mindfulness and brain-training techniques.",
    date: "Aug 28, 2025",
  },
  {
    id: 9,
    title: "Nutrition Myths Busted",
    description:
      "Separating fact from fiction in modern dieting trends and exploring sustainable nutrition choices.",
    date: "Aug 29, 2025",
  },
  {
    id: 10,
    title: "The Wellness Reset",
    description:
      "A 7-day plan to detox your body, refresh your mind, and reset your health goals.",
    date: "Aug 30, 2025",
  },
  {
    id: 11,
    title: "Hydration and Health",
    description:
      "Understand the importance of hydration, how much water your body really needs, and the impact on energy and skin health.",
    date: "Aug 31, 2025",
  },
  {
    id: 12,
    title: "Desk Job Fitness Hacks",
    description:
      "Simple stretches and movement routines to prevent back pain, eye strain, and stiffness while working long hours.",
    date: "Sep 1, 2025",
  },
  {
    id: 13,
    title: "Gut Health Matters",
    description:
      "Explore the connection between gut microbiome, immunity, and mental wellness with practical diet tips.",
    date: "Sep 2, 2025",
  },
  {
    id: 14,
    title: "Outdoor Fitness Adventures",
    description:
      "Fun and effective ways to stay active outdoors with hiking, cycling, and bodyweight workouts.",
    date: "Sep 3, 2025",
  },
  {
    id: 15,
    title: "Stress-Free Living",
    description:
      "Techniques like meditation, journaling, and relaxation exercises to manage stress and boost productivity.",
    date: "Sep 4, 2025",
  },
  {
    id: 16,
    title: "Superfoods for Everyday Energy",
    description:
      "A guide to nutrient-dense superfoods that enhance immunity, improve metabolism, and sustain energy levels.",
    date: "Sep 5, 2025",
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

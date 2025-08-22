import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Video, 
  Download, 
  MessageCircle, 
  Bell, 
  Calendar,
  Heart,
  Pill,
  Phone,
  X,
  Eye,
  Clock,
  MapPin
} from 'lucide-react';

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Free Health Checkup Camp",
      message: "Join us for a free health screening at City Hospital on Dec 15th",
      ngo: "Heart Care Foundation",
      time: "2 hours ago",
      type: "event"
    },
    {
      id: 2,
      title: "Mental Health Awareness Week",
      message: "Participate in our mental wellness program starting next Monday",
      ngo: "Mind Wellness NGO",
      time: "1 day ago",
      type: "awareness"
    },
    {
      id: 3,
      title: "Blood Donation Drive",
      message: "Help save lives by donating blood at our upcoming drive",
      ngo: "Life Savers NGO",
      time: "3 days ago",
      type: "donation"
    }
  ]);

  const [prescriptions] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "2024-08-20",
      medications: ["Paracetamol 500mg", "Vitamin D3", "Omeprazole 20mg"],
      diagnosis: "Viral Fever"
    },
    {
      id: 2,
      doctor: "Dr. Michael Brown",
      date: "2024-08-15",
      medications: ["Metformin 500mg", "Aspirin 75mg"],
      diagnosis: "Diabetes Management"
    },
    {
      id: 3,
      doctor: "Dr. Emily Davis",
      date: "2024-08-10",
      medications: ["Lisinopril 10mg", "Atorvastatin 20mg"],
      diagnosis: "Hypertension"
    }
  ]);

  const [healthArticles] = useState([
    {
      id: 1,
      title: "10 Tips for Better Sleep",
      category: "Wellness",
      readTime: "5 min read",
      image: "🛏️"
    },
    {
      id: 2,
      title: "Heart-Healthy Diet Guidelines",
      category: "Nutrition",
      readTime: "8 min read",
      image: "❤️"
    },
    {
      id: 3,
      title: "Managing Diabetes Naturally",
      category: "Disease Management",
      readTime: "12 min read",
      image: "🩺"
    },
    {
      id: 4,
      title: "Exercise for Mental Health",
      category: "Mental Wellness",
      readTime: "6 min read",
      image: "🧠"
    }
  ]);

  const [healthVideos] = useState([
    {
      id: 1,
      title: "Yoga for Beginners",
      duration: "15:30",
      category: "Exercise",
      thumbnail: "🧘‍♀️"
    },
    {
      id: 2,
      title: "Meditation Techniques",
      duration: "10:45",
      category: "Mental Health",
      thumbnail: "🧘‍♂️"
    },
    {
      id: 3,
      title: "Healthy Cooking Tips",
      duration: "8:20",
      category: "Nutrition",
      thumbnail: "👨‍🍳"
    },
    {
      id: 4,
      title: "First Aid Basics",
      duration: "12:15",
      category: "Emergency",
      thumbnail: "🏥"
    }
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const downloadPrescription = (prescription) => {
    // Simulate PDF download
    alert(`Downloading prescription from ${prescription.doctor} dated ${prescription.date}`);
  };

  const startConsultation = () => {
    alert("Connecting you with an available doctor...");
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome back, John!</h2>
            <p className="text-blue-100">How are you feeling today?</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Next Appointment</p>
              <p className="font-semibold">Aug 25, 2024</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <Pill className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Active Medications</p>
              <p className="font-semibold">3 Prescriptions</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <Calendar className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Health Score</p>
              <p className="font-semibold">85/100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => setActiveSection('articles')}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group"
        >
          <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <p className="font-medium">Health Articles</p>
          <p className="text-sm text-gray-500">Tips & Guides</p>
        </button>
        
        <button 
          onClick={() => setActiveSection('videos')}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group"
        >
          <Video className="w-8 h-8 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <p className="font-medium">Health Videos</p>
          <p className="text-sm text-gray-500">Visual Learning</p>
        </button>
        
        <button 
          onClick={() => setActiveSection('prescriptions')}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group"
        >
          <Download className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <p className="font-medium">Prescriptions</p>
          <p className="text-sm text-gray-500">Download PDFs</p>
        </button>
        
        <button 
          onClick={startConsultation}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
        >
          <MessageCircle className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <p className="font-medium">Consult Now</p>
          <p className="text-sm text-purple-100">Talk to Doctor</p>
        </button>
      </div>
    </div>
  );

  const renderArticles = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Health Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthArticles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{article.image}</span>
                <div>
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Read Article
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVideos = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Health Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthVideos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{video.thumbnail}</span>
                <div>
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {video.duration}
                </span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center">
                  <Video className="w-4 h-4 mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrescriptions = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Prescriptions</h2>
      <div className="space-y-4">
        {prescriptions.map(prescription => (
          <div key={prescription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{prescription.doctor}</h3>
                <p className="text-gray-500">{prescription.date}</p>
                <p className="text-sm text-blue-600 font-medium">{prescription.diagnosis}</p>
              </div>
              <button 
                onClick={() => downloadPrescription(prescription)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
            <div>
              <h4 className="font-medium mb-2">Medications:</h4>
              <div className="flex flex-wrap gap-2">
                {prescription.medications.map((med, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {med}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 rounded-lg p-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">HealthCare Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Emergency
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: User },
              { id: 'articles', label: 'Health Articles', icon: FileText },
              { id: 'videos', label: 'Health Videos', icon: Video },
              { id: 'prescriptions', label: 'Prescriptions', icon: Download },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeSection === item.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {activeSection === 'dashboard' && renderDashboard()}
            {activeSection === 'articles' && renderArticles()}
            {activeSection === 'videos' && renderVideos()}
            {activeSection === 'prescriptions' && renderPrescriptions()}
          </div>

          {/* Notifications Sidebar */}
          <div className="w-80">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-blue-500" />
                NGO Notifications
              </h3>
              
              {notifications.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No new notifications</p>
              ) : (
                <div className="space-y-4">
                  {notifications.map(notification => (
                    <div key={notification.id} className="border border-gray-200 rounded-lg p-4 relative">
                      <button 
                        onClick={() => removeNotification(notification.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      
                      <div className="mb-2">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <p className="text-xs text-blue-600">{notification.ngo}</p>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {notification.time}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          notification.type === 'event' ? 'bg-green-100 text-green-700' :
                          notification.type === 'awareness' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {notification.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
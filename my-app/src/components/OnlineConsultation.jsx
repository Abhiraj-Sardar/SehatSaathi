import { useState, useMemo } from 'react';
import { Search, User, Calendar, Video, Phone, PhoneOff, Mic, MicOff, VideoIcon, VideoOff, MessageCircle, Send, ArrowLeft, Users } from 'lucide-react';

const DoctorSearchApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('search'); // 'search' or 'meeting'
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      message: 'Hello! I can see you\'ve joined the consultation. How can I help you today?',
      timestamp: '10:30 AM',
      isDoctor: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.8,
      isAvailable: true,
      description: 'Specialized in heart disease prevention and treatment. Expert in cardiac catheterization and bypass surgery.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: '12 years',
      rating: 4.9,
      isAvailable: false,
      description: 'Neurologist focusing on brain disorders, stroke treatment, and epilepsy management.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      experience: '8 years',
      rating: 4.7,
      isAvailable: true,
      description: 'Skin specialist treating acne, eczema, and cosmetic dermatology procedures.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Pediatrics',
      experience: '20 years',
      rating: 4.9,
      isAvailable: true,
      description: 'Child healthcare expert providing comprehensive care from newborn to adolescent.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.6,
      isAvailable: false,
      description: 'Orthopedic surgeon specializing in joint replacement and sports injury treatment.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 6,
      name: 'Dr. David Kumar',
      specialty: 'Psychiatry',
      experience: '10 years',
      rating: 4.8,
      isAvailable: true,
      description: 'Mental health specialist treating anxiety, depression, and behavioral disorders.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 7,
      name: 'Dr. Maria Garcia',
      specialty: 'Gynecology',
      experience: '14 years',
      rating: 4.7,
      isAvailable: false,
      description: 'Women\'s health expert providing prenatal care and reproductive health services.',
      image: '/api/placeholder/100/100'
    },
    {
      id: 8,
      name: 'Dr. Robert Lee',
      specialty: 'Oncology',
      experience: '22 years',
      rating: 4.9,
      isAvailable: true,
      description: 'Cancer specialist with expertise in chemotherapy and radiation treatment protocols.',
      image: '/api/placeholder/100/100'
    }
  ];

  // Filter doctors based on search query (name or specialty)
  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return doctors;
    
    return doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleBookAppointment = (doctor) => {
    alert(`Booking appointment with ${doctor.name}`);
  };

  const handleOnlineConnect = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('meeting');
  };

  const handleBackToSearch = () => {
    setCurrentPage('search');
    setSelectedDoctor(null);
    setChatMessages([
      {
        id: 1,
        sender: 'Dr. Sarah Johnson',
        message: 'Hello! I can see you\'ve joined the consultation. How can I help you today?',
        timestamp: '10:30 AM',
        isDoctor: true
      }
    ]);
    setNewMessage('');
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: chatMessages.length + 1,
        sender: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDoctor: false
      };
      setChatMessages([...chatMessages, newMsg]);
      setNewMessage('');
      
      // Simulate doctor response after 2 seconds
      setTimeout(() => {
        const doctorResponse = {
          id: chatMessages.length + 2,
          sender: selectedDoctor?.name || 'Doctor',
          message: 'Thank you for sharing that information. Let me review your concerns.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDoctor: true
        };
        setChatMessages(prev => [...prev, doctorResponse]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {currentPage === 'search' ? (
        // Doctor Search Page
        <div className="p-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Find Your Doctor</h1>
              <p className="text-gray-600">Search by doctor name or specialty</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search doctors or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-lg"
              />
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="mb-6">
                <p className="text-gray-600 text-center">
                  {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
            )}

            {/* Doctor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                          {doctor.name}
                        </h3>
                        <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-sm">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {doctor.description}
                    </p>

                    {/* Availability Status */}
                    <div className="flex items-center mb-4">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        doctor.isAvailable ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        doctor.isAvailable ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {doctor.isAvailable ? 'Available' : 'Busy'}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6">
                    <div className="flex space-x-2">
                      {/* Available Button */}
                      <button
                        onClick={() => handleBookAppointment(doctor)}
                        className={`flex-1 py-2.5 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 text-sm ${
                          doctor.isAvailable
                            ? 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg'
                            : 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{doctor.isAvailable ? 'Available' : 'Not Available'}</span>
                      </button>

                      {/* Online Connect Button */}
                      <button
                        onClick={() => handleOnlineConnect(doctor)}
                        disabled={!doctor.isAvailable}
                        className={`flex-1 py-2.5 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 text-sm ${
                          doctor.isAvailable
                            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        <span>Online Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {searchQuery && filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">No doctors found</h3>
                <p className="text-gray-500">
                  Try searching with a different name or specialty
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Video Meeting Page
        <div className="h-screen flex flex-col bg-gray-900">
          {/* Meeting Header */}
          <div className="bg-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToSearch}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="text-white">
                <h2 className="text-lg font-semibold">Consultation with {selectedDoctor?.name}</h2>
                <p className="text-sm text-gray-300">{selectedDoctor?.specialty}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Users className="w-5 h-5" />
              <span className="text-sm">2 participants</span>
            </div>
          </div>

          {/* Video Area */}
          <div className="flex-1 flex">
            {/* Main Video Area */}
            <div className="flex-1 relative bg-gray-800 flex flex-col">
              {/* Doctor's Video */}
              <div className="flex-1 relative bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                {!isVideoOff ? (
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <User className="w-16 h-16" />
                    </div>
                    <h3 className="text-xl font-semibold">{selectedDoctor?.name}</h3>
                    <p className="text-blue-200">{selectedDoctor?.specialty}</p>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <VideoOff className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p>Camera is off</p>
                  </div>
                )}
              </div>

              {/* Patient's Video (Small overlay) */}
              <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden border-2 border-white">
                {!isVideoOff ? (
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <User className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">You</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white">
                    <VideoOff className="w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Meeting Controls */}
              <div className="bg-gray-800 p-4 flex justify-center space-x-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'
                  } text-white`}
                >
                  {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    isVideoOff ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'
                  } text-white`}
                >
                  {isVideoOff ? <VideoOff className="w-6 h-6" /> : <VideoIcon className="w-6 h-6" />}
                </button>
                <button
                  onClick={handleBackToSearch}
                  className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
                >
                  <PhoneOff className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Chat Panel */}
            <div className="w-80 bg-white flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Chat</h3>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isDoctor ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-xs rounded-lg p-3 ${
                      msg.isDoctor 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm">{msg.sender}</span>
                        <span className={`text-xs ${msg.isDoctor ? 'text-gray-500' : 'text-blue-100'}`}>
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSearchApp;
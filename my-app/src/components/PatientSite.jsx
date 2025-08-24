import React, { useState } from 'react';
import { MessageSquare, Video, Clock, FileText, User, Stethoscope, Calendar, Shield, CheckCircle, ArrowRight, Star, Users } from 'lucide-react';

const PatientSite = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChatConsultation = () => {
    setSelectedOption('chat');
    // Here you would typically navigate to the chat consultation form
    console.log('Navigating to chat consultation form...');
  };

  const handleVideoConsultation = () => {
    setSelectedOption('video');
    // Here you would typically navigate to video consultation booking
    console.log('Navigating to video consultation booking...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Text Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-16 text-8xl font-bold text-blue-100 transform -rotate-12 select-none opacity-15">
          HEALTH
        </div>
        <div className="absolute top-32 right-20 text-6xl font-bold text-green-100 transform rotate-12 select-none opacity-20">
          CONSULT
        </div>
        <div className="absolute bottom-20 left-24 text-5xl font-bold text-purple-100 transform -rotate-6 select-none opacity-15">
          DOCTOR
        </div>
        <div className="absolute bottom-40 right-16 text-4xl font-bold text-pink-100 transform rotate-45 select-none opacity-20">
          CARE
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-100 rotate-3 select-none opacity-8">
          ONLINE
        </div>
        
        {/* Decorative Medical Icons */}
        <div className="absolute top-20 right-32 text-gray-200 opacity-20">
          <Stethoscope className="w-16 h-16" />
        </div>
        <div className="absolute bottom-32 left-32 text-gray-200 opacity-15">
          <User className="w-20 h-20" />
        </div>
        <div className="absolute top-1/3 right-12 text-gray-200 opacity-25">
          <FileText className="w-12 h-12" />
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full -translate-x-32 -translate-y-32 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-200 to-blue-300 rounded-full translate-x-40 translate-y-40 opacity-25"></div>
      <div className="absolute top-1/2 left-16 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-40"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-2xl">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Choose Your Consultation Type
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get expert medical advice from qualified doctors through our secure online platform. 
              Select the consultation method that works best for you.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Licensed Doctors</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-medium">24/7 Available</span>
            </div>
          </div>

          {/* Consultation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Chat Consultation Option */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full hover:transform hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-full shadow-lg">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Chat Consultation
                </h2>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Fill out a detailed medical form with your symptoms, medical history, and concerns. 
                  Our doctors will review your information and provide personalized advice.
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Detailed medical form</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Written prescription & advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Convenient for non-urgent cases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Response within 2-4 hours</span>
                  </div>
                </div>
                
                {/* Price & Duration */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800 font-medium">Response Time: 2-4 hours</span>
                    </div>
                    <div className="text-blue-800 font-bold text-lg">₹299</div>
                  </div>
                </div>
                
                {/* Button */}
                <button
                  onClick={handleChatConsultation}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedOption === 'chat'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FileText className="w-6 h-6" />
                    <span>Start Chat Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
                
                {/* Best For */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Best for: Routine check-ups, prescription refills, general health advice
                  </p>
                </div>
              </div>
            </div>

            {/* Video Consultation Option */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full hover:transform hover:scale-105 transition-all duration-300">
                {/* Popular Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full shadow-lg">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Video Consultation
                </h2>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Have a real-time video call with our experienced doctors. Get instant diagnosis, 
                  treatment recommendations, and immediate answers to your health concerns.
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Face-to-face consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Instant diagnosis & treatment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Perfect for urgent cases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">15-30 minute sessions</span>
                  </div>
                </div>
                
                {/* Price & Duration */}
                <div className="bg-green-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 font-medium">Duration: 15-30 minutes</span>
                    </div>
                    <div className="text-green-800 font-bold text-lg">₹599</div>
                  </div>
                </div>
                
                {/* Button */}
                <button
                  onClick={handleVideoConsultation}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedOption === 'video'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-600'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Video className="w-6 h-6" />
                    <span>Book Video Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
                
                {/* Best For */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Best for: Urgent health issues, detailed examinations, follow-ups
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">500+ Doctors</h3>
                <p className="text-sm text-gray-600">Qualified specialists across various medical fields</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">100% Secure</h3>
                <p className="text-sm text-gray-600">HIPAA compliant platform with end-to-end encryption</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock customer service and technical support</p>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-2 text-red-800">
              <AlertTriangle className="w-6 h-6" />
              <div className="text-center">
                <p className="font-bold">Medical Emergency?</p>
                <p className="text-sm">For life-threatening emergencies, please call 102 or visit your nearest emergency room immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing import for AlertTriangle
const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

export default PatientSite;
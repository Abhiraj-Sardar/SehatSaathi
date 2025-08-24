import React, { useState } from 'react';
import { Star, MessageSquare, Users, AlertTriangle, Phone, MapPin, Clock, User, FileText, Send, CheckCircle, XCircle, Heart, Activity, TrendingUp, Shield } from 'lucide-react';

const HealthcareFeedbackSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [feedbackForm, setFeedbackForm] = useState({
    rating: 0,
    category: '',
    comment: '',
    anonymous: false
  });
  const [referralForm, setReferralForm] = useState({
    type: '',
    urgency: '',
    patientName: '',
    condition: ''
  });

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'feedback', label: 'Feedback', icon: Star },
    { id: 'referrals', label: 'Referrals', icon: Users },
    { id: 'grievances', label: 'Grievances', icon: MessageSquare },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle }
  ];

  const stats = {
    totalFeedback: 1247,
    avgRating: 4.2,
    activeReferrals: 23,
    resolvedGrievances: 89,
    emergencyAlerts: 2
  };

  const recentFeedback = [
    { id: 1, rating: 5, facility: 'City General Hospital', category: 'Staff Behavior', time: '2 hours ago' },
    { id: 2, rating: 3, facility: 'Community Health Center', category: 'Wait Times', time: '4 hours ago' },
    { id: 3, rating: 4, facility: 'Metro Clinic', category: 'Cleanliness', time: '6 hours ago' }
  ];

  const emergencyAlerts = [
    { id: 1, type: 'Disease Outbreak', location: 'Downtown District', severity: 'High', time: '1 hour ago', affected: 45 },
    { id: 2, type: 'Medical Emergency', location: 'Riverside Hospital', severity: 'Critical', time: '30 minutes ago', affected: 1 }
  ];

  const StarRating = ({ rating, onRatingChange, readonly = false }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer transition-colors ${
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          } ${readonly ? 'cursor-default' : 'hover:text-yellow-400'}`}
          onClick={() => !readonly && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Feedback</p>
              <p className="text-3xl font-bold">{stats.totalFeedback}</p>
            </div>
            <Star className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Avg Rating</p>
              <p className="text-3xl font-bold">{stats.avgRating}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Active Referrals</p>
              <p className="text-3xl font-bold">{stats.activeReferrals}</p>
            </div>
            <Users className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Resolved Cases</p>
              <p className="text-3xl font-bold">{stats.resolvedGrievances}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-orange-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100">Emergency Alerts</p>
              <p className="text-3xl font-bold">{stats.emergencyAlerts}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
            Recent Feedback
          </h3>
          <div className="space-y-4">
            {recentFeedback.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <StarRating rating={item.rating} readonly />
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                  <p className="font-medium text-gray-800">{item.facility}</p>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
            Emergency Alerts
          </h3>
          <div className="space-y-4">
            {emergencyAlerts.map((alert) => (
              <div key={alert.id} className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'Critical' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'
                  }`}>
                    {alert.severity}
                  </span>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="font-medium text-gray-800">{alert.type}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {alert.location} • {alert.affected} affected
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FeedbackModule = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Star className="w-6 h-6 mr-3 text-yellow-500" />
        Submit Feedback
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
          <StarRating 
            rating={feedbackForm.rating} 
            onRatingChange={(rating) => setFeedbackForm({...feedbackForm, rating})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={feedbackForm.category}
            onChange={(e) => setFeedbackForm({...feedbackForm, category: e.target.value})}
          >
            <option value="">Select a category</option>
            <option value="staff-behavior">Staff Behavior</option>
            <option value="cleanliness">Cleanliness</option>
            <option value="wait-times">Wait Times</option>
            <option value="facilities">Facilities</option>
            <option value="treatment-quality">Treatment Quality</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Share your experience..."
            value={feedbackForm.comment}
            onChange={(e) => setFeedbackForm({...feedbackForm, comment: e.target.value})}
          />
          <p className="text-sm text-gray-500 mt-1">{feedbackForm.comment.length}/500 characters</p>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            className="mr-2"
            checked={feedbackForm.anonymous}
            onChange={(e) => setFeedbackForm({...feedbackForm, anonymous: e.target.checked})}
          />
          <label className="text-sm text-gray-700">Submit anonymously</label>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
          <Send className="w-5 h-5 mr-2" />
          Submit Feedback
        </button>
      </div>
    </div>
  );

  const ReferralModule = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Users className="w-6 h-6 mr-3 text-purple-600" />
        Patient Referral
      </h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Referral Type</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={referralForm.type}
              onChange={(e) => setReferralForm({...referralForm, type: e.target.value})}
            >
              <option value="">Select type</option>
              <option value="service-recommendation">Service Recommendation</option>
              <option value="case-escalation">Case Escalation</option>
              <option value="emergency-transfer">Emergency Transfer</option>
              <option value="specialist-referral">Specialist Referral</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={referralForm.urgency}
              onChange={(e) => setReferralForm({...referralForm, urgency: e.target.value})}
            >
              <option value="">Select urgency</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Patient Information</label>
          <input 
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Patient name or ID"
            value={referralForm.patientName}
            onChange={(e) => setReferralForm({...referralForm, patientName: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medical Condition & Notes</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Describe the condition and reason for referral..."
            value={referralForm.condition}
            onChange={(e) => setReferralForm({...referralForm, condition: e.target.value})}
          />
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-900 mb-2">Medical History Checklist</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center text-purple-700">
              <input type="checkbox" className="mr-2" />
              Current medications attached
            </label>
            <label className="flex items-center text-purple-700">
              <input type="checkbox" className="mr-2" />
              Allergies documented
            </label>
            <label className="flex items-center text-purple-700">
              <input type="checkbox" className="mr-2" />
              Previous treatments noted
            </label>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
          <Send className="w-5 h-5 mr-2" />
          Submit Referral
        </button>
      </div>
    </div>
  );

  const EmergencyModule = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
        Emergency Response
      </h2>
      
      <div className="space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-medium">Emergency Alert System</span>
          </div>
          <p className="text-red-700 text-sm mt-1">For life-threatening emergencies, call emergency services immediately</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Type</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="">Select emergency type</option>
              <option value="disease-outbreak">Disease Outbreak</option>
              <option value="mental-health-crisis">Mental Health Crisis</option>
              <option value="medical-emergency">Medical Emergency</option>
              <option value="natural-disaster">Natural Disaster</option>
              <option value="facility-emergency">Facility Emergency</option>
              <option value="mass-casualty">Mass Casualty</option>
              <option value="supply-shortage">Supply Shortage</option>
              <option value="staff-shortage">Staff Shortage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Severity Level</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="flex space-x-2">
            <input 
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Address or facility name"
            />
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Affected Population</label>
          <input 
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Number of people affected"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Immediate Needs</label>
          <div className="grid grid-cols-2 gap-3">
            {['Medical Supplies', 'Personnel', 'Evacuation', 'Equipment', 'Transportation', 'Communication'].map((need) => (
              <label key={need} className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                {need}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Description</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Provide detailed description of the emergency situation..."
          />
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
          <Phone className="w-5 h-5 mr-2" />
          Send Emergency Alert
        </button>
      </div>
    </div>
  );

  const GrievanceModule = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <MessageSquare className="w-6 h-6 mr-3 text-orange-600" />
        File a Grievance
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Complaint Category</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option value="">Select category</option>
            <option value="service-quality">Service Quality</option>
            <option value="staff-behavior">Staff Behavior</option>
            <option value="billing">Billing Issues</option>
            <option value="facility-conditions">Facility Conditions</option>
            <option value="access-issues">Access Issues</option>
            <option value="privacy-concerns">Privacy Concerns</option>
            <option value="discrimination">Discrimination</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
          <div className="flex space-x-4">
            {['Low', 'Medium', 'High', 'Urgent'].map((priority) => (
              <label key={priority} className="flex items-center">
                <input type="radio" name="priority" className="mr-2" />
                <span className={`text-sm ${
                  priority === 'Urgent' ? 'text-red-600' : priority === 'High' ? 'text-orange-600' : 'text-gray-700'
                }`}>
                  {priority}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Incident Details</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Please describe the incident in detail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident</label>
          <input 
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Desired Resolution</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="What outcome are you seeking?"
          />
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-orange-800 text-sm">
            <Shield className="w-4 h-4 inline mr-2" />
            Your grievance will be reviewed within 2 business days. You'll receive updates via your preferred communication method.
          </p>
        </div>

        <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center">
          <FileText className="w-5 h-5 mr-2" />
          Submit Grievance
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'feedback': return <FeedbackModule />;
      case 'referrals': return <ReferralModule />;
      case 'grievances': return <GrievanceModule />;
      case 'emergency': return <EmergencyModule />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Healthcare Feedback System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                <User className="w-4 h-4 inline mr-1" />
                Health Worker
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default HealthcareFeedbackSystem;
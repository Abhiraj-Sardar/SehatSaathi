{/* Events Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-gray-200/50">
              {events.map((event, index) => (
                <tr key={event.id} className="hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-green-50/30 transition-all duration-300 transform hover:scale-102" style={{animationDelay: `${index * 0.1}s`}}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.name}</p>
                      <p className="text-sm text-gray-500">{event.type}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm text-gray-900">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900">{event.location}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm text-gray-900">{event.participants}/{event.maxParticipants}</p>
                      <p className="text-sm text-gray-500">{event.volunteers} volunteers</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${getStatusColor(event.status)}`}>
                      {getStatusIcon(event.status)}
                      <span className="ml-1 capitalize">{event.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 transition-all duration-200 hover:scale-110">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 transition-all duration-200 hover:scale-110">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-all duration-200 hover:scale-110">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      import { useState } from 'react';
import { 
  Heart, Users, Calendar, MapPin, TrendingUp, DollarSign, 
  Bell, Settings, Plus, Eye, Edit, Trash2, Phone, Mail,
  Clock, CheckCircle, AlertTriangle, Target, Activity,
  FileText, PieChart, BarChart3, UserPlus, Star,
  Filter, Search, Download, Share2, MessageCircle
} from 'lucide-react';

export default function NGODashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Health Camp at Community Center completed successfully', time: '2 hours ago' },
    { id: 2, type: 'warning', message: 'Blood Donation Drive needs 5 more volunteers', time: '4 hours ago' },
    { id: 3, type: 'info', message: 'Monthly report due in 3 days', time: '1 day ago' }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Community Health Camp',
      type: 'Health Camp',
      date: '2024-08-25',
      time: '09:00 - 16:00',
      location: 'Community Center, Sector 15',
      status: 'upcoming',
      participants: 45,
      maxParticipants: 100,
      volunteers: 8
    },
    {
      id: 2,
      name: 'Blood Donation Drive',
      type: 'Blood Donation',
      date: '2024-08-22',
      time: '10:00 - 15:00',
      location: 'City Hospital',
      status: 'active',
      participants: 23,
      maxParticipants: 50,
      volunteers: 5
    },
    {
      id: 3,
      name: 'Child Vaccination Program',
      type: 'Vaccination',
      date: '2024-08-20',
      time: '08:00 - 14:00',
      location: 'Government School',
      status: 'completed',
      participants: 89,
      maxParticipants: 100,
      volunteers: 12
    }
  ]);

  const stats = {
    totalEvents: 24,
    activeEvents: 3,
    totalBeneficiaries: 1247,
    totalVolunteers: 45,
    monthlyGrowth: 12.5,
    completionRate: 87,
    totalDonations: 125000,
    avgRating: 4.6
  };

  const recentDonations = [
    { id: 1, donor: 'Anonymous', amount: 5000, type: 'Online', date: '2024-08-21' },
    { id: 2, donor: 'Local Business Group', amount: 15000, type: 'Bank Transfer', date: '2024-08-20' },
    { id: 3, donor: 'Individual Donor', amount: 2500, type: 'Cash', date: '2024-08-19' }
  ];

  const volunteers = [
    { id: 1, name: 'Dr. Sarah Johnson', role: 'Medical Volunteer', status: 'Active', events: 8, rating: 4.9 },
    { id: 2, name: 'Mike Chen', role: 'Event Coordinator', status: 'Active', events: 12, rating: 4.7 },
    { id: 3, name: 'Priya Sharma', role: 'Community Outreach', status: 'Active', events: 6, rating: 4.8 },
    { id: 4, name: 'John Martinez', role: 'Logistics', status: 'Inactive', events: 3, rating: 4.5 }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <Activity className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200 mb-1 transform hover:scale-105 ${
        activeTab === id
          ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:shadow-md'
      }`}
    >
      <Icon className={`w-5 h-5 mr-3 transition-all duration-200 ${activeTab === id ? 'animate-bounce' : ''}`} />
      {label}
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, change, color = 'blue' }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 animate-fade-in">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1 flex items-center animate-slide-in">
              <TrendingUp className="w-3 h-3 mr-1 animate-bounce" />
              +{change}% this month
            </p>
          )}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
          <Icon className={`w-6 h-6 text-white`} />
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Events" 
          value={stats.totalEvents} 
          icon={Calendar} 
          change={stats.monthlyGrowth}
          color="blue"
        />
        <StatCard 
          title="Active Events" 
          value={stats.activeEvents} 
          icon={Activity} 
          color="green"
        />
        <StatCard 
          title="Beneficiaries" 
          value={stats.totalBeneficiaries.toLocaleString()} 
          icon={Users} 
          change={15.2}
          color="purple"
        />
        <StatCard 
          title="Volunteers" 
          value={stats.totalVolunteers} 
          icon={UserPlus} 
          change={8.1}
          color="orange"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200/50 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
            <Plus className="w-6 h-6 text-blue-600 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-medium">New Event</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200/50 rounded-lg hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
            <UserPlus className="w-6 h-6 text-green-600 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Add Volunteer</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200/50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
            <FileText className="w-6 h-6 text-purple-600 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Generate Report</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200/50 rounded-lg hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
            <Share2 className="w-6 h-6 text-orange-600 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Share Updates</span>
          </button>
        </div>
      </div>

      {/* Recent Activity & Donations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 hover:scale-105 transition-all duration-200">View All</button>
          </div>
          <div className="space-y-3">
            {events.slice(0, 3).map((event, index) => (
              <div key={event.id} className="flex items-center p-3 border border-gray-100/50 rounded-lg hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-green-50/50 transition-all duration-300 transform hover:scale-102" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  event.status === 'active' ? 'bg-green-500 animate-pulse' :
                  event.status === 'upcoming' ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-500">{event.date} • {event.location}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Donations</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 hover:scale-105 transition-all duration-200">View All</button>
          </div>
          <div className="space-y-3">
            {recentDonations.map((donation, index) => (
              <div key={donation.id} className="flex items-center p-3 border border-gray-100/50 rounded-lg hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 transition-all duration-300 transform hover:scale-102" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">₹{donation.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{donation.donor} • {donation.type}</p>
                </div>
                <span className="text-xs text-gray-500">{donation.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      {/* Events Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </button>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map(event => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.name}</p>
                      <p className="text-sm text-gray-500">{event.type}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm text-gray-900">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900">{event.location}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm text-gray-900">{event.participants}/{event.maxParticipants}</p>
                      <p className="text-sm text-gray-500">{event.volunteers} volunteers</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {getStatusIcon(event.status)}
                      <span className="ml-1 capitalize">{event.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderVolunteers = () => (
    <div className="space-y-6">
      {/* Volunteers Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Volunteer
        </button>
      </div>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer, index) => (
          <div key={volunteer.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105 ${
                volunteer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {volunteer.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{volunteer.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{volunteer.role}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Events Attended:</span>
                <span className="font-medium">{volunteer.events}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rating:</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                  <span className="ml-1 font-medium">{volunteer.rating}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 px-3 py-2 text-sm bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105">
                Contact
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all duration-200 transform hover:scale-105">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Success Rate</h3>
            <TrendingUp className="w-4 h-4 text-green-500 animate-bounce" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
          <p className="text-sm text-green-600">+5.2% from last month</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Donations</h3>
            <DollarSign className="w-4 h-4 text-blue-500 animate-pulse" />
          </div>
          <p className="text-2xl font-bold text-gray-900">₹{stats.totalDonations.toLocaleString()}</p>
          <p className="text-sm text-blue-600">+12.8% from last month</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg Rating</h3>
            <Star className="w-4 h-4 text-yellow-500 animate-spin" style={{animationDuration: '3s'}} />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.avgRating}/5</p>
          <p className="text-sm text-yellow-600">Excellent feedback</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Growth Rate</h3>
            <BarChart3 className="w-4 h-4 text-purple-500 animate-bounce" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.monthlyGrowth}%</p>
          <p className="text-sm text-purple-600">Monthly growth</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Performance</h3>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-pulse" />
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100/50 hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficiary Demographics</h3>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-spin" style={{animationDuration: '4s'}} />
              <p className="text-gray-500">Pie chart would go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Health For All NGO</h1>
                <p className="text-sm text-gray-600">Making healthcare accessible to everyone</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </div>
              
              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">A</span>
                </div>
                <span className="text-sm font-medium text-gray-900">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>



      {/* Notifications Bar */}
      {notifications.length > 0 && (
        <div className="bg-blue-50 border-b border-blue-200 px-6 py-2">
          <div className="flex items-center space-x-4 text-sm">
            <Bell className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800">
              {notifications[0].message}
            </span>
            <button className="text-blue-600 hover:text-blue-800 ml-auto">
              View All ({notifications.length})
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="px-6 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'volunteers' && renderVolunteers()}
        {activeTab === 'analytics' && renderAnalytics()}
      </main>
    </div>
  );
}
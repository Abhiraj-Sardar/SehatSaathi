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
      className={`flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-blue-500 text-white'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, change, color = 'blue' }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +{change}% this month
            </p>
          )}
        </div>
        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
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
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-sm font-medium">New Event</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <UserPlus className="w-6 h-6 text-green-600 mb-2" />
            <span className="text-sm font-medium">Add Volunteer</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <span className="text-sm font-medium">Generate Report</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="w-6 h-6 text-orange-600 mb-2" />
            <span className="text-sm font-medium">Share Updates</span>
          </button>
        </div>
      </div>

      {/* Recent Activity & Donations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-3">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="flex items-center p-3 border border-gray-100 rounded-lg">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  event.status === 'active' ? 'bg-green-500' :
                  event.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-400'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-500">{event.date} • {event.location}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Donations</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-3">
            {recentDonations.map(donation => (
              <div key={donation.id} className="flex items-center p-3 border border-gray-100 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
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
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
          <p className="text-gray-600">Manage all your NGO events and activities</p>
        </div>
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
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Volunteer Management</h2>
          <p className="text-gray-600">Manage your volunteer team and their activities</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Volunteer
        </button>
      </div>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map(volunteer => (
          <div key={volunteer.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
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
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{volunteer.rating}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                Contact
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
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
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-600">Track your NGO's impact and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Success Rate</h3>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
          <p className="text-sm text-green-600">+5.2% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Donations</h3>
            <DollarSign className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">₹{stats.totalDonations.toLocaleString()}</p>
          <p className="text-sm text-blue-600">+12.8% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg Rating</h3>
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.avgRating}/5</p>
          <p className="text-sm text-yellow-600">Excellent feedback</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Growth Rate</h3>
            <BarChart3 className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.monthlyGrowth}%</p>
          <p className="text-sm text-purple-600">Monthly growth</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Performance</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficiary Demographics</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
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

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex space-x-4 overflow-x-auto">
          <TabButton id="overview" label="Overview" icon={Target} />
          <TabButton id="events" label="Events" icon={Calendar} />
          <TabButton id="volunteers" label="Volunteers" icon={Users} />
          <TabButton id="analytics" label="Analytics" icon={BarChart3} />
        </div>
      </nav>

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
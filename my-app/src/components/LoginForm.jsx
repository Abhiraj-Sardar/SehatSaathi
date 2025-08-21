import { useState } from 'react';
import { User, Lock, UserCheck, Heart, Building2 } from 'lucide-react';

export default function LoginForm() {
  const [selectedRole, setSelectedRole] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Demo user credentials for each role
  const demoUsers = {
    doctor: {
      email: 'dr.smith@hospital.com',
      password: 'doctor123',
      name: 'Dr. John Smith',
      role: 'Doctor',
      details: 'Cardiologist at City General Hospital'
    },
    patient: {
      email: 'jane.doe@email.com',
      password: 'patient123',
      name: 'Jane Doe',
      role: 'Patient',
      details: 'Patient ID: P001 | DOB: 1985-06-15'
    },
    ngo: {
      email: 'admin@healthngo.org',
      password: 'ngo123',
      name: 'Health For All NGO',
      role: 'NGO',
      details: 'Healthcare outreach organization'
    }
  };

  const roles = [
    { 
      id: 'patient', 
      label: 'Patient', 
      icon: User,
      color: 'bg-blue-500 hover:bg-blue-600',
      bgColor: 'bg-blue-50 border-blue-200'
    },
    { 
      id: 'doctor', 
      label: 'Doctor', 
      icon: UserCheck,
      color: 'bg-green-500 hover:bg-green-600',
      bgColor: 'bg-green-50 border-green-200'
    },
    { 
      id: 'ngo', 
      label: 'NGO', 
      icon: Building2,
      color: 'bg-purple-500 hover:bg-purple-600',
      bgColor: 'bg-purple-50 border-purple-200'
    }
  ];

  const handleRoleChange = (roleId) => {
    setSelectedRole(roleId);
    // Auto-fill demo credentials
    setEmail(demoUsers[roleId].email);
    setPassword(demoUsers[roleId].password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = demoUsers[selectedRole];
    
    if (email === user.email && password === user.password) {
      setLoggedInUser(user);
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Use the demo credentials provided.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn && loggedInUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-600 mt-2">Successfully logged in</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">{loggedInUser.name}</h3>
            <p className="text-sm text-gray-600 mb-1">Role: {loggedInUser.role}</p>
            <p className="text-sm text-gray-600">{loggedInUser.details}</p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Healthcare Portal</h1>
          <p className="text-gray-600 mt-2">Select your role to continue</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Login as:
          </label>
          <div className="grid grid-cols-1 gap-2">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleChange(role.id)}
                  className={`flex items-center p-3 border-2 rounded-lg transition-all ${
                    selectedRole === role.id 
                      ? `${role.bgColor} border-current` 
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 mr-3 ${
                    selectedRole === role.id ? 'text-current' : 'text-gray-400'
                  }`} />
                  <span className={`font-medium ${
                    selectedRole === role.id ? 'text-current' : 'text-gray-700'
                  }`}>
                    {role.label}
                  </span>
                  {selectedRole === role.id && (
                    <div className="ml-auto w-2 h-2 bg-current rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Credentials Display */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-medium text-yellow-800 mb-2">Demo Credentials:</p>
          <p className="text-xs text-yellow-700">
            Email: {demoUsers[selectedRole].email}<br/>
            Password: {demoUsers[selectedRole].password}
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition-colors ${
              roles.find(r => r.id === selectedRole)?.color
            }`}
          >
            Login as {roles.find(r => r.id === selectedRole)?.label}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Home, User, Settings, FileText, Mail, Calendar } from 'lucide-react';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Profile', icon: User },
    { name: 'Documents', icon: FileText },
    { name: 'Messages', icon: Mail },
    { name: 'Calendar', icon: Calendar },
    { name: 'Settings', icon: Settings }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - 30% width */}
      <div className="w-3/10 bg-slate-800 text-white p-6 shadow-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-300 text-sm mt-1">Welcome back!</p>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeMenu === item.name
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Content Area - 70% width */}
      <div className="w-7/10 p-8 overflow-y-auto">
        <div className="max-w-4xl">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{activeMenu}</h2>
            <p className="text-gray-600">This is the {activeMenu.toLowerCase()} section of your dashboard.</p>
          </header>
          
          
          
        </div>
      </div>
    </div>
  );
}
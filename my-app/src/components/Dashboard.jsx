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
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Card 1</h3>
                <p className="text-blue-600 text-sm">Sample content for the {activeMenu} section.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Card 2</h3>
                <p className="text-green-600 text-sm">More content related to {activeMenu}.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Card 3</h3>
                <p className="text-purple-600 text-sm">Additional {activeMenu} information here.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Current Selection: {activeMenu}</h4>
              <p className="text-gray-600 mb-4">
                You've selected the {activeMenu} menu item. The content in this area would typically display 
                information and functionality related to the selected menu option.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Action Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
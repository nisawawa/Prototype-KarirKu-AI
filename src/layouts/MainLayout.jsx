import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User, LayoutDashboard, LogOut } from 'lucide-react';
import CustomLogo from '../components/CustomLogo';

const MainLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Job Matcher', path: '/job-matcher', icon: CustomLogo },
    { name: 'Profil', path: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-primary-50">
      {/* Sidebar / Top Navigation */}
      <nav className="w-full md:w-64 bg-white border-r border-primary-200 flex-shrink-0 z-10 sticky top-0 md:h-screen md:sticky md:top-0 shadow-sm md:shadow-none flex flex-col">
        <div className="p-6 flex items-center justify-between md:block">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-900">
            <CustomLogo className="w-8 h-8 text-primary-900" />
            KarirKu AI
          </Link>
          {/* Mobile menu button could go here */}
        </div>
        
        <div className="hidden md:flex flex-col px-4 mt-6 gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary-900 text-white shadow-md' 
                    : 'text-primary-600 hover:bg-primary-100 hover:text-primary-900'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-300' : ''}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Logout Button (Desktop) */}
        <div className="hidden md:block p-4 mt-auto border-t border-primary-100">
          <Link 
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Keluar</span>
          </Link>
        </div>

        {/* Mobile bottom nav */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-primary-200 flex justify-around py-3 z-50 pb-safe">
           {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  isActive ? 'text-primary-900' : 'text-primary-500'
                }`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
          <Link
            to="/"
            className="flex flex-col items-center p-2 rounded-lg text-red-500 hover:text-red-600"
          >
            <LogOut className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-medium">Keluar</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-10 pb-24 md:pb-10 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

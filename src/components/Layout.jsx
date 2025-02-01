import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      
      <div className="flex-1">
        <Header />
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-50 
            transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        {/* Main Content */}
        <Outlet />
        
        <Footer />
      </div>
    </div>
  );
}

export default Layout; 
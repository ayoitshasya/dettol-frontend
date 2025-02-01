import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isSidebarOpen }) {
  const location = useLocation();

  const MenuItem = ({ icon, text, to }) => (
    <Link 
      to={to}
      className={`flex items-center px-4 py-3 rounded-xl transition-colors duration-200 
        ${location.pathname === to 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  );

  return (
    <aside className={`fixed lg:static lg:flex flex-col w-64 h-screen bg-gray-50 border-r border-gray-100 
      transition-transform duration-300 ease-in-out overflow-hidden
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <span className="font-semibold text-xl">Menu</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="px-4 py-6 space-y-2">
          <MenuItem 
            to="/"
            icon={<svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>}
            text="Home" 
          />

          <MenuItem 
            to="/market-insights"
            icon={<svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
            </svg>}
            text="Market Insights" 
          />

          <MenuItem 
            to="/custom-data"
            icon={<svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>}
            text="Custom Data" 
          />

          <MenuItem 
            to="/financial-data"
            icon={<svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>}
            text="Financial Data" 
          />
        </nav>
      </div>

      <div className="sticky bottom-0 w-full bg-gray-50 border-t border-gray-100 p-4">
        <Link to="/support" className="flex items-center px-4 py-3 rounded-xl 
          transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600">
          <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span className="font-medium">Help Support</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar; 
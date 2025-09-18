"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Monday 🌟', path: '/' },
    { name: 'Tue-Thu ⚡', path: '/tue-thu' },
    { name: 'Friday 🎬', path: '/friday' },
    { name: 'Saturday 💻', path: '/saturday' },
    { name: 'Sunday 🚀', path: '/sunday' },
    { name: 'Journal 📝', path: '/journal' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-800/40 to-purple-800/40 backdrop-blur-lg rounded-2xl p-4 mb-8 shadow-xl border border-indigo-500/20 relative z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mr-4">My Weekly Schedule</span>
          <button 
            className="md:hidden text-white text-2xl bg-indigo-600/30 p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile menu - separate from layout flow */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:block fixed md:static inset-0 md:inset-auto pt-24 md:pt-0 z-50`}
        style={{top: '80px', height: 'calc(100vh - 80px)'}}
      >
        <div className="absolute inset-0 bg-indigo-900/95 md:bg-transparent md:relative flex flex-col md:flex-row items-center justify-start md:justify-end gap-4 p-6 md:p-0">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 w-full md:w-auto text-center rounded-full font-medium transition-all duration-300 ${
                pathname === item.path 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
                  : 'text-white/80 hover:bg-indigo-600/30 hover:text-white hover:scale-105'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
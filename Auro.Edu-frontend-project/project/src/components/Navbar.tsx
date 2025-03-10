import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Users } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-indigo-700' : '';
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive('/')}`}>
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/courses" className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive('/courses')}`}>
              <BookOpen size={20} />
              <span>Courses</span>
            </Link>
            <Link to="/community" className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive('/community')}`}>
              <Users size={20} />
              <span>Community</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
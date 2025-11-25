import React, { useState } from 'react';
import { Menu, X, Compass,User, BarChart2 } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Compass className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-blue-600">EduSmart</h1>
            <p className="text-xs text-gray-500">Personalized learning journeys</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/paths" className="text-gray-700 hover:text-blue-600 transition-colors">
            Learning Paths
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
            Resources
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <BarChart2 className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/signup" className="btn btn-primary flex items-center space-x-1">
            <User className="h-5 w-5" />
            <span>Sign Up</span>
          </Link>
          <Link href="/chat" className="btn btn-primary flex items-center space-x-1">
            <User className="h-5 w-5" />
            <span>Chat</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fadeIn">
          <div className="container space-y-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/paths" className="block py-2 text-gray-700 hover:text-blue-600">
              Learning Paths
            </Link>
            <Link href="/resources" className="block py-2 text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link href="/signup" className="btn btn-primary inline-flex items-center justify-center space-x-2">
                <User className="h-5 w-5" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
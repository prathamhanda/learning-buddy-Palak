import React, { useState } from 'react';
import { Menu, X, Compass, User, BarChart2, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/95 transition-all duration-300">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <Compass className="h-8 w-8 text-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
          <div>
            <h1 className="text-xl font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300">LearningBuddy</h1>
            <p className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Personalized learning journeys</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/paths" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group">
            <span>Learning Paths</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group">
            <span>Resources</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 group">
            <BarChart2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Dashboard</span>
          </Link>
          <Link href="/signup" className="btn btn-primary flex items-center space-x-1 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
            <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Sign Up</span>
          </Link>
          <Link href="/contact" className="btn bg-green-600 hover:bg-green-700 text-white flex items-center space-x-1 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
          >
            {isOpen ? 
              <X className="h-6 w-6 rotate-180 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 hover:rotate-180 transition-transform duration-300" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 py-4">
          <div className="container space-y-2">
            <Link href="/" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2">
              Home
            </Link>
            <Link href="/paths" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2">
              Learning Paths
            </Link>
            <Link href="/resources" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2">
              Resources
            </Link>
            <Link href="/about" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2">
              About
            </Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
              <Link href="/dashboard" className="flex items-center space-x-2 py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2">
                <BarChart2 className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
                <span>Dashboard</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 py-3 px-4 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:translate-x-2">
                <Mail className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
                <span>Contact Us</span>
              </Link>
              <Link href="/signup" className="btn btn-primary inline-flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
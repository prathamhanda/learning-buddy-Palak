const _jsxFileName = "src\\components\\Navbar.tsx";import React, { useState } from 'react';
import { Menu, X, Compass, User, BarChart2, Mail } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    React.createElement('nav', { className: "bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/95 transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      , React.createElement('div', { className: "container flex justify-between items-center py-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
        , React.createElement('div', { className: "flex items-center space-x-2 group cursor-pointer"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
          , React.createElement(Compass, { className: "h-8 w-8 text-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}} )
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
            , React.createElement('h1', { className: "text-xl font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "LearningBuddy")
            , React.createElement('p', { className: "text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, "Personalized learning journeys"  )
          )
        )

        /* Desktop Navigation */
        , React.createElement('div', { className: "hidden md:flex items-center space-x-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
          , React.createElement(Link, { href: "/", className: "text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Home")
            , React.createElement('span', { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}})
          )
          , React.createElement(Link, { href: "/paths", className: "text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "Learning Paths" )
            , React.createElement('span', { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}})
          )
          , React.createElement(Link, { href: "/resources", className: "text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Resources")
            , React.createElement('span', { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}})
          )
          , React.createElement(Link, { href: "/about", className: "text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 relative group"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "About")
            , React.createElement('span', { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}})
          )
        )

        /* User Actions */
        , React.createElement('div', { className: "hidden md:flex items-center space-x-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
          , React.createElement(Link, { href: "/dashboard", className: "flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 group"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
            , React.createElement(BarChart2, { className: "h-5 w-5 group-hover:rotate-12 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}} )
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}, "Dashboard")
          )
          , React.createElement(Link, { href: "/signup", className: "btn btn-primary flex items-center space-x-1 hover:scale-105 hover:shadow-lg transition-all duration-300 group"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
            , React.createElement(User, { className: "h-5 w-5 group-hover:scale-110 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} )
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}, "Sign Up" )
          )
          , React.createElement(Link, { href: "/contact", className: "btn bg-green-600 hover:bg-green-700 text-white flex items-center space-x-1 hover:scale-105 hover:shadow-lg transition-all duration-300 group"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
            , React.createElement(Mail, { className: "h-5 w-5 group-hover:scale-110 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}} )
            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, "Contact Us" )
          )
        )

        /* Mobile Menu Button */
        , React.createElement('div', { className: "md:hidden", __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
          , React.createElement('button', { 
            onClick: () => setIsOpen(!isOpen), 
            className: "text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}

            , isOpen ? 
              React.createElement(X, { className: "h-6 w-6 rotate-180 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}} ) : 
              React.createElement(Menu, { className: "h-6 w-6 hover:rotate-180 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}} )
            
          )
        )
      )

      /* Mobile Menu */
      , React.createElement('div', { className: `md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
        , React.createElement('div', { className: "bg-white border-t border-gray-100 py-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
          , React.createElement('div', { className: "container space-y-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
            , React.createElement(Link, { href: "/", className: "block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}, "Home"

            )
            , React.createElement(Link, { href: "/paths", className: "block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "Learning Paths"

            )
            , React.createElement(Link, { href: "/resources", className: "block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, "Resources"

            )
            , React.createElement(Link, { href: "/about", className: "block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}, "About"

            )
            , React.createElement('div', { className: "pt-4 border-t border-gray-100 flex flex-col space-y-2"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
              , React.createElement(Link, { href: "/dashboard", className: "flex items-center space-x-2 py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
                , React.createElement(BarChart2, { className: "h-5 w-5 hover:rotate-12 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "Dashboard")
              )
              , React.createElement(Link, { href: "/contact", className: "flex items-center space-x-2 py-3 px-4 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:translate-x-2"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                , React.createElement(Mail, { className: "h-5 w-5 hover:rotate-12 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, "Contact Us" )
              )
              , React.createElement(Link, { href: "/signup", className: "btn btn-primary inline-flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg transition-all duration-300"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
                , React.createElement(User, { className: "h-5 w-5 group-hover:scale-110 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, "Sign Up" )
              )
            )
          )
        )
      )
    )
  );
};

export default Navbar;
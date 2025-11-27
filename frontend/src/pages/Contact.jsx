const _jsxFileName = "src\\pages\\Contact.tsx";import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
      , React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
          , React.createElement('div', { className: "text-center mb-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
            , React.createElement('h1', { className: "text-4xl font-bold text-gray-900 mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, "Contact Us" )
            , React.createElement('p', { className: "text-xl text-gray-600 max-w-2xl mx-auto"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you soon."

            )
          )

          , React.createElement('div', { className: "max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('div', { className: "relative", style: { height: '600px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
              , React.createElement('iframe', { 
                'data-tally-src': "https://tally.so/r/3q2pYk?transparentBackground=1", 
                width: "100%", 
                height: "100%", 
                frameBorder: "0", 
                marginHeight: 0,
                marginWidth: 0,
                title: "Contact form" ,
                className: "rounded-2xl", __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
              )
            )
          )

          , React.createElement('div', { className: "text-center mt-8 text-gray-500"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
            , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Or reach out to us directly at "       , React.createElement('a', { href: "mailto:pgoyal2_be23@thapar.edu", className: "text-blue-600 hover:underline" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "pgoyal2_be23@thapar.edu"))
          )
        )
      )
    )
  );
};

export default Contact;
const _jsxFileName = "src\\components\\dashboard\\RecommendedPaths.tsx";import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Link } from '../ui/Link';





const RecommendedPaths = ({ paths }) => {
  return (
    React.createElement('div', { className: "card p-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
      , React.createElement('div', { className: "flex justify-between items-center mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
        , React.createElement('h3', { className: "text-lg font-semibold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Recommended For You"  )
        , React.createElement(Link, { href: "/paths", className: "text-blue-600 hover:text-blue-700 text-sm flex items-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, "View All"

          , React.createElement(ArrowRight, { className: "h-4 w-4 ml-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}} )
        )
      )

      , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
        , paths.slice(0, 3).map((path) => (
          React.createElement('div', { key: path.id, className: "flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
            , React.createElement('img', { 
              src: path.image, 
              alt: path.title,
              className: "w-16 h-16 object-cover rounded-lg mr-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
            )
            , React.createElement('div', { className: "flex-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
              , React.createElement('h4', { className: "font-medium line-clamp-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, path.title)
              , React.createElement('div', { className: "flex items-center space-x-3 text-sm text-gray-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, path.duration)
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}, "•")
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, path.level)
              )
            )
            , React.createElement(Link, { 
              href: `/path/${path.id}`,
              className: "ml-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}

              , React.createElement(ArrowRight, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}} )
            )
          )
        ))
      )
    )
  );
};

export default RecommendedPaths;
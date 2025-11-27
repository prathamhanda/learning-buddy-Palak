const _jsxFileName = "src\\components\\dashboard\\LearningPathCard.tsx";import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

import { Link } from '../ui/Link';





const LearningPathCard = ({ path }) => {
  // Calculate completion percentage
  const completedModules = path.modules.filter(module => module.completed).length;
  const totalModules = path.modules.length;
  const completionPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    React.createElement('div', { className: "card group hover:translate-y-[-5px] hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-blue-200"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
      , React.createElement('div', { className: "relative h-48 overflow-hidden rounded-t-xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
        , React.createElement('img', { 
          src: path.image, 
          alt: path.title, 
          className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        )
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}})
        , React.createElement('div', { className: "absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-[-2px]"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , React.createElement('span', { className: "inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md group-hover:bg-blue-500 group-hover:scale-105 transition-all duration-300"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
            , path.category
          )
          , React.createElement('div', { className: "flex items-center mt-2 text-white space-x-3"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('div', { className: "flex items-center group-hover:text-blue-200 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
              , React.createElement(Clock, { className: "h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}} )
              , React.createElement('span', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, path.duration)
            )
            , React.createElement('div', { className: "flex items-center group-hover:text-blue-200 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
              , React.createElement(Users, { className: "h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} )
              , React.createElement('span', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, path.enrolledCount.toLocaleString())
            )
            , React.createElement('div', { className: "flex items-center group-hover:text-blue-200 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
              , React.createElement(Star, { className: "h-4 w-4 mr-1 text-yellow-400 fill-yellow-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}} )
              , React.createElement('span', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, path.rating)
            )
          )
        )
      )

      , React.createElement('div', { className: "p-5 group-hover:bg-gray-50 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}
        , React.createElement('h3', { className: "text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}, path.title)
        , React.createElement('p', { className: "text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}, path.description)

        /* Progress indicator */
        , React.createElement('div', { className: "mb-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
          , React.createElement('div', { className: "flex justify-between text-sm mb-1"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
            , React.createElement('span', { className: "font-medium group-hover:text-blue-700 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, completedModules, " of "  , totalModules, " modules completed"  )
            , React.createElement('span', { className: "text-blue-600 font-medium group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, Math.round(completionPercentage), "%")
          )
          , React.createElement('div', { className: "h-2 bg-gray-200 rounded-full overflow-hidden group-hover:shadow-inner transition-all duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
            , React.createElement('div', { 
              className: "h-full bg-blue-600 rounded-full transition-all duration-500 ease-out group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:animate-pulse"         ,
              style: { width: `${completionPercentage}%` }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
)
          )
        )

        , React.createElement(Link, { 
          href: `/path/${path.id}`,
          className: "flex items-center justify-center w-full py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 hover:shadow-lg rounded-md font-medium transition-all duration-300 group-hover:border-purple-600 group-hover:text-purple-600"                 , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
, "Continue Learning "
            , React.createElement(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}} )
        )
      )
    )
  );
};

export default LearningPathCard;
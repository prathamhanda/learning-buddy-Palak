const _jsxFileName = "src\\pages\\Paths.tsx";import React from 'react';
import Layout from '../components/Layout';
import LearningPathCard from '../components/dashboard/LearningPathCard';
import { dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';

const Paths = () => {
  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}
      , React.createElement('div', { className: "container py-12" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
        , React.createElement('div', { className: "flex items-center justify-between mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
            , React.createElement('h1', { className: "text-3xl font-bold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}, "Learning Paths" )
            , React.createElement('p', { className: "text-gray-500 mt-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Curated journeys to help you learn faster."      )
          )
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
            , React.createElement(Link, { href: "/paths?filter=popular", className: "btn btn-outline" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Browse Popular" )
          )
        )

        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
          , dummyLearningPaths.map((path) => (
            React.createElement(LearningPathCard, { key: path.id, path: path, __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
          ))
        )
      )
    )
  );
};

export default Paths;
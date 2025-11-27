import React, { useEffect, useState } from 'react';
import { Clock, BookOpen, Search, Bell, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import DashboardStats from '../components/dashboard/DashboardStats';
import LearningPathCard from '../components/dashboard/LearningPathCard';
import ProgressChart from '../components/dashboard/ProgressChart';
import RecommendedPaths from '../components/dashboard/RecommendedPaths';
import SkillsRadar from '../components/dashboard/SkillsRadar';
import { dummyUser, dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Weekly activity data
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [45, 60, 30, 90, 15, 75, 45]
  };

  // Skills data
  const skillsData = [
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 60 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Node.js', level: 40 },
    { name: 'Python', level: 25 }
  ];

  // Stats data
  const statsData = {
    learningTime: '24h 30m',
    completedPaths: 2,
    activePaths: 3,
    streak: 7,
    lastActivity: 'Today'
  };

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
      , React.createElement('div', { className: "bg-gray-50 min-h-screen pb-12"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
        /* Dashboard Header */
        , React.createElement('div', { className: `bg-white shadow-sm transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
          , React.createElement('div', { className: "container py-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
            , React.createElement('div', { className: "flex justify-between items-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
              , React.createElement('h1', { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}, "Dashboard")
              , React.createElement('div', { className: "flex items-center space-x-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                , React.createElement('div', { className: "relative group" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                  , React.createElement('input', {
                    type: "text",
                    placeholder: "Search courses..." ,
                    className: "pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg transition-all duration-300 focus:scale-105"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
                  )
                  , React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
                )
                , React.createElement('button', { className: "relative p-2 text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300 group"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
                  , React.createElement(Bell, { className: "h-6 w-6 group-hover:rotate-12 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}} )
                  , React.createElement('span', { className: "absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}})
                )
                , React.createElement('div', { className: "flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300 group"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
                  , React.createElement('img', { 
                    src: dummyUser.avatar || 'https://via.placeholder.com/40', 
                    alt: dummyUser.name,
                    className: "h-10 w-10 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
                  )
                  , React.createElement('div', { className: "hidden md:block" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
                    , React.createElement('p', { className: "font-medium group-hover:text-blue-600 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, dummyUser.name)
                    , React.createElement('p', { className: "text-xs text-gray-500 group-hover:text-blue-400 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, dummyUser.level)
                  )
                  , React.createElement(ChevronDown, { className: "h-4 w-4 text-gray-500 group-hover:text-blue-500 group-hover:rotate-180 transition-all duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} )
                )
              )
            )
          )
        )

        , React.createElement('div', { className: "container mt-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
          /* Dashboard Welcome */
          , React.createElement('div', { className: `card p-6 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white transform transition-all duration-700 delay-200 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
            , React.createElement('div', { className: "flex flex-col md:flex-row md:items-center justify-between"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
                , React.createElement('h2', { className: "text-2xl font-bold mb-2 animate-pulse"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "Welcome back, "  , dummyUser.name, "!")
                , React.createElement('p', { className: "mb-4 hover:text-blue-100 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}, "Continue your learning journey and achieve your goals."       )
                , React.createElement('div', { className: "flex items-center space-x-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
                  , React.createElement(Link, { href: "/path/1", className: "btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-lg transition-all duration-300 group"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}, "Continue Learning"

                  )
                  , React.createElement('div', { className: "flex items-center space-x-1 text-blue-200 hover:text-white transition-colors duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}
                    , React.createElement(Clock, { className: "h-5 w-5 hover:rotate-12 transition-transform duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}} )
                    , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "Last login: Today, 9:45 AM"    )
                  )
                )
              )
              , React.createElement('div', { className: "mt-6 md:mt-0 flex items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
                , React.createElement('div', { className: "bg-blue-500 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all duration-300 hover:scale-110"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
                  , React.createElement(BookOpen, { className: "h-16 w-16 hover:rotate-12 transition-transform duration-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}} )
                )
              )
            )
          )

          /* Stats Cards */
          , React.createElement('div', { className: `transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
            , React.createElement(DashboardStats, { stats: statsData, __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}} )
          )

          /* Main Content */
          , React.createElement('div', { className: `grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
            /* Left Column */
            , React.createElement('div', { className: "lg:col-span-2 space-y-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
                , React.createElement('div', { className: "flex items-center justify-between mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                  , React.createElement('h3', { className: "text-xl font-semibold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, "Your Learning Paths"  )
                  , React.createElement(Link, { href: "/paths", className: "text-blue-600 hover:text-blue-700 text-sm flex items-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "View All "
                      , React.createElement(ChevronDown, { className: "h-4 w-4 ml-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}} )
                  )
                )

                , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
                  , dummyLearningPaths.slice(0, 2).map((path) => (
                    React.createElement(LearningPathCard, { key: path.id, path: path, __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}} )
                  ))
                )
              )

              , React.createElement(ProgressChart, { data: weeklyData, __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}} )
            )

            /* Right Column */
            , React.createElement('div', { className: "space-y-8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}
              , React.createElement(RecommendedPaths, { paths: dummyLearningPaths, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}} )
              , React.createElement(SkillsRadar, { skills: skillsData, __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}} )

              , React.createElement('div', { className: "card p-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}
                , React.createElement('h3', { className: "text-lg font-semibold mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Upcoming Deadlines" )
                , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}
                  , React.createElement('div', { className: "border-l-4 border-yellow-500 pl-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
                    , React.createElement('p', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}}, "JavaScript Project Submission"  )
                    , React.createElement('p', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}, "Web Development Fundamentals"  )
                    , React.createElement('p', { className: "text-xs text-red-500 font-medium"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}, "Due in 2 days"   )
                  )
                  , React.createElement('div', { className: "border-l-4 border-purple-500 pl-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}
                    , React.createElement('p', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}, "Quiz: Python Basics"  )
                    , React.createElement('p', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}, "Data Science Essentials"  )
                    , React.createElement('p', { className: "text-xs text-orange-500 font-medium"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}, "Due in 5 days"   )
                  )
                  , React.createElement('div', { className: "border-l-4 border-blue-500 pl-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
                    , React.createElement('p', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "React Components Exercise"  )
                    , React.createElement('p', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, "React Native Development"  )
                    , React.createElement('p', { className: "text-xs text-gray-500 font-medium"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, "Due in 10 days"   )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Dashboard;
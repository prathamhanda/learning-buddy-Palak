const _jsxFileName = "src\\pages\\Resources.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';
import { 
  Search, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Video, 
  FileText, 
  PenTool, 
  Clock, 
  Tag, 
  Star,
  Eye,
  Heart,
  Share2,
  Play,
  CheckCircle
} from 'lucide-react';














const Resources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced resources with additional properties
  const enhancedResources = dummyLearningPaths.flatMap(p =>
    p.modules.flatMap(m => m.resources.map(r => ({
      ...r,
      pathTitle: p.title,
      description: `Learn ${r.title.toLowerCase()} through this comprehensive ${r.type} resource from ${p.title}.`,
      difficulty: p.level ,
      views: Math.floor(Math.random() * 10000) + 100,
      rating: 4 + Math.random()
    })))
  );

  // Filter and sort resources
  const filteredResources = enhancedResources
    .filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           _optionalChain([resource, 'access', _ => _.pathTitle, 'optionalAccess', _2 => _2.toLowerCase, 'call', _3 => _3(), 'access', _4 => _4.includes, 'call', _5 => _5(searchTerm.toLowerCase())]) ||
                           _optionalChain([resource, 'access', _6 => _6.description, 'optionalAccess', _7 => _7.toLowerCase, 'call', _8 => _8(), 'access', _9 => _9.includes, 'call', _10 => _10(searchTerm.toLowerCase())]);
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
      return matchesSearch && matchesType && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'views':
          return (b.views || 0) - (a.views || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'video':
        return React.createElement(Video, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} );
      case 'article':
        return React.createElement(FileText, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}} );
      case 'quiz':
        return React.createElement(PenTool, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}} );
      case 'exercise':
        return React.createElement(BookOpen, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}} );
      default:
        return React.createElement(FileText, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}} );
    }
  };

  const getResourceUrl = (resource) => {
    const title = resource.title.toLowerCase();
    const type = resource.type.toLowerCase();
    
    // Generate relevant URLs based on content
    if (type === 'video') {
      if (title.includes('react') || title.includes('javascript')) {
        return 'https://www.youtube.com/watch?v=Tn6-PIqc4UM'; // React tutorial
      } else if (title.includes('python') || title.includes('programming')) {
        return 'https://www.youtube.com/watch?v=8DvywoWv6fI'; // Python tutorial
      } else if (title.includes('html') || title.includes('css') || title.includes('web')) {
        return 'https://www.youtube.com/watch?v=UB1O30fR-EE'; // HTML/CSS tutorial
      } else if (title.includes('ai') || title.includes('machine') || title.includes('learning')) {
        return 'https://www.youtube.com/watch?v=aircAruvnKk'; // AI/ML tutorial
      } else if (title.includes('data') || title.includes('science')) {
        return 'https://www.youtube.com/watch?v=ua-CiDNNj30'; // Data Science tutorial
      } else {
        return 'https://www.youtube.com/watch?v=Tn6-PIqc4UM'; // Default programming tutorial
      }
    } else {
      // For articles, quizzes, and exercises
      if (title.includes('react') || title.includes('javascript')) {
        return 'https://react.dev/learn'; // React documentation
      } else if (title.includes('python')) {
        return 'https://docs.python.org/3/tutorial/'; // Python tutorial
      } else if (title.includes('html') || title.includes('css')) {
        return 'https://developer.mozilla.org/en-US/docs/Learn'; // MDN Web Docs
      } else if (title.includes('ai') || title.includes('machine') || title.includes('learning')) {
        return 'https://www.coursera.org/learn/machine-learning'; // ML course
      } else if (title.includes('data') || title.includes('science')) {
        return 'https://www.kaggle.com/learn'; // Data Science courses
      } else {
        return 'https://developer.mozilla.org/en-US/docs/Learn'; // Default learning resource
      }
    }
  };

  const resourceTypes = ['all', 'video', 'article', 'quiz', 'exercise'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}
      /* Hero Section */
      , React.createElement('section', { className: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 relative overflow-hidden"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}}
        /* Background animations */
        , React.createElement('div', { className: "absolute inset-0" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
          , React.createElement('div', { className: "absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}})
          , React.createElement('div', { className: "absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce"       , style: {animationDelay: '1s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}})
          , React.createElement('div', { className: "absolute bottom-20 left-1/3 w-16 h-16 bg-pink-300/20 rounded-full animate-ping"       , style: {animationDelay: '2s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}})
        )

        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}
          , React.createElement('div', { className: `max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
            , React.createElement('h1', { className: "text-5xl md:text-6xl font-bold mb-6 leading-tight"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "Learning "
               , React.createElement('span', { className: "text-yellow-300 animate-pulse" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, "Resources"), " Hub"
            )
            , React.createElement('p', { className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}, "Discover a vast collection of curated learning materials including videos, articles, quizzes, and interactive exercises across all skill levels."


            )

            , React.createElement('div', { className: "flex justify-center space-x-8 text-blue-200"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}
              , React.createElement('div', { className: "flex items-center space-x-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}
                , React.createElement(BookOpen, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}} )
                , React.createElement('span', { className: "text-lg font-semibold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}, enhancedResources.length, "+ Resources" )
              )
              , React.createElement('div', { className: "flex items-center space-x-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
                , React.createElement(Star, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}} )
                , React.createElement('span', { className: "text-lg font-semibold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}, "Expert Curated" )
              )
              , React.createElement('div', { className: "flex items-center space-x-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
                , React.createElement(CheckCircle, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}} )
                , React.createElement('span', { className: "text-lg font-semibold" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}, "Always Updated" )
              )
            )
          )
        )
      )

      /* Search & Filter Section */
      , React.createElement('section', { className: "py-12 bg-white shadow-lg relative z-20 -mt-6 mx-4 md:mx-8 rounded-2xl"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 180}}
          , React.createElement('div', { className: `transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}
            /* Search Bar */
            , React.createElement('div', { className: "mb-8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}
              , React.createElement('div', { className: "relative max-w-2xl mx-auto"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
                , React.createElement(Search, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}} )
                , React.createElement('input', {
                  type: "text",
                  placeholder: "Search resources, topics, or learning paths..."     ,
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg transition-all duration-300"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
                )
              )
            )

            /* Filters */
            , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-4 gap-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}
              /* Type Filter */
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 199}}
                , React.createElement('label', { className: "block text-sm font-semibold text-gray-700 mb-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}, "Resource Type" )
                , React.createElement('select', {
                  value: selectedType,
                  onChange: (e) => setSelectedType(e.target.value),
                  className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}

                  , resourceTypes.map(type => (
                    React.createElement('option', { key: type, value: type, __self: this, __source: {fileName: _jsxFileName, lineNumber: 207}}
                      , type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)
                    )
                  ))
                )
              )

              /* Difficulty Filter */
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 215}}
                , React.createElement('label', { className: "block text-sm font-semibold text-gray-700 mb-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 216}}, "Difficulty")
                , React.createElement('select', {
                  value: selectedDifficulty,
                  onChange: (e) => setSelectedDifficulty(e.target.value),
                  className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 217}}

                  , difficulties.map(difficulty => (
                    React.createElement('option', { key: difficulty, value: difficulty, __self: this, __source: {fileName: _jsxFileName, lineNumber: 223}}
                      , difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                    )
                  ))
                )
              )

              /* Sort Filter */
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 231}}
                , React.createElement('label', { className: "block text-sm font-semibold text-gray-700 mb-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 232}}, "Sort By" )
                , React.createElement('select', {
                  value: sortBy,
                  onChange: (e) => setSortBy(e.target.value),
                  className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 233}}

                  , React.createElement('option', { value: "title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 238}}, "Title")
                  , React.createElement('option', { value: "type", __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}, "Type")
                  , React.createElement('option', { value: "views", __self: this, __source: {fileName: _jsxFileName, lineNumber: 240}}, "Most Viewed" )
                  , React.createElement('option', { value: "rating", __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}, "Highest Rated" )
                )
              )

              /* Results Count */
              , React.createElement('div', { className: "flex items-end" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}}
                , React.createElement('div', { className: "w-full p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}}
                  , React.createElement('div', { className: "text-sm font-semibold text-gray-700"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}, "Results Found" )
                  , React.createElement('div', { className: "text-2xl font-bold gradient-text"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}, filteredResources.length)
                )
              )
            )
          )
        )
      )

      /* Resources Grid */
      , React.createElement('section', { className: "py-16 bg-gradient-to-br from-gray-50 to-blue-50"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}
          , filteredResources.length === 0 ? (
            React.createElement('div', { className: "text-center py-16" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 261}}
              , React.createElement('div', { className: "w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 262}}
                , React.createElement(Search, { className: "h-16 w-16 text-gray-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}} )
              )
              , React.createElement('h3', { className: "text-2xl font-bold text-gray-600 mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 265}}, "No Resources Found"  )
              , React.createElement('p', { className: "text-gray-500 mb-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}}, "Try adjusting your search criteria or filters."      )
              , React.createElement('button', {
                onClick: () => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setSelectedDifficulty('all');
                },
                className: "btn bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 px-6 py-3 font-semibold transition-all duration-300 border-none"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
, "Clear Filters"

              )
            )
          ) : (
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 279}}
              , filteredResources.map((resource, index) => (
                React.createElement('div', { 
                  key: resource.id,
                  className: `group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`,
                  style: {transitionDelay: `${index * 100}ms`}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 281}}

                  , React.createElement('div', { className: "card h-full hover:shadow-2xl border border-transparent hover:border-blue-200 relative overflow-hidden"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 286}}
                    /* Background gradient effect */
                    , React.createElement('div', { className: `absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      resource.type === 'video' ? 'from-red-500/5 to-red-600/5' :
                      resource.type === 'article' ? 'from-blue-500/5 to-blue-600/5' :
                      resource.type === 'quiz' ? 'from-green-500/5 to-green-600/5' :
                      resource.type === 'exercise' ? 'from-purple-500/5 to-purple-600/5' :
                      'from-gray-500/5 to-gray-600/5'
                    }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 288}})

                    , React.createElement('div', { className: "p-6 relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 296}}
                      /* Header */
                      , React.createElement('div', { className: "flex items-start justify-between mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 298}}
                        , React.createElement('div', { className: `flex items-center space-x-2 px-3 py-1 rounded-full group-hover:scale-110 transition-transform duration-300 ${
                          resource.type === 'video' ? 'bg-red-100 text-red-700' :
                          resource.type === 'article' ? 'bg-blue-100 text-blue-700' :
                          resource.type === 'quiz' ? 'bg-green-100 text-green-700' :
                          resource.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 299}}
                          , getTypeIcon(resource.type)
                          , React.createElement('span', { className: "text-sm font-semibold capitalize"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 307}}, resource.type)
                        )

                        , React.createElement('div', { className: "flex items-center space-x-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 310}}
                          , React.createElement('button', { className: "p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group-hover:scale-110"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 311}}
                            , React.createElement(Heart, { className: "h-4 w-4 text-gray-400 hover:text-red-500 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 312}} )
                          )
                          , React.createElement('button', { className: "p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group-hover:scale-110"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}}
                            , React.createElement(Share2, { className: "h-4 w-4 text-gray-400 hover:text-blue-500 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 315}} )
                          )
                        )
                      )

                      /* Title and Description */
                      , React.createElement('h3', { className: `text-xl font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
                        resource.type === 'video' ? 'group-hover:text-red-600' :
                        resource.type === 'article' ? 'group-hover:text-blue-600' :
                        resource.type === 'quiz' ? 'group-hover:text-green-600' :
                        resource.type === 'exercise' ? 'group-hover:text-purple-600' :
                        'group-hover:text-gray-600'
                      }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}
                        , resource.title
                      )
                      , React.createElement('p', { className: "text-gray-600 text-sm mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 330}}
                        , resource.description
                      )

                      /* Metadata */
                      , React.createElement('div', { className: "space-y-3 mb-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 335}}
                        /* Path Info */
                        , React.createElement('div', { className: "flex items-center space-x-2 text-sm text-gray-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 337}}
                          , React.createElement(Tag, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 338}} )
                          , React.createElement('span', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 339}}, "From: " , resource.pathTitle)
                        )

                        /* Duration and Difficulty */
                        , React.createElement('div', { className: "flex items-center justify-between"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 343}}
                          , React.createElement('div', { className: "flex items-center space-x-2 text-sm text-gray-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 344}}
                            , React.createElement(Clock, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 345}} )
                            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 346}}, resource.duration || 'N/A')
                          )
                          , React.createElement('span', { className: `px-2 py-1 rounded-full text-xs font-semibold ${
                            resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                            resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            resource.difficulty === 'advanced' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 348}}
                            , resource.difficulty
                          )
                        )

                        /* Stats */
                        , React.createElement('div', { className: "flex items-center justify-between text-sm text-gray-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 359}}
                          , React.createElement('div', { className: "flex items-center space-x-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 360}}
                            , React.createElement(Eye, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 361}} )
                            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 362}}, _optionalChain([resource, 'access', _11 => _11.views, 'optionalAccess', _12 => _12.toLocaleString, 'call', _13 => _13()]))
                          )
                          , React.createElement('div', { className: "flex items-center space-x-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 364}}
                            , React.createElement(Star, { className: "h-4 w-4 text-yellow-400 fill-yellow-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 365}} )
                            , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 366}}, _optionalChain([resource, 'access', _14 => _14.rating, 'optionalAccess', _15 => _15.toFixed, 'call', _16 => _16(1)]))
                          )
                        )
                      )

                      /* Action Buttons */
                      , React.createElement('div', { className: "flex space-x-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 372}}
                        , React.createElement('a', { 
                          href: getResourceUrl(resource),
                          target: "_blank",
                          rel: "noopener noreferrer" ,
                          className: `flex-1 flex items-center justify-center px-4 py-3 text-white rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 ${
                            resource.type === 'video' ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' :
                            resource.type === 'article' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                            resource.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                            resource.type === 'exercise' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                            'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                          }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 373}}

                          , resource.type === 'video' ? (
                            React.createElement(React.Fragment, null, React.createElement(Play, { className: "h-4 w-4 mr-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 386}} ), "Watch")
                          ) : (
                            React.createElement(React.Fragment, null, React.createElement(ExternalLink, { className: "h-4 w-4 mr-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 388}} ), "View")
                          )
                        )

                        , React.createElement('button', { className: "p-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition-all duration-300 group-hover:scale-110"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 392}}
                          , React.createElement(Download, { className: "h-4 w-4 text-gray-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 393}} )
                        )
                      )
                    )

                    /* Bottom accent line */
                    , React.createElement('div', { className: `absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      resource.type === 'video' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      resource.type === 'article' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      resource.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      resource.type === 'exercise' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 399}})
                  )
                )
              ))
            )
          )
        )
      )

      /* CTA Section */
      , React.createElement('section', { className: "py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 415}}
        /* Background animations */
        , React.createElement('div', { className: "absolute inset-0" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 417}}
          , React.createElement('div', { className: "absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 418}})
          , React.createElement('div', { className: "absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce"       , style: {animationDelay: '1s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 419}})
        )

        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 422}}
          , React.createElement('div', { className: `max-w-4xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 423}}
            , React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 424}}, "Can't Find What You're Looking For?"

            )
            , React.createElement('p', { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 427}}, "Can't find the right resources? Get in touch with us and we'll help you find the perfect learning materials for your goals."

            )

            , React.createElement('div', { className: "flex flex-col sm:flex-row gap-6 justify-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 431}}
              , React.createElement(Link, { href: "/contact", className: "btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 432}}, "Contact Us"

              )

              , React.createElement(Link, { href: "/paths", className: "btn border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-8 py-4 text-lg font-semibold transition-all duration-300"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 436}}, "Browse Learning Paths"

              )
            )
          )
        )
      )
    )
  );
};

export default Resources;
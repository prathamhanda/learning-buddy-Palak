const _jsxFileName = "src\\pages\\PathDetail.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Layout';
import { dummyLearningPaths } from '../data/dummyData';
import { Clock, Users, Star } from 'lucide-react';


const PathDetail = () => {
  const { id } = useParams();
  const path = dummyLearningPaths.find(p => p.id === id) || dummyLearningPaths[0];

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
      , React.createElement('div', { className: "container py-12" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
          , React.createElement('div', { className: "lg:col-span-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
            , React.createElement('div', { className: "rounded-lg overflow-hidden shadow"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
              , React.createElement('img', { src: path.image, alt: path.title, className: "w-full h-64 object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
              , React.createElement('div', { className: "p-6 bg-white" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
                , React.createElement('h1', { className: "text-2xl font-bold mb-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, path.title)
                , React.createElement('div', { className: "flex items-center space-x-4 text-sm text-gray-500 mb-4"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
                  , React.createElement('span', { className: "flex items-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, React.createElement(Clock, { className: "mr-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} ), " " , path.duration)
                  , React.createElement('span', { className: "flex items-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, React.createElement(Users, { className: "mr-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} ), " " , path.enrolledCount.toLocaleString())
                  , React.createElement('span', { className: "flex items-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, React.createElement(Star, { className: "mr-1 text-yellow-400" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}} ), " " , path.rating)
                )
                , React.createElement('p', { className: "text-gray-700 mb-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, path.description)

                , React.createElement('h3', { className: "text-lg font-semibold mb-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Modules")
                , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
                  , path.modules.map((m) => (
                    React.createElement('div', { key: m.id, className: "p-4 rounded-lg border border-gray-100"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                      , React.createElement('div', { className: "flex justify-between items-start mb-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
                        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
                          , React.createElement('div', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, m.title)
                          , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, m.duration, " • "  , m.completed ? 'Completed' : 'Not started')
                          , React.createElement('div', { className: "text-sm text-gray-600 mt-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, m.description)
                        )
                        , React.createElement('span', { className: `px-2 py-1 rounded text-xs font-medium ${
                          m.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
                          , m.completed ? 'Complete' : 'Pending'
                        )
                      )
                      , React.createElement('div', { className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
                        , React.createElement('div', { className: "text-sm font-medium text-gray-700 mb-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Resources:")
                        , m.resources.map((resource) => (
                          React.createElement('div', { key: resource.id, className: "flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                            , React.createElement('div', { className: "flex items-center space-x-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
                              , React.createElement('span', { className: `px-2 py-1 rounded text-xs font-medium ${
                                resource.type === 'video' ? 'bg-red-100 text-red-700' :
                                resource.type === 'article' ? 'bg-blue-100 text-blue-700' :
                                resource.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                                'bg-gray-100 text-gray-700'
                              }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
                                , resource.type
                              )
                              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
                                , React.createElement('div', { className: "font-medium text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, resource.title)
                                , React.createElement('div', { className: "text-xs text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, resource.duration)
                              )
                            )
                            , React.createElement('a', { 
                              href: resource.url, 
                              target: "_blank", 
                              rel: "noopener noreferrer" ,
                              className: "bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
, "Open"

                            )
                          )
                        ))
                      )
                    )
                  ))
                )

                , React.createElement('h3', { className: "text-lg font-semibold mt-6 mb-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, "About this path"  )
                , React.createElement('p', { className: "text-gray-600", __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}/* small expanded description placeholder */, "This path combines practical exercises, short videos and mini projects to help you build real skills. Follow the modules in order or pick topics you need."                         )
              )
            )
          )

          , React.createElement('aside', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
            , React.createElement('div', { className: "p-6 rounded-lg bg-white shadow"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
              , React.createElement('div', { className: "flex items-center justify-between mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
                  , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}, "Level")
                  , React.createElement('div', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, path.level)
                )
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                  , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}, "Enrolled")
                  , React.createElement('div', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, path.enrolledCount.toLocaleString())
                )
              )
              , React.createElement('a', { 
                href: _optionalChain([path, 'access', _ => _.modules, 'access', _2 => _2[0], 'optionalAccess', _3 => _3.resources, 'access', _4 => _4[0], 'optionalAccess', _5 => _5.url]) || '#', 
                target: "_blank", 
                rel: "noopener noreferrer" ,
                className: "btn btn-primary w-full"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
, "Start Learning"

              )
            )

            , React.createElement('div', { className: "p-6 rounded-lg bg-white shadow"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
              , React.createElement('h4', { className: "font-semibold mb-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}, "Quick Access Resources"  )
              , React.createElement('ul', { className: "space-y-3 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
                , path.modules.flatMap(m => m.resources).map(r => (
                  React.createElement('li', { key: r.id, className: "flex justify-between items-center p-2 hover:bg-gray-50 rounded"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
                    , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
                      , React.createElement('div', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, r.title)
                      , React.createElement('div', { className: "text-xs text-gray-500 flex items-center space-x-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                        , React.createElement('span', { className: `px-2 py-0.5 rounded text-xs ${
                          r.type === 'video' ? 'bg-red-100 text-red-700' :
                          r.type === 'article' ? 'bg-blue-100 text-blue-700' :
                          r.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
                          , r.type
                        )
                        , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}, r.duration)
                      )
                    )
                    , React.createElement('a', { 
                      href: r.url, 
                      target: "_blank", 
                      rel: "noopener noreferrer" ,
                      className: "text-blue-600 text-sm hover:text-blue-800 font-medium"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
, "Open"

                    )
                  )
                ))
              )
            )

            , React.createElement('div', { className: "p-6 rounded-lg bg-white shadow text-sm text-gray-600"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}
              , React.createElement('div', { className: "font-medium mb-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, "Need help?" )
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Visit " , React.createElement(RouterLink, { to: "/resources", className: "text-blue-600", __self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}, "Resources"), " or contact support."   )
            )
          )
        )
      )
    )
  );
};

export default PathDetail;
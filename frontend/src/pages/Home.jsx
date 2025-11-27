const _jsxFileName = "src\\pages\\Home.tsx";import React, { useEffect, useState } from 'react';
import { ArrowRight, Layers, Users, Award, BrainCircuit } from 'lucide-react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from '../components/ui/Link';
import { dummyLearningPaths, categories } from '../data/dummyData';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Only show the first 3 learning paths on the home page
  const featuredPaths = dummyLearningPaths.slice(0, 3);

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
      , React.createElement(Hero, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}} )

      /* Featured Learning Paths */
      , React.createElement('section', { className: "py-16 bg-gray-50 relative overflow-hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
        /* Background decorations */
        , React.createElement('div', { className: "absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}})
        , React.createElement('div', { className: "absolute bottom-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full animate-float"       , style: {animationDelay: '1s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}})

        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('div', { className: `flex justify-between items-center mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('h2', { className: "text-3xl font-bold gradient-text"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Featured Learning Paths"  )
            , React.createElement(Link, { href: "/paths", className: "text-blue-600 hover:text-blue-700 hover:scale-105 flex items-center transition-all duration-300 group"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, "View All Paths"

              , React.createElement(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}} )
            )
          )

          , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
            , featuredPaths.map((path, index) => (
              React.createElement('div', { 
                key: path.id, 
                className: `card group hover:translate-y-[-8px] hover:shadow-2xl border border-transparent hover:border-blue-200 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`,
                style: {transitionDelay: `${index * 200}ms`}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}

                , React.createElement('div', { className: "relative h-48 overflow-hidden rounded-t-xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
                  , React.createElement('img', { 
                    src: path.image, 
                    alt: path.title, 
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
                  )
                  , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}})
                  , React.createElement('div', { className: "absolute bottom-4 left-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                    , React.createElement('span', { className: "inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:scale-105 transition-all duration-300"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                      , path.category
                    )
                  )
                )
                , React.createElement('div', { className: "p-6 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transition-all duration-500"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
                  , React.createElement('h3', { className: "text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, path.title)
                  , React.createElement('p', { className: "text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, path.description)
                  , React.createElement('div', { className: "flex justify-between text-sm text-gray-500 mb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
                    , React.createElement('span', { className: "flex items-center group-hover:text-blue-600 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
                      , React.createElement(Users, { className: "h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}} )
                      , path.enrolledCount.toLocaleString(), " enrolled"
                    )
                    , React.createElement('span', { className: "flex items-center group-hover:text-blue-600 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
                      , React.createElement(Award, { className: "h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}} )
                      , path.level
                    )
                  )
                  , React.createElement(Link, { 
                    href: `/path/${path.id}`,
                    className: "btn btn-primary w-full flex items-center justify-center hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
, "Explore Path "
                      , React.createElement(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} )
                  )
                )
              )
            ))
          )
        )
      )

      /* Categories */
      , React.createElement('section', { className: "py-16 bg-white" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
          , React.createElement('h2', { className: "text-3xl font-bold text-center mb-12"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "Explore By Category"  )

          , React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
            , categories.map((category) => (
              React.createElement(Link, { 
                key: category, 
                href: `/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
                className: "card p-6 text-center hover:shadow-md transition-all duration-300 hover:border-blue-200 border border-transparent group"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}

                , React.createElement('div', { className: "rounded-full h-16 w-16 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                  , React.createElement(Layers, { className: "h-8 w-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}} )
                )
                , React.createElement('h3', { className: "font-medium text-lg mb-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, category)
                , React.createElement('p', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Discover top courses and learning paths"     )
              )
            ))
          )
        )
      )

      /* Testimonials */
      , React.createElement('section', { className: "py-16 bg-gray-50" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
          , React.createElement('h2', { className: "text-3xl font-bold text-center mb-12"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, "Why Learners Love LearningBuddy"   )

          , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}
            , [
              {
                name: "Sarah Johnson",
                role: "UX Designer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "LearningBuddy's personalized learning paths helped me transition into UX design in just 4 months. The structured approach and progress tracking made all the difference."
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "The data science path is comprehensive and well-structured. I appreciate how the content adapts to my learning pace and the practical projects reinforce concepts effectively."
              },
              {
                name: "Jessica Williams",
                role: "Frontend Developer",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "The interactive coding exercises and real-world projects prepared me for my career change. LearningBuddy's dashboard made it easy to track my goals and celebrate milestones."
              }
            ].map((testimonial, index) => (
              React.createElement('div', { key: index, className: "card p-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
                , React.createElement('div', { className: "flex items-center mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
                  , React.createElement('img', { 
                    src: testimonial.image, 
                    alt: testimonial.name, 
                    className: "w-12 h-12 rounded-full object-cover mr-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}
                  )
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}}
                    , React.createElement('h3', { className: "font-semibold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, testimonial.name)
                    , React.createElement('p', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}, testimonial.role)
                  )
                )
                , React.createElement('div', { className: "mb-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}
                  , [1, 2, 3, 4, 5].map((star) => (
                    React.createElement('span', { key: star, className: "text-yellow-400 text-lg" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}, "★")
                  ))
                )
                , React.createElement('p', { className: "text-gray-700 italic" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}, "\"", testimonial.quote, "\"")
              )
            ))
          )
        )
      )

      /* CTA */
      , React.createElement('section', { className: "py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}}
        , React.createElement('div', { className: "container text-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}
          , React.createElement(BrainCircuit, { className: "h-16 w-16 mx-auto mb-6 text-blue-200"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}} )
          , React.createElement('h2', { className: "text-3xl md:text-4xl font-bold mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, "Start Your Learning Journey Today"    )
          , React.createElement('p', { className: "text-xl text-blue-100 max-w-2xl mx-auto mb-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}, "Personalized learning paths, expert-curated content, and a supportive community await you."

          )
          , React.createElement('div', { className: "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}
            , React.createElement(Link, { 
              href: "/signup", 
              className: "btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}
, "Get Started For Free"

            )
            , React.createElement(Link, { 
              href: "/paths", 
              className: "btn border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}
, "Explore Learning Paths"

            )
          )
        )
      )
    )
  );
};

export default Home;
const _jsxFileName = "src\\pages\\About.tsx";import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from '../components/ui/Link';
import { 
  Target, 
  BookOpen, 
  Users, 
  Award, 
  Mail, 
  MapPin, 
  Star, 
  Heart, 
  Zap, 
  Shield,

  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: React.createElement(Target, { className: "h-8 w-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}} ),
      title: "Personalized Learning",
      description: "AI-powered paths tailored to your unique goals and learning style",
      color: "blue"
    },
    {
      icon: React.createElement(Users, { className: "h-8 w-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} ),
      title: "Expert Community",
      description: "Learn from industry professionals and connect with peers worldwide",
      color: "green"
    },
    {
      icon: React.createElement(Zap, { className: "h-8 w-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}} ),
      title: "Real-time Feedback",
      description: "Instant AI assistance and progress tracking for optimal learning",
      color: "purple"
    },
    {
      icon: React.createElement(Award, { className: "h-8 w-8" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} ),
      title: "Industry Recognition",
      description: "Earn certificates and badges recognized by top tech companies",
      color: "orange"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Former Google engineer passionate about democratizing education"
    },
    {
      name: "Sarah Johnson",
      role: "Head of AI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "PhD in Machine Learning, specializing in educational AI systems"
    },
    {
      name: "Michael Rodriguez",
      role: "Learning Experience Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "15+ years in educational technology and curriculum development"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Learners", icon: React.createElement(Users, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} ) },
    { value: "200+", label: "Learning Paths", icon: React.createElement(BookOpen, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}} ) },
    { value: "95%", label: "Success Rate", icon: React.createElement(Award, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}} ) },
    { value: "24/7", label: "AI Support", icon: React.createElement(Zap, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}} ) }
  ];

  return (
    React.createElement(Layout, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
      /* Hero Section */
      , React.createElement('section', { className: "relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
        /* Background animations */
        , React.createElement('div', { className: "absolute inset-0" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}
          , React.createElement('div', { className: "absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}})
          , React.createElement('div', { className: "absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce"       , style: {animationDelay: '1s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}})
          , React.createElement('div', { className: "absolute bottom-20 left-1/3 w-16 h-16 bg-pink-300/20 rounded-full animate-ping"       , style: {animationDelay: '2s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}})
          , React.createElement('div', { className: "absolute bottom-40 right-10 w-40 h-40 bg-blue-300/10 rounded-full animate-float"       , style: {animationDelay: '0.5s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}})
        )

        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
          , React.createElement('div', { className: "max-w-4xl mx-auto text-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
            , React.createElement('div', { className: `transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
              , React.createElement('h1', { className: "text-5xl md:text-6xl font-bold mb-6 leading-tight"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, "Revolutionizing "
                 , React.createElement('span', { className: "text-yellow-300 animate-pulse" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, "Education")
                , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} ), "with AI-Powered Learning"
              )
              , React.createElement('p', { className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}, "LearningBuddy combines cutting-edge artificial intelligence with proven educational methodologies to create personalized learning experiences that adapt to your unique journey."


              )
              , React.createElement('div', { className: "flex flex-col sm:flex-row gap-4 justify-center items-center"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                , React.createElement(Link, { href: "/signup", className: "btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group whitespace-nowrap"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}
                  , React.createElement('span', { className: "flex items-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "Start Your Journey"

                    , React.createElement(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}} )
                  )
                )
                , React.createElement(Link, { href: "/paths", className: "btn border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-8 py-4 text-lg font-semibold transition-all duration-300 whitespace-nowrap"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, "Explore Paths"

                )
              )
            )
          )
        )
      )

      /* Stats Section */
      , React.createElement('section', { className: "py-16 bg-white relative overflow-hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}})
        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
          , React.createElement('div', { className: `grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 136}}
            , stats.map((stat, index) => (
              React.createElement('div', { 
                key: index, 
                className: "text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"      ,
                style: {transitionDelay: `${index * 100}ms`}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}

                , React.createElement('div', { className: "bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 group-hover:shadow-2xl transition-all duration-300"               , __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}
                  , stat.icon
                )
                , React.createElement('div', { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}
                  , stat.value
                )
                , React.createElement('div', { className: "text-gray-600 group-hover:text-blue-600 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
                  , stat.label
                )
              )
            ))
          )
        )
      )

      /* Features Section */
      , React.createElement('section', { className: "py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}
          , React.createElement('div', { className: `text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}}
            , React.createElement('h2', { className: "text-4xl font-bold gradient-text mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}, "Why Choose LearningBuddy?"  )
            , React.createElement('p', { className: "text-xl text-gray-600 max-w-3xl mx-auto"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}, "We're not just another learning platform. We're your personal AI tutor, career mentor, and learning companion all in one."


            )
          )

          , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
            , features.map((feature, index) => (
              React.createElement('div', { 
                key: index,
                className: `group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${activeFeature === index ? 'scale-105 shadow-2xl' : ''}`,
                style: {transitionDelay: `${index * 200}ms`},
                onMouseEnter: () => setActiveFeature(index), __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}

                , React.createElement('div', { className: `card p-8 h-full hover:shadow-2xl border-2 border-transparent hover:border-${feature.color}-200 relative overflow-hidden`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}}
                  /* Background glow effect */
                  , React.createElement('div', { className: `absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 179}})

                  , React.createElement('div', { className: `text-${feature.color}-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 181}}
                    , feature.icon
                  )
                  , React.createElement('h3', { className: `text-xl font-bold mt-6 mb-4 group-hover:text-${feature.color}-600 transition-colors duration-300 relative z-10`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
                    , feature.title
                  )
                  , React.createElement('p', { className: "text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 187}}
                    , feature.description
                  )

                  /* Hover effect indicator */
                  , React.createElement('div', { className: `absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 192}})
                )
              )
            ))
          )
        )
      )

      /* Mission & Values Section */
      , React.createElement('section', { className: "py-20 bg-white relative"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}}
          , React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}}
            , React.createElement('div', { className: `transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 204}}
              , React.createElement('h2', { className: "text-4xl font-bold gradient-text mb-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 205}}, "Our Mission" )
              , React.createElement('p', { className: "text-lg text-gray-600 mb-8 leading-relaxed"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 206}}, "We believe that everyone deserves access to world-class education that adapts to their unique learning style, pace, and goals. Our AI-powered platform makes this vision a reality by providing personalized learning experiences that are engaging, effective, and accessible to all."



              )

              , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 212}}
                , React.createElement('div', { className: "flex items-center space-x-4 group"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 213}}
                  , React.createElement('div', { className: "w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 214}}
                    , React.createElement(CheckCircle, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 215}} )
                  )
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 217}}
                    , React.createElement('h4', { className: "font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 218}}, "Accessible Education" )
                    , React.createElement('p', { className: "text-gray-600", __self: this, __source: {fileName: _jsxFileName, lineNumber: 219}}, "Breaking down barriers to quality learning for everyone, everywhere"        )
                  )
                )

                , React.createElement('div', { className: "flex items-center space-x-4 group"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 223}}
                  , React.createElement('div', { className: "w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}
                    , React.createElement(Lightbulb, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 225}} )
                  )
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 227}}
                    , React.createElement('h4', { className: "font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}, "Innovative Methods" )
                    , React.createElement('p', { className: "text-gray-600", __self: this, __source: {fileName: _jsxFileName, lineNumber: 229}}, "Using cutting-edge AI and proven pedagogical approaches"      )
                  )
                )

                , React.createElement('div', { className: "flex items-center space-x-4 group"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 233}}
                  , React.createElement('div', { className: "w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 234}}
                    , React.createElement(Globe, { className: "h-6 w-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 235}} )
                  )
                  , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}
                    , React.createElement('h4', { className: "font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 238}}, "Global Community" )
                    , React.createElement('p', { className: "text-gray-600", __self: this, __source: {fileName: _jsxFileName, lineNumber: 239}}, "Connecting learners and educators across the globe"      )
                  )
                )
              )
            )

            , React.createElement('div', { className: `transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 245}}
              , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 246}}
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 247}})
                , React.createElement('div', { className: "relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 248}}
                  , React.createElement('div', { className: "text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}
                    , React.createElement('div', { className: "w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white animate-float"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 250}}
                      , React.createElement(Rocket, { className: "h-10 w-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 251}} )
                    )
                    , React.createElement('h3', { className: "text-2xl font-bold gradient-text mb-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 253}}, "Empowering Futures" )
                    , React.createElement('p', { className: "text-gray-600 mb-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 254}}, "Since 2020, we've helped over 50,000 learners advance their careers and achieve their dreams through personalized, AI-powered education."


                    )
                    , React.createElement('div', { className: "flex justify-center space-x-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 258}}
                      , React.createElement('div', { className: "text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 259}}
                        , React.createElement('div', { className: "text-2xl font-bold text-blue-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 260}}, "98%")
                        , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 261}}, "Satisfaction")
                      )
                      , React.createElement('div', { className: "text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}}
                        , React.createElement('div', { className: "text-2xl font-bold text-green-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 264}}, "85%")
                        , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 265}}, "Career Growth" )
                      )
                      , React.createElement('div', { className: "text-center", __self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
                        , React.createElement('div', { className: "text-2xl font-bold text-purple-600"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 268}}, "24/7")
                        , React.createElement('div', { className: "text-sm text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 269}}, "AI Support" )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )

      /* Team Section */
      , React.createElement('section', { className: "py-20 bg-gradient-to-br from-gray-50 to-blue-50"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 281}}
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 282}}
          , React.createElement('div', { className: `text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 283}}
            , React.createElement('h2', { className: "text-4xl font-bold gradient-text mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 284}}, "Meet Our Team"  )
            , React.createElement('p', { className: "text-xl text-gray-600 max-w-3xl mx-auto"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 285}}, "Passionate educators, technologists, and visionaries working together to transform learning."

            )
          )

          , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-8"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 290}}
            , team.map((member, index) => (
              React.createElement('div', { 
                key: index,
                className: `group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`,
                style: {transitionDelay: `${index * 200}ms`}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 292}}

                , React.createElement('div', { className: "card p-8 text-center hover:shadow-2xl border border-transparent hover:border-blue-200 relative overflow-hidden"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 297}}
                  /* Background gradient */
                  , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 299}})

                  , React.createElement('div', { className: "relative z-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 301}}
                    , React.createElement('div', { className: "relative mb-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 302}}
                      , React.createElement('img', { 
                        src: member.image, 
                        alt: member.name,
                        className: "w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 303}}
                      )
                      , React.createElement('div', { className: "absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:animate-pulse"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 308}})
                    )

                    , React.createElement('h3', { className: "text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 311}}
                      , member.name
                    )
                    , React.createElement('p', { className: "text-blue-600 font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 314}}
                      , member.role
                    )
                    , React.createElement('p', { className: "text-gray-600 group-hover:text-gray-700 transition-colors duration-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 317}}
                      , member.description
                    )
                  )
                )
              )
            ))
          )
        )
      )

      /* CTA Section */
      , React.createElement('section', { className: "py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 329}}
        /* Background animations */
        , React.createElement('div', { className: "absolute inset-0" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}
          , React.createElement('div', { className: "absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 332}})
          , React.createElement('div', { className: "absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce"       , style: {animationDelay: '1s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 333}})
          , React.createElement('div', { className: "absolute top-1/2 left-1/2 w-24 h-24 bg-pink-300/20 rounded-full animate-ping"       , style: {animationDelay: '2s'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 334}})
        )

        , React.createElement('div', { className: "container relative z-10"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 337}}
          , React.createElement('div', { className: `max-w-4xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 338}}
            , React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 339}}, "Ready to Transform Your Learning?"

            )
            , React.createElement('p', { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 342}}, "Join thousands of learners who are already advancing their careers with LearningBuddy's AI-powered platform."

            )

            , React.createElement('div', { className: "flex flex-col lg:flex-row gap-6 justify-center items-center"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 346}}
              , React.createElement(Link, { href: "/signup", className: "btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group whitespace-nowrap"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 347}}, "Start Free Trial"

                )

              , React.createElement('div', { className: "flex flex-col sm:flex-row items-center gap-4 text-blue-100"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 351}}
                , React.createElement('div', { className: "flex items-center space-x-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 352}}
                  , React.createElement(Mail, { className: "h-5 w-5 flex-shrink-0"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 353}} )
                  , React.createElement('span', { className: "text-sm sm:text-base" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 354}}, "pgoyal2_be23@thapar.edu")
                )
                , React.createElement('div', { className: "flex items-center space-x-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 356}}
                  , React.createElement(MapPin, { className: "h-5 w-5 flex-shrink-0"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 357}} )
                  , React.createElement('span', { className: "text-sm sm:text-base" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 358}}, "Patiala, Punjab, India"  )
                )
              )
            )

            , React.createElement('div', { className: "mt-12 flex justify-center space-x-8 text-blue-200"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 363}}
              , React.createElement('div', { className: "flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 364}}
                , React.createElement(Shield, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 365}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 366}}, "Secure & Private"  )
              )
              , React.createElement('div', { className: "flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 368}}
                , React.createElement(Star, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 369}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 370}}, "5-Star Rated" )
              )
              , React.createElement('div', { className: "flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 372}}
                , React.createElement(Heart, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 373}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 374}}, "Loved by 50K+ Users"   )
              )
            )
          )
        )
      )
    )
  );
};

export default About;
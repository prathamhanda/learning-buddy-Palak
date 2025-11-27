import React, { useEffect, useState } from 'react';
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
  Compass,
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';

const About: React.FC = () => {
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
      icon: <Target className="h-8 w-8" />,
      title: "Personalized Learning",
      description: "AI-powered paths tailored to your unique goals and learning style",
      color: "blue"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Community",
      description: "Learn from industry professionals and connect with peers worldwide",
      color: "green"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Feedback",
      description: "Instant AI assistance and progress tracking for optimal learning",
      color: "purple"
    },
    {
      icon: <Award className="h-8 w-8" />,
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
    { value: "50K+", label: "Active Learners", icon: <Users className="h-6 w-6" /> },
    { value: "200+", label: "Learning Paths", icon: <BookOpen className="h-6 w-6" /> },
    { value: "95%", label: "Success Rate", icon: <Award className="h-6 w-6" /> },
    { value: "24/7", label: "AI Support", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-300/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-40 h-40 bg-blue-300/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Revolutionizing <span className="text-yellow-300 animate-pulse">Education</span> 
                <br />with AI-Powered Learning
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                LearningBuddy combines cutting-edge artificial intelligence with proven educational methodologies 
                to create personalized learning experiences that adapt to your unique journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/signup" className="btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group whitespace-nowrap">
                  <span className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link href="/paths" className="btn border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-8 py-4 text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                  Explore Paths
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="container relative z-10">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 group-hover:shadow-2xl transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container">
          <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold gradient-text mb-6">Why Choose LearningBuddy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another learning platform. We're your personal AI tutor, 
              career mentor, and learning companion all in one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${activeFeature === index ? 'scale-105 shadow-2xl' : ''}`}
                style={{transitionDelay: `${index * 200}ms`}}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`card p-8 h-full hover:shadow-2xl border-2 border-transparent hover:border-${feature.color}-200 relative overflow-hidden`}>
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className={`text-${feature.color}-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold mt-6 mb-4 group-hover:text-${feature.color}-600 transition-colors duration-300 relative z-10`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect indicator */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold gradient-text mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that everyone deserves access to world-class education that adapts to their unique 
                learning style, pace, and goals. Our AI-powered platform makes this vision a reality by providing 
                personalized learning experiences that are engaging, effective, and accessible to all.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Accessible Education</h4>
                    <p className="text-gray-600">Breaking down barriers to quality learning for everyone, everywhere</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Innovative Methods</h4>
                    <p className="text-gray-600">Using cutting-edge AI and proven pedagogical approaches</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Global Community</h4>
                    <p className="text-gray-600">Connecting learners and educators across the globe</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white animate-float">
                      <Rocket className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">Empowering Futures</h3>
                    <p className="text-gray-600 mb-6">
                      Since 2020, we've helped over 50,000 learners advance their careers and achieve their dreams 
                      through personalized, AI-powered education.
                    </p>
                    <div className="flex justify-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-sm text-gray-500">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-sm text-gray-500">Career Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                        <div className="text-sm text-gray-500">AI Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold gradient-text mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators, technologists, and visionaries working together to transform learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="card p-8 text-center hover:shadow-2xl border border-transparent hover:border-blue-200 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {member.role}
                    </p>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-300/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their careers with LearningBuddy's AI-powered platform.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Link href="/signup" className="btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group whitespace-nowrap">
                Start Free Trial
                </Link>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-blue-100">
                <div className="flex items-center space-x-1">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">pgoyal2_be23@thapar.edu</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Patiala, Punjab, India</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                <Shield className="h-5 w-5" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                <Star className="h-5 w-5" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                <Heart className="h-5 w-5" />
                <span>Loved by 50K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
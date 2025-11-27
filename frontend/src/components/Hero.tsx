import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Personalized Learning <span className="text-yellow-300 animate-pulse">Journeys</span> for Your Success
            </h1>
            <p className={`text-lg md:text-xl text-blue-100 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Discover tailored learning paths designed to help you achieve your goals and master new skills at your own pace.
            </p>

            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link href="/signup" className="btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-3 rounded-lg font-medium flex items-center justify-center transform transition-all duration-300 group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/paths" className="btn border border-white text-white hover:bg-white/10 hover:scale-105 hover:shadow-xl px-8 py-3 rounded-lg font-medium flex items-center justify-center transform transition-all duration-300">
                Explore Paths
              </Link>
            </div>
          </div>

          <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-1000 delay-700 hover:scale-105 hover:bg-white/15 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <BookOpen className="h-10 w-10 text-yellow-300 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Personalized Paths</h3>
                <p className="text-blue-100">Learning journeys tailored to your unique goals and interests.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <Target className="h-10 w-10 text-green-300 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Goal Tracking</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300">Set learning goals and track your progress with detailed analytics.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <TrendingUp className="h-10 w-10 text-red-300 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-300 transition-colors duration-300">Skill Growth</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300">Visualize your skill development and identify areas for improvement.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-purple-400 mb-4 text-white text-lg font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  AI
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">Smart Recommendations</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300">Get AI-powered course suggestions based on your learning style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
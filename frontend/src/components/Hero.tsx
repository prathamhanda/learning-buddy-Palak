import React from 'react';
import { ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalized Learning <span className="text-yellow-300">Journeys</span> for Your Success
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Discover tailored learning paths designed to help you achieve your goals and master new skills at your own pace.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium flex items-center justify-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/paths" className="btn border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium flex items-center justify-center">
                Explore Paths
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-yellow-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Paths</h3>
                <p className="text-blue-100">Learning journeys tailored to your unique goals and interests.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Target className="h-10 w-10 text-green-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
                <p className="text-blue-100">Set learning goals and track your progress with detailed analytics.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-red-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Skill Growth</h3>
                <p className="text-blue-100">Visualize your skill development and identify areas for improvement.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-purple-400 mb-4 text-white text-lg font-bold">
                  AI
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-blue-100">Get AI-powered course suggestions based on your learning style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
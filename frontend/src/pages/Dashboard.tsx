import React from 'react';
import { Clock, BookOpen, Search, Bell, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import DashboardStats from '../components/dashboard/DashboardStats';
import LearningPathCard from '../components/dashboard/LearningPathCard';
import ProgressChart from '../components/dashboard/ProgressChart';
import RecommendedPaths from '../components/dashboard/RecommendedPaths';
import SkillsRadar from '../components/dashboard/SkillsRadar';
import { dummyUser, dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';

const Dashboard: React.FC = () => {
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
    <Layout>
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Dashboard Header */}
        <div className="bg-white shadow-sm">
          <div className="container py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <button className="relative p-2 text-gray-600 hover:text-gray-900">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-2">
                  <img 
                    src={dummyUser.avatar || 'https://via.placeholder.com/40'} 
                    alt={dummyUser.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="hidden md:block">
                    <p className="font-medium">{dummyUser.name}</p>
                    <p className="text-xs text-gray-500">{dummyUser.level}</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-8">
          {/* Dashboard Welcome */}
          <div className="card p-6 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, {dummyUser.name}!</h2>
                <p className="mb-4">Continue your learning journey and achieve your goals.</p>
                <div className="flex items-center space-x-4">
                  <Link href="/path/1" className="btn bg-white text-blue-700 hover:bg-blue-50">
                    Continue Learning
                  </Link>
                  <div className="flex items-center space-x-1 text-blue-200">
                    <Clock className="h-5 w-5" />
                    <span>Last login: Today, 9:45 AM</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex items-center">
                <div className="bg-blue-500 bg-opacity-30 p-4 rounded-lg">
                  <BookOpen className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <DashboardStats stats={statsData} />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Your Learning Paths</h3>
                  <Link href="/paths" className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                    View All <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dummyLearningPaths.slice(0, 2).map((path) => (
                    <LearningPathCard key={path.id} path={path} />
                  ))}
                </div>
              </div>

              <ProgressChart data={weeklyData} />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <RecommendedPaths paths={dummyLearningPaths} />
              <SkillsRadar skills={skillsData} />

              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-medium">JavaScript Project Submission</p>
                    <p className="text-sm text-gray-500">Web Development Fundamentals</p>
                    <p className="text-xs text-red-500 font-medium">Due in 2 days</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium">Quiz: Python Basics</p>
                    <p className="text-sm text-gray-500">Data Science Essentials</p>
                    <p className="text-xs text-orange-500 font-medium">Due in 5 days</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-medium">React Components Exercise</p>
                    <p className="text-sm text-gray-500">React Native Development</p>
                    <p className="text-xs text-gray-500 font-medium">Due in 10 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
import React from 'react';
import { Clock, BookOpen, Award, Calendar } from 'lucide-react';

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="card p-6 flex items-center space-x-4">
        <div className="rounded-full p-3 bg-blue-100 text-blue-600">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Learning Time</p>
          <p className="text-2xl font-semibold">{stats.learningTime}</p>
        </div>
      </div>

      <div className="card p-6 flex items-center space-x-4">
        <div className="rounded-full p-3 bg-green-100 text-green-600">
          <Award className="h-6 w-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Completed Paths</p>
          <p className="text-2xl font-semibold">{stats.completedPaths}</p>
        </div>
      </div>

      <div className="card p-6 flex items-center space-x-4">
        <div className="rounded-full p-3 bg-purple-100 text-purple-600">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Active Paths</p>
          <p className="text-2xl font-semibold">{stats.activePaths}</p>
        </div>
      </div>

      <div className="card p-6 flex items-center space-x-4">
        <div className="rounded-full p-3 bg-orange-100 text-orange-600">
          <Calendar className="h-6 w-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Learning Streak</p>
          <p className="text-2xl font-semibold">{stats.streak} days</p>
          <p className="text-xs text-gray-500">Last active: {stats.lastActivity}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
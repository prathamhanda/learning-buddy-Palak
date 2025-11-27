import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { LearningPath } from '../../types';
import { Link } from '../ui/Link';

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ path }) => {
  // Calculate completion percentage
  const completedModules = path.modules.filter(module => module.completed).length;
  const totalModules = path.modules.length;
  const completionPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    <div className="card group hover:translate-y-[-5px] hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-blue-200">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={path.image} 
          alt={path.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
        <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-[-2px]">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md group-hover:bg-blue-500 group-hover:scale-105 transition-all duration-300">
            {path.category}
          </span>
          <div className="flex items-center mt-2 text-white space-x-3">
            <div className="flex items-center group-hover:text-blue-200 transition-colors duration-300">
              <Clock className="h-4 w-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm">{path.duration}</span>
            </div>
            <div className="flex items-center group-hover:text-blue-200 transition-colors duration-300">
              <Users className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{path.enrolledCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center group-hover:text-blue-200 transition-colors duration-300">
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm">{path.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 group-hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">{path.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{path.description}</p>

        {/* Progress indicator */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium group-hover:text-blue-700 transition-colors duration-300">{completedModules} of {totalModules} modules completed</span>
            <span className="text-blue-600 font-medium group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden group-hover:shadow-inner transition-all duration-300">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:animate-pulse"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <Link 
          href={`/path/${path.id}`}
          className="flex items-center justify-center w-full py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 hover:shadow-lg rounded-md font-medium transition-all duration-300 group-hover:border-purple-600 group-hover:text-purple-600"
        >
          Continue Learning <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default LearningPathCard;
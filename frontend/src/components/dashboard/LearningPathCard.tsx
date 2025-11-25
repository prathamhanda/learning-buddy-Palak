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
    <div className="card group hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={path.image} 
          alt={path.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md">
            {path.category}
          </span>
          <div className="flex items-center mt-2 text-white space-x-3">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{path.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-sm">{path.enrolledCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">{path.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{path.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{path.description}</p>

        {/* Progress indicator */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">{completedModules} of {totalModules} modules completed</span>
            <span className="text-blue-600 font-medium">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <Link 
          href={`/path/${path.id}`}
          className="flex items-center justify-center w-full py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
        >
          Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default LearningPathCard;
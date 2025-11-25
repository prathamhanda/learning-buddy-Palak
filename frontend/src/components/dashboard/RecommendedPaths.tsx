import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LearningPath } from '../../types';
import { Link } from '../ui/Link';

interface RecommendedPathsProps {
  paths: LearningPath[];
}

const RecommendedPaths: React.FC<RecommendedPathsProps> = ({ paths }) => {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recommended For You</h3>
        <Link href="/paths" className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
          View All
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {paths.slice(0, 3).map((path) => (
          <div key={path.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <img 
              src={path.image} 
              alt={path.title}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h4 className="font-medium line-clamp-1">{path.title}</h4>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <span>{path.duration}</span>
                <span>•</span>
                <span>{path.level}</span>
              </div>
            </div>
            <Link 
              href={`/path/${path.id}`}
              className="ml-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPaths;
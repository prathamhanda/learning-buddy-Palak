import React from 'react';
import Layout from '../components/Layout';
import LearningPathCard from '../components/dashboard/LearningPathCard';
import { dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';

const Paths: React.FC = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Learning Paths</h1>
            <p className="text-gray-500 mt-1">Curated journeys to help you learn faster.</p>
          </div>
          <div>
            <Link href="/paths?filter=popular" className="btn btn-outline">Browse Popular</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyLearningPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Paths;
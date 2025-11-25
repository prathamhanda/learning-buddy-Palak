import React from 'react';
import Layout from '../components/Layout';
import { dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';

type Resource = {
  id: string;
  title: string;
  type: string;
  duration?: string;
  url: string;
  pathTitle?: string;
};

const Resources: React.FC = () => {
  // flatten resources from dummy data
  const resources: Resource[] = dummyLearningPaths.flatMap(p =>
    p.modules.flatMap(m => m.resources.map(r => ({ ...r, pathTitle: p.title })))
  );

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Resources</h1>
            <p className="text-gray-500 mt-1">Articles, videos and exercises across all paths.</p>
          </div>
          <div>
            <Link href="/resources?type=video" className="btn btn-outline">Videos</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map(r => (
            <div key={r.id} className="p-5 bg-white rounded-lg shadow flex justify-between items-start">
              <div>
                <div className="font-medium">{r.title}</div>
                <div className="text-sm text-gray-500">{r.type} • {r.duration || '—'}</div>
                {r.pathTitle && <div className="text-xs text-gray-400 mt-2">From: {r.pathTitle}</div>}
              </div>
              <div className="flex flex-col items-end">
                <a href={r.url} className="text-blue-600 mb-2">Open</a>
                <div className="text-xs text-gray-400">{r.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
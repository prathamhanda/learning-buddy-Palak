import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Layout';
import { dummyLearningPaths } from '../data/dummyData';
import { Clock, Users, Star } from 'lucide-react';
import { Link } from '../components/ui/Link';

const PathDetail: React.FC = () => {
  const { id } = useParams();
  const path = dummyLearningPaths.find(p => p.id === id) || dummyLearningPaths[0];

  return (
    <Layout>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow">
              <img src={path.image} alt={path.title} className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h1 className="text-2xl font-bold mb-2">{path.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center"><Clock className="mr-1" /> {path.duration}</span>
                  <span className="flex items-center"><Users className="mr-1" /> {path.enrolledCount.toLocaleString()}</span>
                  <span className="flex items-center"><Star className="mr-1 text-yellow-400" /> {path.rating}</span>
                </div>
                <p className="text-gray-700 mb-6">{path.description}</p>

                <h3 className="text-lg font-semibold mb-3">Modules</h3>
                <div className="space-y-4">
                  {path.modules.map((m) => (
                    <div key={m.id} className="p-4 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-medium">{m.title}</div>
                          <div className="text-sm text-gray-500">{m.duration} • {m.completed ? 'Completed' : 'Not started'}</div>
                          <div className="text-sm text-gray-600 mt-1">{m.description}</div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          m.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {m.completed ? 'Complete' : 'Pending'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-700 mb-2">Resources:</div>
                        {m.resources.map((resource) => (
                          <div key={resource.id} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                resource.type === 'video' ? 'bg-red-100 text-red-700' :
                                resource.type === 'article' ? 'bg-blue-100 text-blue-700' :
                                resource.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {resource.type}
                              </span>
                              <div>
                                <div className="font-medium text-sm">{resource.title}</div>
                                <div className="text-xs text-gray-500">{resource.duration}</div>
                              </div>
                            </div>
                            <a 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                            >
                              Open
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-3">About this path</h3>
                <p className="text-gray-600">{/* small expanded description placeholder */}This path combines practical exercises, short videos and mini projects to help you build real skills. Follow the modules in order or pick topics you need.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-lg bg-white shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500">Level</div>
                  <div className="font-medium">{path.level}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Enrolled</div>
                  <div className="font-medium">{path.enrolledCount.toLocaleString()}</div>
                </div>
              </div>
              <a 
                href={path.modules[0]?.resources[0]?.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Start Learning
              </a>
            </div>

            <div className="p-6 rounded-lg bg-white shadow">
              <h4 className="font-semibold mb-3">Quick Access Resources</h4>
              <ul className="space-y-3 text-sm">
                {path.modules.flatMap(m => m.resources).map(r => (
                  <li key={r.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">{r.title}</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          r.type === 'video' ? 'bg-red-100 text-red-700' :
                          r.type === 'article' ? 'bg-blue-100 text-blue-700' :
                          r.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {r.type}
                        </span>
                        <span>{r.duration}</span>
                      </div>
                    </div>
                    <a 
                      href={r.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:text-blue-800 font-medium"
                    >
                      Open
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-white shadow text-sm text-gray-600">
              <div className="font-medium mb-2">Need help?</div>
              <div>Visit <RouterLink to="/resources" className="text-blue-600">Resources</RouterLink> or contact support.</div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PathDetail;
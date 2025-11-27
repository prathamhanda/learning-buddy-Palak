import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { dummyLearningPaths } from '../data/dummyData';
import { Link } from '../components/ui/Link';
import { 
  Search, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Video, 
  FileText, 
  PenTool, 
  Clock, 
  Tag, 
  Star,
  Eye,
  Heart,
  Share2,
  Play,
  CheckCircle
} from 'lucide-react';

type Resource = {
  id: string;
  title: string;
  type: string;
  duration?: string;
  url: string;
  pathTitle?: string;
  description?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  views?: number;
  rating?: number;
};

const Resources: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced resources with additional properties
  const enhancedResources: Resource[] = dummyLearningPaths.flatMap(p =>
    p.modules.flatMap(m => m.resources.map(r => ({
      ...r,
      pathTitle: p.title,
      description: `Learn ${r.title.toLowerCase()} through this comprehensive ${r.type} resource from ${p.title}.`,
      difficulty: p.level as 'beginner' | 'intermediate' | 'advanced',
      views: Math.floor(Math.random() * 10000) + 100,
      rating: 4 + Math.random()
    })))
  );

  // Filter and sort resources
  const filteredResources = enhancedResources
    .filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.pathTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
      return matchesSearch && matchesType && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'views':
          return (b.views || 0) - (a.views || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'quiz':
        return <PenTool className="h-5 w-5" />;
      case 'exercise':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getResourceUrl = (resource: Resource) => {
    const title = resource.title.toLowerCase();
    const type = resource.type.toLowerCase();
    
    // Generate relevant URLs based on content
    if (type === 'video') {
      if (title.includes('react') || title.includes('javascript')) {
        return 'https://www.youtube.com/watch?v=Tn6-PIqc4UM'; // React tutorial
      } else if (title.includes('python') || title.includes('programming')) {
        return 'https://www.youtube.com/watch?v=8DvywoWv6fI'; // Python tutorial
      } else if (title.includes('html') || title.includes('css') || title.includes('web')) {
        return 'https://www.youtube.com/watch?v=UB1O30fR-EE'; // HTML/CSS tutorial
      } else if (title.includes('ai') || title.includes('machine') || title.includes('learning')) {
        return 'https://www.youtube.com/watch?v=aircAruvnKk'; // AI/ML tutorial
      } else if (title.includes('data') || title.includes('science')) {
        return 'https://www.youtube.com/watch?v=ua-CiDNNj30'; // Data Science tutorial
      } else {
        return 'https://www.youtube.com/watch?v=Tn6-PIqc4UM'; // Default programming tutorial
      }
    } else {
      // For articles, quizzes, and exercises
      if (title.includes('react') || title.includes('javascript')) {
        return 'https://react.dev/learn'; // React documentation
      } else if (title.includes('python')) {
        return 'https://docs.python.org/3/tutorial/'; // Python tutorial
      } else if (title.includes('html') || title.includes('css')) {
        return 'https://developer.mozilla.org/en-US/docs/Learn'; // MDN Web Docs
      } else if (title.includes('ai') || title.includes('machine') || title.includes('learning')) {
        return 'https://www.coursera.org/learn/machine-learning'; // ML course
      } else if (title.includes('data') || title.includes('science')) {
        return 'https://www.kaggle.com/learn'; // Data Science courses
      } else {
        return 'https://developer.mozilla.org/en-US/docs/Learn'; // Default learning resource
      }
    }
  };

  const resourceTypes = ['all', 'video', 'article', 'quiz', 'exercise'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-300/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Learning <span className="text-yellow-300 animate-pulse">Resources</span> Hub
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover a vast collection of curated learning materials including videos, articles, 
              quizzes, and interactive exercises across all skill levels.
            </p>
            
            <div className="flex justify-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-semibold">{enhancedResources.length}+ Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6" />
                <span className="text-lg font-semibold">Expert Curated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">Always Updated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white shadow-lg relative z-20 -mt-6 mx-4 md:mx-8 rounded-2xl">
        <div className="container">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or learning paths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resource Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
                >
                  {resourceTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
                >
                  <option value="title">Title</option>
                  <option value="type">Type</option>
                  <option value="views">Most Viewed</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <div className="text-sm font-semibold text-gray-700">Results Found</div>
                  <div className="text-2xl font-bold gradient-text">{filteredResources.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No Resources Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setSelectedDifficulty('all');
                }}
                className="btn bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 px-6 py-3 font-semibold transition-all duration-300 border-none"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <div 
                  key={resource.id}
                  className={`group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="card h-full hover:shadow-2xl border border-transparent hover:border-blue-200 relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      resource.type === 'video' ? 'from-red-500/5 to-red-600/5' :
                      resource.type === 'article' ? 'from-blue-500/5 to-blue-600/5' :
                      resource.type === 'quiz' ? 'from-green-500/5 to-green-600/5' :
                      resource.type === 'exercise' ? 'from-purple-500/5 to-purple-600/5' :
                      'from-gray-500/5 to-gray-600/5'
                    }`}></div>
                    
                    <div className="p-6 relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full group-hover:scale-110 transition-transform duration-300 ${
                          resource.type === 'video' ? 'bg-red-100 text-red-700' :
                          resource.type === 'article' ? 'bg-blue-100 text-blue-700' :
                          resource.type === 'quiz' ? 'bg-green-100 text-green-700' :
                          resource.type === 'exercise' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {getTypeIcon(resource.type)}
                          <span className="text-sm font-semibold capitalize">{resource.type}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group-hover:scale-110">
                            <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors duration-300" />
                          </button>
                          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group-hover:scale-110">
                            <Share2 className="h-4 w-4 text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                          </button>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
                        resource.type === 'video' ? 'group-hover:text-red-600' :
                        resource.type === 'article' ? 'group-hover:text-blue-600' :
                        resource.type === 'quiz' ? 'group-hover:text-green-600' :
                        resource.type === 'exercise' ? 'group-hover:text-purple-600' :
                        'group-hover:text-gray-600'
                      }`}>
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {resource.description}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-3 mb-6">
                        {/* Path Info */}
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Tag className="h-4 w-4" />
                          <span className="font-medium">From: {resource.pathTitle}</span>
                        </div>
                        
                        {/* Duration and Difficulty */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{resource.duration || 'N/A'}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            resource.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                            resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            resource.difficulty === 'advanced' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{resource.views?.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span>{resource.rating?.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <a 
                          href={getResourceUrl(resource)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center px-4 py-3 text-white rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 ${
                            resource.type === 'video' ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' :
                            resource.type === 'article' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                            resource.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                            resource.type === 'exercise' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                            'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                          }`}
                        >
                          {resource.type === 'video' ? (
                            <><Play className="h-4 w-4 mr-2" />Watch</>
                          ) : (
                            <><ExternalLink className="h-4 w-4 mr-2" />View</>
                          )}
                        </a>
                        
                        <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      resource.type === 'video' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      resource.type === 'article' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      resource.type === 'quiz' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      resource.type === 'exercise' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find the right resources? Get in touch with us and we'll help you find the perfect learning materials for your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 group">
                Contact Us
              </Link>
              
              <Link href="/paths" className="btn border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-8 py-4 text-lg font-semibold transition-all duration-300">
                Browse Learning Paths
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
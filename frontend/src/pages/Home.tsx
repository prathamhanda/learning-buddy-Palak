import React, { useEffect, useState } from 'react';
import { ArrowRight, Layers, Users, Award, BrainCircuit } from 'lucide-react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from '../components/ui/Link';
import { dummyLearningPaths, categories } from '../data/dummyData';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Only show the first 3 learning paths on the home page
  const featuredPaths = dummyLearningPaths.slice(0, 3);

  return (
    <Layout>
      <Hero />

      {/* Featured Learning Paths */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container relative z-10">
          <div className={`flex justify-between items-center mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold gradient-text">Featured Learning Paths</h2>
            <Link href="/paths" className="text-blue-600 hover:text-blue-700 hover:scale-105 flex items-center transition-all duration-300 group">
              View All Paths
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPaths.map((path, index) => (
              <div 
                key={path.id} 
                className={`card group hover:translate-y-[-8px] hover:shadow-2xl border border-transparent hover:border-blue-200 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={path.image} 
                    alt={path.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:scale-105 transition-all duration-300">
                      {path.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transition-all duration-500">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">{path.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{path.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      <Users className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                      {path.enrolledCount.toLocaleString()} enrolled
                    </span>
                    <span className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      <Award className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                      {path.level}
                    </span>
                  </div>
                  <Link 
                    href={`/path/${path.id}`}
                    className="btn btn-primary w-full flex items-center justify-center hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  >
                    Explore Path <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Explore By Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category} 
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="card p-6 text-center hover:shadow-md transition-all duration-300 hover:border-blue-200 border border-transparent group"
              >
                <div className="rounded-full h-16 w-16 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">{category}</h3>
                <p className="text-sm text-gray-500">Discover top courses and learning paths</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learners Love LearningBuddy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "UX Designer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "LearningBuddy's personalized learning paths helped me transition into UX design in just 4 months. The structured approach and progress tracking made all the difference."
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "The data science path is comprehensive and well-structured. I appreciate how the content adapts to my learning pace and the practical projects reinforce concepts effectively."
              },
              {
                name: "Jessica Williams",
                role: "Frontend Developer",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
                quote: "The interactive coding exercises and real-world projects prepared me for my career change. LearningBuddy's dashboard made it easy to track my goals and celebrate milestones."
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container text-center">
          <BrainCircuit className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Personalized learning paths, expert-curated content, and a supportive community await you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/signup" 
              className="btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium"
            >
              Get Started For Free
            </Link>
            <Link 
              href="/paths" 
              className="btn border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium"
            >
              Explore Learning Paths
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
import React from 'react';
import Layout from '../components/Layout';
import { Link } from '../components/ui/Link';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="rounded-lg bg-white shadow p-10">
          <h1 className="text-3xl font-bold mb-4">About EduSmart</h1>
          <p className="text-gray-700 mb-6">
            EduSmart (LearningBuddy) helps learners build practical skills through curated learning paths,
            hands-on exercises and short projects. Our goal is to make learning structured, motivating and measurable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-lg border">
              <h3 className="font-semibold mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">Make job-ready learning accessible and efficient for everyone.</p>
            </div>
            <div className="p-5 rounded-lg border">
              <h3 className="font-semibold mb-2">How We Teach</h3>
              <p className="text-sm text-gray-600">Short modules, projects and active recall exercises to reinforce learning.</p>
            </div>
            <div className="p-5 rounded-lg border">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm text-gray-600">support@edusmart.example • 123 Learning Street</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Join our community</h4>
              <p className="text-sm text-gray-600">Sign up for updates, new paths and monthly workshops.</p>
            </div>
            <div>
              <Link href="/signup" className="btn btn-primary">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
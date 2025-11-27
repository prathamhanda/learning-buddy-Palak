import React from 'react';
import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Join LearningBuddy</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Create your account to get personalized learning recommendations, track your progress, and join a community of lifelong learners.
          </p>
          
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
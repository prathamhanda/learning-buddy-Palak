import React, { useState } from 'react';
import { User, Mail, Lock, BookOpen, Target, Award } from 'lucide-react';
import { popularSkills, categories } from '../data/dummyData';

const SignupForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: [] as string[],
    goals: '',
    level: 'beginner',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log('Form submitted:', formData);
    alert('Registration successful! Welcome to EduSmart.');
  };

  const nextStep = () => setFormStep(prev => prev + 1);
  const prevStep = () => setFormStep(prev => prev - 1);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="grid md:grid-cols-5">
        {/* Left Column - Progress */}
        <div className="bg-blue-600 text-white p-8 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Start Your Learning Journey</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 1 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}>
                <User className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Personal Details</h3>
                <p className="text-blue-200 text-sm">Tell us about yourself</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 2 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}>
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Learning Interests</h3>
                <p className="text-blue-200 text-sm">What do you want to learn?</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 3 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}>
                <Target className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium">Learning Goals</h3>
                <p className="text-blue-200 text-sm">What do you want to achieve?</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-blue-500 rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center">
                <Award className="h-5 w-5 mr-2" /> Why join EduSmart?
              </h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Personalized learning experiences</li>
                <li>• Expert-curated content</li>
                <li>• Progress tracking and analytics</li>
                <li>• Community support and forums</li>
                <li>• Certificates of completion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="p-8 md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            {formStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <User className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="input pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Mail className="h-5 w-5" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@example.com"
                      className="input pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Lock className="h-5 w-5" />
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="At least 8 characters"
                      className="input pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Lock className="h-5 w-5" />
                    </span>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="Confirm password"
                      className="input pl-10"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full btn btn-primary py-3"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-semibold mb-4">Learning Interests</h3>
                <p className="text-gray-600 mb-4">
                  Select the topics you're interested in learning. This helps us personalize your experience.
                </p>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Interests (Choose up to 5)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {popularSkills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleInterestToggle(skill)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          formData.interests.includes(skill)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Experience Level
                  </label>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="beginner">Beginner - Just getting started</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced learner</option>
                  </select>
                </div>

                <div className="flex justify-between pt-4 space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn border border-gray-300 text-gray-700 flex-1"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-semibold mb-4">Learning Goals</h3>
                <p className="text-gray-600 mb-4">
                  Tell us what you want to achieve with EduSmart. This helps us recommend the right learning paths.
                </p>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                    What are your learning goals?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g., I want to become a full-stack developer, learn data science for career transition, etc."
                    className="input"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-blue-800 mb-2">Your Information Summary</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li><span className="font-medium">Name:</span> {formData.name}</li>
                      <li><span className="font-medium">Email:</span> {formData.email}</li>
                      <li><span className="font-medium">Interests:</span> {formData.interests.join(', ') || 'None selected'}</li>
                      <li><span className="font-medium">Level:</span> {formData.level.charAt(0).toUpperCase() + formData.level.slice(1)}</li>
                    </ul>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn border border-gray-300 text-gray-700 flex-1"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary flex-1"
                    >
                      Complete Registration
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
const _jsxFileName = "src\\components\\SignupForm.tsx";import React, { useState } from 'react';
import { User, Mail, Lock, BookOpen, Target, Award } from 'lucide-react';
import { popularSkills, } from '../data/dummyData';

const SignupForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: [] ,
    goals: '',
    level: 'beginner',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log('Form submitted:', formData);
    alert('Registration successful! Welcome to LearningBuddy.');
  };

  const nextStep = () => setFormStep(prev => prev + 1);
  const prevStep = () => setFormStep(prev => prev - 1);

  return (
    React.createElement('div', { className: "bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
      , React.createElement('div', { className: "grid md:grid-cols-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
        /* Left Column - Progress */
        , React.createElement('div', { className: "bg-blue-600 text-white p-8 md:col-span-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
          , React.createElement('h2', { className: "text-2xl font-bold mb-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, "Start Your Learning Journey"   )
          , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
            , React.createElement('div', { className: "flex items-start space-x-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
              , React.createElement('div', { className: `flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 1 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
                , React.createElement(User, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}} )
              )
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                , React.createElement('h3', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, "Personal Details" )
                , React.createElement('p', { className: "text-blue-200 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, "Tell us about yourself"   )
              )
            )
            , React.createElement('div', { className: "flex items-start space-x-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
              , React.createElement('div', { className: `flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 2 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}
                , React.createElement(BookOpen, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} )
              )
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
                , React.createElement('h3', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, "Learning Interests" )
                , React.createElement('p', { className: "text-blue-200 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}, "What do you want to learn?"     )
              )
            )
            , React.createElement('div', { className: "flex items-start space-x-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
              , React.createElement('div', { className: `flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${formStep >= 3 ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
                , React.createElement(Target, { className: "h-4 w-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}} )
              )
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
                , React.createElement('h3', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Learning Goals" )
                , React.createElement('p', { className: "text-blue-200 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, "What do you want to achieve?"     )
              )
            )
          )

          , React.createElement('div', { className: "mt-12", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
            , React.createElement('div', { className: "bg-blue-500 rounded-lg p-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}
              , React.createElement('h4', { className: "font-medium mb-2 flex items-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
                , React.createElement(Award, { className: "h-5 w-5 mr-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}} ), " Why join LearningBuddy?"
              )
              , React.createElement('ul', { className: "space-y-2 text-sm text-blue-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
                , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}, "• Personalized learning experiences"   )
                , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "• Expert-curated content"  )
                , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, "• Progress tracking and analytics"    )
                , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "• Community support and forums"    )
                , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}, "• Certificates of completion"   )
              )
            )
          )
        )

        /* Right Column - Form */
        , React.createElement('div', { className: "p-8 md:col-span-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
          , React.createElement('form', { onSubmit: handleSubmit, className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
            , formStep === 1 && (
              React.createElement('div', { className: "space-y-4 animate-fadeIn" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
                , React.createElement('h3', { className: "text-xl font-semibold mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, "Personal Information" )
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
                  , React.createElement('label', { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, "Full Name"

                  )
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
                    , React.createElement('span', { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                      , React.createElement(User, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                    )
                    , React.createElement('input', {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      required: true,
                      placeholder: "John Doe" ,
                      className: "input pl-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
                    )
                  )
                )

                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                  , React.createElement('label', { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}, "Email Address"

                  )
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                    , React.createElement('span', { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
                      , React.createElement(Mail, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}} )
                    )
                    , React.createElement('input', {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                      required: true,
                      placeholder: "johndoe@example.com",
                      className: "input pl-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}}
                    )
                  )
                )

                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
                  , React.createElement('label', { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 142}}, "Password"

                  )
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}
                    , React.createElement('span', { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}
                      , React.createElement(Lock, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}} )
                    )
                    , React.createElement('input', {
                      type: "password",
                      id: "password",
                      name: "password",
                      value: formData.password,
                      onChange: handleChange,
                      required: true,
                      placeholder: "At least 8 characters"   ,
                      className: "input pl-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
                    )
                  )
                )

                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}
                  , React.createElement('label', { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}, "Confirm Password"

                  )
                  , React.createElement('div', { className: "relative", __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}}
                    , React.createElement('span', { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
                      , React.createElement(Lock, { className: "h-5 w-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}} )
                    )
                    , React.createElement('input', {
                      type: "password",
                      id: "confirmPassword",
                      name: "confirmPassword",
                      value: formData.confirmPassword,
                      onChange: handleChange,
                      required: true,
                      placeholder: "Confirm password" ,
                      className: "input pl-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
                    )
                  )
                )

                , React.createElement('div', { className: "pt-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}
                  , React.createElement('button', {
                    type: "button",
                    onClick: nextStep,
                    className: "w-full btn btn-primary py-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
, "Continue"

                  )
                )
              )
            )

            , formStep === 2 && (
              React.createElement('div', { className: "space-y-4 animate-fadeIn" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}
                , React.createElement('h3', { className: "text-xl font-semibold mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 197}}, "Learning Interests" )
                , React.createElement('p', { className: "text-gray-600 mb-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 198}}, "Select the topics you're interested in learning. This helps us personalize your experience."

                )

                , React.createElement('div', { className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 202}}
                  , React.createElement('label', { className: "block text-sm font-medium text-gray-700 mb-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 203}}, "Select Your Interests (Choose up to 5)"

                  )
                  , React.createElement('div', { className: "flex flex-wrap gap-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 206}}
                    , popularSkills.map((skill) => (
                      React.createElement('button', {
                        key: skill,
                        type: "button",
                        onClick: () => handleInterestToggle(skill),
                        className: `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          formData.interests.includes(skill)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 208}}

                        , skill
                      )
                    ))
                  )
                )

                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 224}}
                  , React.createElement('label', { htmlFor: "level", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 225}}, "Your Experience Level"

                  )
                  , React.createElement('select', {
                    id: "level",
                    name: "level",
                    value: formData.level,
                    onChange: handleChange,
                    className: "input", __self: this, __source: {fileName: _jsxFileName, lineNumber: 228}}

                    , React.createElement('option', { value: "beginner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 235}}, "Beginner - Just getting started"    )
                    , React.createElement('option', { value: "intermediate", __self: this, __source: {fileName: _jsxFileName, lineNumber: 236}}, "Intermediate - Some experience"   )
                    , React.createElement('option', { value: "advanced", __self: this, __source: {fileName: _jsxFileName, lineNumber: 237}}, "Advanced - Experienced learner"   )
                  )
                )

                , React.createElement('div', { className: "flex justify-between pt-4 space-x-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 241}}
                  , React.createElement('button', {
                    type: "button",
                    onClick: prevStep,
                    className: "btn border border-gray-300 text-gray-700 flex-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 242}}
, "Previous"

                  )
                  , React.createElement('button', {
                    type: "button",
                    onClick: nextStep,
                    className: "btn btn-primary flex-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 249}}
, "Continue"

                  )
                )
              )
            )

            , formStep === 3 && (
              React.createElement('div', { className: "space-y-4 animate-fadeIn" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 261}}
                , React.createElement('h3', { className: "text-xl font-semibold mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 262}}, "Learning Goals" )
                , React.createElement('p', { className: "text-gray-600 mb-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 263}}, "Tell us what you want to achieve with LearningBuddy. This helps us recommend the right learning paths."

                )

                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 267}}
                  , React.createElement('label', { htmlFor: "goals", className: "block text-sm font-medium text-gray-700 mb-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 268}}, "What are your learning goals?"

                  )
                  , React.createElement('textarea', {
                    id: "goals",
                    name: "goals",
                    value: formData.goals,
                    onChange: handleChange,
                    rows: 4,
                    placeholder: "e.g., I want to become a full-stack developer, learn data science for career transition, etc."              ,
                    className: "input", __self: this, __source: {fileName: _jsxFileName, lineNumber: 271}}
)
                )

                , React.createElement('div', { className: "pt-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 282}}
                  , React.createElement('div', { className: "bg-blue-50 p-4 rounded-lg mb-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 283}}
                    , React.createElement('h4', { className: "font-medium text-blue-800 mb-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 284}}, "Your Information Summary"  )
                    , React.createElement('ul', { className: "space-y-1 text-sm text-blue-700"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 285}}
                      , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 286}}, React.createElement('span', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 286}}, "Name:"), " " , formData.name)
                      , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 287}}, React.createElement('span', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 287}}, "Email:"), " " , formData.email)
                      , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 288}}, React.createElement('span', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 288}}, "Interests:"), " " , formData.interests.join(', ') || 'None selected')
                      , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 289}}, React.createElement('span', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 289}}, "Level:"), " " , formData.level.charAt(0).toUpperCase() + formData.level.slice(1))
                    )
                  )

                  , React.createElement('div', { className: "flex justify-between space-x-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 293}}
                    , React.createElement('button', {
                      type: "button",
                      onClick: prevStep,
                      className: "btn border border-gray-300 text-gray-700 flex-1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 294}}
, "Previous"

                    )
                    , React.createElement('button', {
                      type: "submit",
                      className: "btn btn-primary flex-1"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 301}}
, "Complete Registration"

                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default SignupForm;
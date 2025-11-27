import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative" style={{ height: '600px' }}>
              <iframe 
                data-tally-src="https://tally.so/r/3q2pYk?transparentBackground=1" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0}
                marginWidth={0}
                title="Contact form"
                className="rounded-2xl"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-500">
            <p>Or reach out to us directly at <a href="mailto:pgoyal2_be23@thapar.edu" className="text-blue-600 hover:underline">pgoyal2_be23@thapar.edu</a></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
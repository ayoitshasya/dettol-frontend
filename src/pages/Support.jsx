import { useState } from 'react';

function Support() {
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = [
    'General',
    'Account',
    'Technical',
    'Financial',
    'Data'
  ];

  const faqs = [
    {
      question: "How do I interpret the financial metrics?",
      answer: "Our financial metrics are presented with clear indicators. Green arrows show positive trends, while red indicates areas needing attention. Each metric comes with a detailed explanation when you hover over the information icon.",
      category: "Financial"
    },
    {
      question: "How is the market sentiment calculated?",
      answer: "Market sentiment is calculated using our proprietary AI algorithm that analyzes multiple factors including trading volume, price movements, social media trends, and news sentiment.",
      category: "Technical"
    },
    {
      question: "How can I export my custom reports?",
      answer: "You can export custom reports in multiple formats (PDF, Excel, CSV) by clicking the export button in the top right corner of your report page.",
      category: "Data"
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level encryption and security measures to protect all your data. Our systems are regularly audited and comply with industry standards.",
      category: "General"
    }
  ];

  return (
    <main className="pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 
            hover:text-blue-600">Help & Support</h1>
          <p className="text-gray-600 transition-colors duration-200 
            hover:text-blue-600">Get assistance and answers to your questions</p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>support@finlytics.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>1-800-FINLYTICS</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl 
                transition-colors duration-200 hover:bg-blue-700 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Start Live Chat
              </button>
              <button className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-xl 
                transition-colors duration-200 hover:bg-gray-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 
                  ${selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs
              .filter(faq => selectedCategory === 'General' || faq.category === selectedCategory)
              .map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="block p-6 bg-white rounded-xl shadow-sm 
              transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">User Guide</h3>
              <p className="text-gray-600">Comprehensive guide to using Finlytics features</p>
            </a>
            <a href="#" className="block p-6 bg-white rounded-xl shadow-sm 
              transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">Video Tutorials</h3>
              <p className="text-gray-600">Step-by-step video guides for all features</p>
            </a>
            <a href="#" className="block p-6 bg-white rounded-xl shadow-sm 
              transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">API Documentation</h3>
              <p className="text-gray-600">Technical documentation for developers</p>
            </a>
            <a href="#" className="block p-6 bg-white rounded-xl shadow-sm 
              transition-transform duration-200 hover:scale-105">
              <h3 className="font-semibold text-gray-800 mb-2">Knowledge Base</h3>
              <p className="text-gray-600">Articles and guides for common questions</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Support; 
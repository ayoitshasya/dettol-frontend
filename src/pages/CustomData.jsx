import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomData() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/report');
  };

  return (
    <main className="pt-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 
            hover:text-blue-600">Custom Data Upload</h1>
          <p className="text-gray-600 transition-colors duration-200 
            hover:text-blue-600">Upload your financial documents for analysis</p>
        </div>

        {/* Date Selection */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
            <select
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl 
                transition-colors duration-200 hover:bg-blue-50 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose Month</option>
              {Array.from({ length: 12 }, (_, i) => {
                const month = new Date(0, i).toLocaleString('default', { month: 'long' });
                return <option key={month} value={month}>{month}</option>;
              })}
            </select>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
            <select
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl 
                transition-colors duration-200 hover:bg-blue-50 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose Year</option>
              {Array.from({ length: 5 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>
          </div>
        </div>

        {/* File Upload Sections */}
        <div className="space-y-6 mb-8">
          {/* First Upload */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Financial Statement
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 
              border-gray-300 border-dashed rounded-xl hover:border-blue-500 
              transition-colors duration-200">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" 
                  fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 
                    01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 
                    4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium 
                    text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input type="file" className="sr-only"/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Second Upload */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Supporting Documents
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 
              border-gray-300 border-dashed rounded-xl hover:border-blue-500 
              transition-colors duration-200">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" 
                  fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 
                    01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 
                    4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium 
                    text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input type="file" className="sr-only"/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium 
              transition-colors duration-200 hover:bg-blue-700 focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Documents
          </button>
        </div>
      </div>
    </main>
  );
}

export default CustomData; 
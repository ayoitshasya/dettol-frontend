import { useState } from 'react';

function Report() {
  const [reportData] = useState({
    companyName: "ACME Corporation",
    reportDate: new Date().toLocaleDateString(),
    financialMetrics: {
      revenue: "$1,234,567",
      expenses: "$876,543",
      profit: "$358,024",
      growthRate: "12.5%"
    }
  });

  return (
    <main className="pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Report Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 
            hover:text-blue-600">Financial Analysis Report</h1>
          <p className="text-gray-600 transition-colors duration-200 
            hover:text-blue-600">Generated on {reportData.reportDate}</p>
        </div>

        {/* Report Content */}
        <div className="space-y-8">
          {/* Company Overview */}
          <section className="bg-gray-50 p-8 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
              hover:text-blue-600">Company Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2 text-gray-700">Company Name</h3>
                <p className="text-2xl font-semibold text-blue-600">{reportData.companyName}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2 text-gray-700">Report Period</h3>
                <p className="text-2xl font-semibold text-blue-600">Q2 2024</p>
              </div>
            </div>
          </section>

          {/* Financial Metrics */}
          <section className="bg-gray-50 p-8 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
              hover:text-blue-600">Financial Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Revenue</h3>
                <p className="text-2xl font-semibold text-blue-600">
                  {reportData.financialMetrics.revenue}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Expenses</h3>
                <p className="text-2xl font-semibold text-red-600">
                  {reportData.financialMetrics.expenses}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Net Profit</h3>
                <p className="text-2xl font-semibold text-green-600">
                  {reportData.financialMetrics.profit}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Growth Rate</h3>
                <p className="text-2xl font-semibold text-purple-600">
                  {reportData.financialMetrics.growthRate}</p>
              </div>
            </div>
          </section>

          {/* Analysis Summary */}
          <section className="bg-gray-50 p-8 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
              hover:text-blue-600">Analysis Summary</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                Based on the uploaded financial documents, our analysis indicates strong 
                financial performance with a positive growth trajectory. The company shows 
                healthy revenue growth and maintaining good profit margins. Key areas of 
                strength include efficient cost management and steady market expansion.
              </p>
            </div>
          </section>

          {/* Download Button */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium 
              transition-colors duration-200 hover:bg-blue-700 focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Report; 
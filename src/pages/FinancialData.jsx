import { useState } from 'react';

function FinancialData() {
  const [timeFrame, setTimeFrame] = useState('1Y');
  
  const financialMetrics = {
    revenue: {
      current: "$12.5M",
      growth: "+15.3%"
    },
    expenses: {
      current: "$8.2M",
      growth: "+8.7%"
    },
    profit: {
      current: "$4.3M",
      growth: "+23.5%"
    },
    cashFlow: {
      current: "$3.8M",
      growth: "+12.1%"
    }
  };

  const timeFrames = ['1M', '3M', '6M', '1Y', '5Y'];

  const ratios = [
    { name: 'P/E Ratio', value: '24.5', status: 'normal' },
    { name: 'Debt/Equity', value: '0.45', status: 'good' },
    { name: 'Current Ratio', value: '2.1', status: 'good' },
    { name: 'Quick Ratio', value: '1.8', status: 'good' },
    { name: 'ROE', value: '18.2%', status: 'excellent' },
    { name: 'Profit Margin', value: '34.4%', status: 'excellent' }
  ];

  return (
    <main className="pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 
            hover:text-blue-600">Financial Data Analysis</h1>
          <p className="text-gray-600 transition-colors duration-200 
            hover:text-blue-600">Comprehensive financial metrics and performance indicators</p>
        </div>

        {/* Time Frame Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {timeFrames.map((frame) => (
              <button
                key={frame}
                onClick={() => setTimeFrame(frame)}
                className={`px-6 py-2 rounded-lg transition-colors duration-200 
                  ${timeFrame === frame 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-blue-600'}`}
              >
                {frame}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Revenue Card */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Revenue</h3>
            <p className="text-2xl font-semibold text-blue-600">
              {financialMetrics.revenue.current}
            </p>
            <p className="text-sm font-medium text-green-600 mt-2">
              {financialMetrics.revenue.growth}
            </p>
          </div>

          {/* Expenses Card */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Expenses</h3>
            <p className="text-2xl font-semibold text-red-600">
              {financialMetrics.expenses.current}
            </p>
            <p className="text-sm font-medium text-yellow-600 mt-2">
              {financialMetrics.expenses.growth}
            </p>
          </div>

          {/* Profit Card */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Net Profit</h3>
            <p className="text-2xl font-semibold text-green-600">
              {financialMetrics.profit.current}
            </p>
            <p className="text-sm font-medium text-green-600 mt-2">
              {financialMetrics.profit.growth}
            </p>
          </div>

          {/* Cash Flow Card */}
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Cash Flow</h3>
            <p className="text-2xl font-semibold text-purple-600">
              {financialMetrics.cashFlow.current}
            </p>
            <p className="text-sm font-medium text-green-600 mt-2">
              {financialMetrics.cashFlow.growth}
            </p>
          </div>
        </div>

        {/* Financial Ratios */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
            hover:text-blue-600">Financial Ratios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratios.map((ratio) => (
              <div key={ratio.name} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{ratio.name}</h3>
                <p className={`text-2xl font-semibold ${
                  ratio.status === 'excellent' ? 'text-green-600' :
                  ratio.status === 'good' ? 'text-blue-600' :
                  'text-gray-600'
                }`}>{ratio.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis Summary */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
            hover:text-blue-600">Financial Analysis</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              The financial data indicates strong performance across key metrics. Revenue 
              growth remains robust at 15.3%, while maintaining healthy profit margins. 
              The company's financial ratios suggest a strong balance sheet with good 
              liquidity and manageable debt levels. The positive cash flow trend supports 
              sustainable growth and operational stability.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">Key Observations</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Strong revenue growth trajectory</li>
                <li>Improving profit margins</li>
                <li>Healthy liquidity ratios</li>
                <li>Sustainable debt levels</li>
                <li>Positive cash flow generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FinancialData; 
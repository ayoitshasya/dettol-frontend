import { useState } from 'react';

function MarketInsights() {
  const [selectedSector, setSelectedSector] = useState('All Sectors');

  const marketData = {
    marketCap: "$2.3T",
    dailyVolume: "$125B",
    activeStocks: "2,547",
    marketSentiment: "Bullish"
  };

  const sectors = [
    'All Sectors',
    'Technology',
    'Healthcare',
    'Finance',
    'Energy',
    'Consumer Goods'
  ];

  const trendingStocks = [
    { name: 'AAPL', price: '$175.34', change: '+2.4%', status: 'up' },
    { name: 'MSFT', price: '$325.67', change: '+1.8%', status: 'up' },
    { name: 'GOOGL', price: '$142.89', change: '-0.5%', status: 'down' },
    { name: 'AMZN', price: '$128.45', change: '+3.2%', status: 'up' },
  ];

  return (
    <main className="pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 
            hover:text-blue-600">Market Insights</h1>
          <p className="text-gray-600 transition-colors duration-200 
            hover:text-blue-600">Real-time market analysis and trends</p>
        </div>

        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Market Cap</h3>
            <p className="text-2xl font-semibold text-blue-600">{marketData.marketCap}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Daily Volume</h3>
            <p className="text-2xl font-semibold text-purple-600">{marketData.dailyVolume}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Active Stocks</h3>
            <p className="text-2xl font-semibold text-green-600">{marketData.activeStocks}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Market Sentiment</h3>
            <p className="text-2xl font-semibold text-orange-600">{marketData.marketSentiment}</p>
          </div>
        </div>

        {/* Sector Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 
                  ${selectedSector === sector 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Trending Stocks */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl transition-colors 
            duration-200 hover:bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
              hover:text-blue-600">Trending Stocks</h2>
            <div className="space-y-4">
              {trendingStocks.map((stock) => (
                <div key={stock.name} className="bg-white p-4 rounded-xl shadow-sm 
                  flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{stock.name}</h3>
                    <p className="text-sm text-gray-600">{stock.price}</p>
                  </div>
                  <span className={`font-medium ${
                    stock.status === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stock.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Market News */}
          <div className="bg-gray-50 p-8 rounded-xl transition-colors duration-200 
            hover:bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
              hover:text-blue-600">Market News</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-2">2 hours ago</p>
                <h3 className="font-medium text-gray-800 mb-1">
                  Fed Announces New Policy Measures
                </h3>
                <p className="text-sm text-gray-600">
                  Federal Reserve implements new monetary policy affecting market dynamics...
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-2">4 hours ago</p>
                <h3 className="font-medium text-gray-800 mb-1">
                  Tech Sector Shows Strong Growth
                </h3>
                <p className="text-sm text-gray-600">
                  Technology companies report better than expected quarterly earnings...
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-2">6 hours ago</p>
                <h3 className="font-medium text-gray-800 mb-1">
                  Global Markets Update
                </h3>
                <p className="text-sm text-gray-600">
                  Asian markets rally following positive economic data...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Prediction */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12 transition-colors duration-200 
          hover:bg-gray-100">
          <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
            hover:text-blue-600">Market Prediction</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Based on current market trends and AI-powered analysis, we predict a 
              continued bullish trend in the technology and healthcare sectors. 
              Investors should monitor Federal Reserve policies and global economic 
              indicators for potential market impacts. Our algorithms suggest a 65% 
              probability of market growth in the next quarter.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MarketInsights; 
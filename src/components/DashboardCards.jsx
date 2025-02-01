function DashboardCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {/* Financial Data Card */}
      <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 transition-colors 
        duration-200 hover:bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 transition-colors duration-200 
          hover:text-blue-600">Financial Overview</h2>
        <div className="aspect-[16/9] bg-white rounded-xl"></div>
      </div>

      {/* Stats Card */}
      <div className="bg-gray-50 rounded-2xl p-8 transition-colors duration-200 
        hover:bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 transition-colors duration-200 
          hover:text-blue-600">Key Metrics</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 transition-colors duration-200 
            hover:bg-blue-50">
            <p className="text-sm text-gray-600">Total Assets</p>
            <p className="text-2xl font-semibold">$124,500</p>
          </div>
          <div className="bg-white rounded-xl p-4 transition-colors duration-200 
            hover:bg-green-50">
            <p className="text-sm text-gray-600">Monthly Growth</p>
            <p className="text-2xl font-semibold text-green-500">+12.3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards; 
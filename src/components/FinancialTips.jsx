function FinancialTips() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 transition-colors duration-200 
        hover:text-blue-600">Financial Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((tip) => (
          <div key={tip} className="bg-gray-50 rounded-2xl p-6 transition-colors 
            duration-200 hover:bg-gray-100">
            <h3 className="font-semibold mb-2 transition-colors duration-200 
              hover:text-blue-600">Investment Strategy {tip}</h3>
            <p className="text-gray-600 transition-colors duration-200 
              hover:text-gray-800">
              Essential tips for maintaining a healthy financial portfolio.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialTips; 
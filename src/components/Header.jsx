function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wider text-blue-600 
          transition-all duration-200 hover:text-blue-700 hover:scale-105">
          FINLYTICS
        </div>
        <nav className="flex items-center gap-12">
          <a href="#" className="text-sm font-medium text-gray-600 transition-colors 
            duration-200 hover:text-blue-600">Services</a>
          <a href="#" className="text-sm font-medium text-gray-600 transition-colors 
            duration-200 hover:text-blue-600">Guide</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 
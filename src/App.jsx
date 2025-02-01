import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Layout Components
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Page Components
import Home from './pages/Home';
import CustomData from './pages/CustomData';
import Report from './pages/Report';
import MarketInsights from './pages/MarketInsights';
import FinancialData from './pages/FinancialData';  // Updated import path
import Support from './pages/Support';  // Updated import path

// Feature Components
import HeroSection from './components/HeroSection';
import DashboardCards from './components/DashboardCards';
import FinancialTips from './components/FinancialTips';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="custom-data" element={<CustomData />} />
          <Route path="market-insights" element={<MarketInsights />} />
          <Route path="financial-data" element={<FinancialData />} />
          <Route path="support" element={<Support />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

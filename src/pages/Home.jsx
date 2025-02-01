import HeroSection from '../components/HeroSection';
import DashboardCards from '../components/DashboardCards';
import FinancialTips from '../components/FinancialTips';

function Home() {
  return (
    <main className="pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <DashboardCards />
        <FinancialTips />
      </div>
    </main>
  );
}

export default Home; 
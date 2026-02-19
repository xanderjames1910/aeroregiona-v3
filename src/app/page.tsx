import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";

import BenefitsSection from "@/components/BenefitsSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <BenefitsSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

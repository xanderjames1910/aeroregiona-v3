import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import VoarMagazine from "@/components/home/VoarMagazine";
import PaymentMethodsSection from "@/components/home/PaymentMethodsSection";


import BenefitsSection from "@/components/home/BenefitsSection";
import InfoSection from "@/components/home/InfoSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VoarMagazine />
        <DestinationsSection />
        <BenefitsSection />
        <InfoSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

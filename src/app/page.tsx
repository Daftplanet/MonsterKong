import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorks";
import ResultsSection from "@/components/sections/Results";
import GuaranteesSection from "@/components/sections/Guarantees";
import ServicesSection from "@/components/sections/Services";
import PricingSection from "@/components/sections/Pricing";
import Brands from "@/components/sections/Brands";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <ResultsSection />
        <Brands />
        <GuaranteesSection />
        <ServicesSection />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

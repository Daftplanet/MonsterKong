import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OnboardingHero from "@/components/sections/OnboardingHero";
import OnboardingSteps from "@/components/sections/OnboardingSteps";
import OnboardingYouTubeGuide from "@/components/sections/OnboardingYouTubeGuide";
import OnboardingForm from "@/components/sections/OnboardingForm";

export const metadata = {
  title: "Client Onboarding | MonsterKong",
  description: "Follow our simple onboarding process to get started with MonsterKong YouTube growth services. Learn how to grant channel access and complete the required steps.",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <OnboardingHero />
        <OnboardingYouTubeGuide />
        <OnboardingSteps />
        <OnboardingForm />
      </main>
      <Footer />
    </div>
  );
}

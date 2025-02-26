import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingHowItWorks from "@/components/landing/LandingHowtWorks";
import LandingKeyFeatures from "@/components/landing/LandingKeyFeatures";
import LandingNewsLetter from "@/components/landing/LandingNewsLetter";
import LandingPricingPlans from "@/components/landing/LandingPricingPlans";
import LandingTestimonials from "@/components/landing/LandingTestimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center place-content-center items-center min-h-screen">
      <div className="w-full h-full">
        <LandingHeroSection />
      </div>
      <LandingKeyFeatures />
      <LandingHowItWorks />
      <LandingPricingPlans />
      <LandingTestimonials />
      <LandingNewsLetter />
    </div>
  );
};

export default HomePage;

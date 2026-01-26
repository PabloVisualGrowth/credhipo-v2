import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MortgageCalculator from "@/components/MortgageCalculator";
import About from "@/components/About";
import Storytelling from "@/components/Storytelling";
import Blog from "@/components/Blog";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import LeadModal from "@/components/LeadModal";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <MortgageCalculator />
        <Storytelling />
        <About />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
      <CookieConsent />
      <LeadModal />
    </>
  );
};

export default Index;

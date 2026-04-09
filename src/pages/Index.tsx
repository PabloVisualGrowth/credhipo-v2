import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MortgageCalculator from "@/components/MortgageCalculator";
import About from "@/components/About";
import Storytelling from "@/components/Storytelling";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import LeadModal from "@/components/LeadModal";
import ScrollNav from "@/components/ScrollNav";

const Index = () => {
  return (
    <>
      <Header />
      <ScrollNav />
      <main>
        <Hero />
        <Services />
        <MortgageCalculator />
        <Storytelling />
        <About />
        <Team />
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

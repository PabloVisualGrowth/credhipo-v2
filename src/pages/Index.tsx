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
import Team from "@/components/Team";
import { FullPage } from "@/components/FullPage";
import PageNav from "@/components/PageNav";

const SECTION_IDS = [
  "inicio", "servicios", "calculadora", "como-trabajamos",
  "nosotros", "equipo", "blog", "contacto",
];

const Index = () => (
  <>
    <Header />
    <PageNav />
    <FullPage sectionIds={SECTION_IDS}>
      {/* Each direct child = one page = 100vh */}
      <div style={{ height: "100vh", overflow: "hidden" }}><Hero /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><Services /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><MortgageCalculator /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><Storytelling /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><About /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><Team /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}><Blog /></div>
      <div style={{ height: "100vh", overflow: "hidden auto" }}>
        <ContactCTA />
        <Footer />
      </div>
    </FullPage>
    <CookieConsent />
    <LeadModal />
  </>
);

export default Index;

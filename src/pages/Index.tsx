import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nagaraja | Robotics Engineering Student & Freelance Designer</title>
        <meta 
          name="description" 
          content="Portfolio of Nagaraja - Robotics & Automation Engineering student, freelance web developer and graphic designer from Karnataka, India. Creating clean websites and creative designs." 
        />
        <meta name="keywords" content="Nagaraja, portfolio, web developer, graphic designer, robotics, automation, freelance, Karnataka, India" />
        <link rel="canonical" href="https://nagaraja.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

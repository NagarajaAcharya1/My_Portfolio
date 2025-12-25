import { ArrowRight } from "lucide-react";
import { FadeIn, ScrollReveal } from "./animations/FadeIn";
import myPicImage from "@/assets/my_pic.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-container pt-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <FadeIn delay={0}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Available for Freelance Projects
            </span>
          </FadeIn>
          
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 tracking-tight">
              Nagaraja
            </h1>
          </ScrollReveal>
          
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Robotics & Automation Engineering Student
              <br />
              <span className="text-primary">Freelance Web Developer & Graphic Designer</span>
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} scale>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I build clean websites and creative designs that combine technology, aesthetics, and problem-solving.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up" scale>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="btn-primary">
                Know More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right - Portrait */}
        <ScrollReveal delay={0.2} className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
            <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={myPicImage}
                alt="Nagaraja - Robotics & Automation Engineering Student"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating accent element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl animate-float" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;

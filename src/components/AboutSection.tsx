import { MapPin, GraduationCap, Heart, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations/FadeIn";

const quickFacts = [
  { icon: MapPin, label: "From", value: "Kundapura, Karnataka, India" },
  { icon: GraduationCap, label: "Education", value: "2nd Year Robotics & Automation Engineering" },
  { icon: Sparkles, label: "College", value: "Sahyadri College of Engineering & Management" },
  { icon: Heart, label: "Passion", value: "Technology, Creativity & Helping Others" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <FadeIn>
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-12">
            Building with Purpose
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Paragraph */}
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a second-year Robotics & Automation Engineering student with a deep passion for blending technology with creativity. Beyond my core studies, I've developed strong skills in web development and graphic design, helping clients and fellow students bring their ideas to life through clean, professional visuals and functional websites.
            </p>
          </FadeIn>

          {/* Right - Quick Facts */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {quickFacts.map((fact) => (
              <StaggerItem key={fact.label}>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{fact.label}</span>
                    <p className="font-semibold text-foreground">{fact.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Users, FileText, Presentation, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations/FadeIn";

const helpItems = [
  { icon: Presentation, text: "Created PPTs for classmates and academic projects" },
  { icon: FileText, text: "Designed academic reports and documentation" },
  { icon: Users, text: "Helped peers with design and presentations" },
  { icon: Heart, text: "Focus on collaboration and peer support" },
];

const HelpingSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Community</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Helping Fellow Students
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond freelance work, I actively support my peers by creating presentations, 
              designing reports, and sharing design knowledge. Collaboration and community 
              are at the heart of what I do.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {helpItems.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default HelpingSection;

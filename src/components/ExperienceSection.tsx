import { Briefcase, GraduationCap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations/FadeIn";

const experiences = [
  {
    icon: GraduationCap,
    title: "Robotics & Automation Engineering",
    subtitle: "Sahyadri College of Engineering & Management",
    period: "2024 – Present",
    description: "Pursuing B.E. in Robotics & Automation with focus on embedded systems, automation, and intelligent systems.",
    current: true,
  },
  {
    icon: Briefcase,
    title: "Freelance Graphic Designer",
    subtitle: "Samvada Communications",
    period: "November 2025 – Present",
    description: "Working on creative design projects including social media content and visual branding materials.",
    current: true,
  },
  {
    icon: Briefcase,
    title: "Founder & Creative Director",
    subtitle: "Namma Designs",
    period: "May 2025 – Present",
    description: "Founded graphic design services agency providing branding, web design, and creative solutions for clients.",
    current: true,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-12">
            Journey So Far
          </h2>
        </FadeIn>

        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10 ${
                      exp.current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      <exp.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-premium">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-1">{exp.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ExperienceSection;

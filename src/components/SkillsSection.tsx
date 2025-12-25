import { Code, Palette, Camera, Video, FileText, Lightbulb } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "./animations/FadeIn";

const skills = [
  { icon: Code, name: "Web Development", level: 60, levelLabel: "Beginner–Intermediate" },
  { icon: Palette, name: "Graphic Design (Canva)", level: 95, levelLabel: "Excellent" },
  { icon: Camera, name: "Photoshop", level: 65, levelLabel: "Medium" },
  { icon: Video, name: "Video Editing", level: 45, levelLabel: "Basic" },
  { icon: FileText, name: "Presentation Design", level: 90, levelLabel: "Expert" },
  { icon: Lightbulb, name: "Creativity & Problem Solving", level: 85, levelLabel: "Strong" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SlideIn direction="up">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-12">
            What I Work With
          </h2>
        </SlideIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <div className="card-premium group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.levelLabel}</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;

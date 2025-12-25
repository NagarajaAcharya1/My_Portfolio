import { ExternalLink, Folder } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "./animations/FadeIn";

const projects = [
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    description: "Complete visual branding package including logo, color palette, and brand guidelines.",
  },
  {
    title: "Academic Presentation Suite",
    category: "Presentation Design",
    description: "Professional PowerPoint designs for academic conferences and college projects.",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description: "Clean, responsive personal portfolio built with modern web technologies.",
  },
  {
    title: "Social Media Campaign",
    category: "Digital Design",
    description: "Creative visual content for social media marketing and engagement.",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding">
      <div className="section-container">
        <SlideIn direction="up">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A showcase of my recent projects in web development, graphic design, and presentation design.
          </p>
        </SlideIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <div className="card-premium group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Folder className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WorkSection;

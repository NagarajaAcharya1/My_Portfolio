import { Globe, Presentation, FileImage, Share2, Video } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations/FadeIn";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Clean, responsive websites tailored to your brand and goals.",
  },
  {
    icon: Presentation,
    title: "Professional PPT Design",
    description: "Compelling presentations that communicate ideas effectively.",
  },
  {
    icon: FileImage,
    title: "Posters & Academic Reports",
    description: "Well-designed academic materials and visual reports.",
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    description: "Eye-catching graphics optimized for social platforms.",
  },
  {
    icon: Video,
    title: "Basic Video Editing",
    description: "Simple video edits and content creation for various needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            How I Can Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            From websites to presentations, I offer creative solutions tailored to your specific needs.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="card-premium h-full group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;

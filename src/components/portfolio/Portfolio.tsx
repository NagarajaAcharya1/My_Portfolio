import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import {
  Menu, X, Github, Linkedin, Mail, Globe, ArrowUpRight, ArrowRight,
  Code2, Palette, Cpu, Star, MapPin, Download, ChevronUp,
  Zap, Wrench, Sparkles, Layers, Rocket, Award, GraduationCap, Instagram, Facebook,
} from "lucide-react";
import { SiCanvas, SiCss } from "react-icons/si";
import profileImg from "@/assets/my_pic.webp";
import resumePdf from "@/assets/NagarajaAcharya-Resume.pdf";
import stampedImg from "@/assets/Public Stamped Control.webp";
import royaltripuravasiniImg from "@/assets/royaltripuravasini.webp";
import maruthisilksImg from "@/assets/MaruthiSilks.webp";
import mselectricalsImg from "@/assets/mselectricalss.webp";
import sudeekshaImg from "@/assets/sudeeksha.webp";
import saligramakayakingImg from "@/assets/saligramakayaking.webp";
import sunstarequipmentsImg from "@/assets/sunstarequipments.webp";
import samvadaImg from "@/assets/samvadacommunications.webp";
import dotdesignImg from "@/assets/dotdesigntech.webp";
import relianceaircontrolImg from "@/assets/relianceaircontrol.webp";
import pumpmateImg from "@/assets/PumpMate.webp";
import quicktoolsImg from "@/assets/quicktools_preview.webp";
import agrotrackImg from "@/assets/AgroTrack.webp";

const ACCENT = "#baff29";
const LINKEDIN = "https://linkedin.com/in/nagaraja-acharya";
const GITHUB = "https://github.com/NagarajaAcharya1";
const INSTAGRAM = "https://www.instagram.com/nagaraja._.acharya?igsh=bXNmZXAya2pxZnl4";
const FACEBOOK = "https://www.facebook.com/share/1ACcFehQaD/";
const PORTFOLIO_URL = "https://nagarajaacharya.site";
const EMAIL = "mailto:nagarajaacharya517@gmail.com";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------ Small primitives ------------------------ */

function Pill({ children, filled = false, href, download, className = "" }: any) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 whitespace-nowrap";
  const style = filled
    ? "bg-[color:var(--accent-hex,#baff29)] text-black hover:shadow-[0_0_30px_rgba(186,255,41,0.4)] hover:-translate-y-0.5"
    : "border border-white/15 text-white hover:border-[color:var(--accent-hex,#baff29)] hover:text-[color:var(--accent-hex,#baff29)]";
  const cls = `${base} ${style} ${className}`;
  return href ? (
    <a href={href} download={download} target={!download && href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <button className={cls}>{children}</button>
  );
}

function SectionTitle({ eyebrow, title, className = "" }: { eyebrow?: string; title: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-14 ${className}`}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
          <span className="h-px w-8 bg-[color:var(--accent-hex,#baff29)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-white">{title}</h2>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------ Navbar ------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/50 border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 font-display text-xl italic font-bold" style={{ color: ACCENT }}>N</span>
          <span className="hidden font-medium text-white md:inline">Nagaraja</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`group relative text-sm transition-colors ${
                active === n.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {n.label}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                active === n.href ? "w-full" : "w-0 group-hover:w-full"
              }`} style={{ background: ACCENT }} />
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill filled href={LINKEDIN}>Hire Me <ArrowUpRight size={14} /></Pill>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-black/90 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 transition-colors ${
                    active === n.href
                      ? "text-white bg-white/5"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <Pill filled href={LINKEDIN} className="mt-3 justify-center">Hire Me</Pill>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------ Hero ------------------------ */

const ROLES = ["Web Developer", "Graphic Designer", "Robotics Engineer"];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="hero-grid relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle, ${ACCENT}30, transparent 60%)` }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full pulse-dot" style={{ background: ACCENT }} />
                <span className="relative h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              </span>
              Available for Work
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]">
              Hi, I'm <span className="italic">Nagaraja</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex h-10 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[i]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium"
                  style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: `${ACCENT}10` }}
                >
                  {ROLES[i]}
                </motion.span>
              </AnimatePresence>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              I build production-ready websites, IoT solutions, and digital experiences — blending engineering precision with creative execution.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill filled href={LINKEDIN}>Let's Talk <ArrowUpRight size={14} /></Pill>
              <Pill href={resumePdf} download="Nagaraja-Resume.pdf"><Download size={14} /> Download CV</Pill>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex items-center gap-5 text-white/50">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin size={18} /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-white transition"><Github size={18} /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-white transition"><Instagram size={18} /></a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-white transition"><Facebook size={18} /></a>
              <a href={EMAIL} className="hover:text-white transition"><Mail size={18} /></a>
              <span className="ml-2 flex items-center gap-1.5 text-xs"><MapPin size={12} /> Mangalore, India</span>
            </div>
          </Reveal>
        </div>

        {/* Portrait + rotating badge */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-40" style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }} />
            <div className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <img
                src={profileImg}
                alt="Nagaraja Acharya profile photo"
                className="h-full w-full object-cover opacity-60 md:grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-90 md:group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            {/* rotating stamp */}
            <div className="absolute -bottom-6 -left-6 h-28 w-28 md:h-32 md:w-32">
              <div className="animate-spin-slow relative h-full w-full">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text fill="white" fontSize="9" letterSpacing="2" fontFamily="Inter">
                    <textPath href="#circle">WEB DEV • DESIGNER • FREELANCER • </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full" style={{ background: ACCENT }}>
                <Sparkles size={18} className="text-black" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Marquee ------------------------ */

function Marquee() {
  const items = [
    "Robotics & Automation",
    "Website Development",
    "SEO Optimization",
    "Graphic Design",
    "ROS2 & Embedded Systems",
    "Responsive Design",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section className="relative border-y border-white/5 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {row.map((t, k) => (
          <span key={k} className="flex items-center gap-16 font-display text-2xl md:text-3xl text-white/40">
            {t}
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Counter ------------------------ */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, mv]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { n: 10, s: "+", label: "Client Websites Delivered" },
    { n: 100, s: "%", label: "Responsive & Mobile-Friendly" },
    { n: 5, s: "+", label: "Live Projects Built" },
    { n: 5, s: "+", label: "Technologies Mastered" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="border-l border-white/10 pl-5">
              <div className="font-display text-5xl md:text-6xl text-white">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm text-white/50">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ About ------------------------ */

function About() {
  const values = [
    { icon: Rocket, t: "Production-ready builds", d: "Responsive, performant sites that ship." },
    { icon: Layers, t: "Engineering + Design", d: "Precision meets creative execution." },
    { icon: MapPin, t: "Mangalore · Remote", d: "Available worldwide for collabs." },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="About" title={<>What I do, <span className="italic text-white/60">and how</span></>} />
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-xl leading-relaxed text-white/70">
            Motivated 3rd-year <span className="text-white">Robotics & Automation Engineering</span> student with hands-on experience in robotics,
            <span className="text-white"> embedded systems</span>, web development, and <span className="text-white">digital product design</span>. Currently working as a{" "}
            <span className="text-white">Web Developer</span> at <span className="text-white">Samvada Communications</span>.
          </p>
          <p className="mt-6 text-white/50">
            I care about work that ships — clean interfaces, resilient backends, and hardware that actually runs
            in the field.
          </p>
        </Reveal>
        <div className="grid gap-4">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                  <v.icon size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">{v.t}</div>
                  <div className="mt-1 text-sm text-white/50">{v.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Tech stack ------------------------ */

function TechStack() {
  const stack = [
    { label: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { label: "CSS3", icon: SiCss },
    { label: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { label: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
    { label: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    { label: "Arduino", logo: "https://cdn.simpleicons.org/arduino/00878F" },
    { label: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi/A22846" },
    { label: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { label: "Photoshop", fallback: "Ps" },
    { label: "Canva", icon: SiCanvas },
  ];
  const marqueeItems = [...stack, ...stack];
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <Reveal>
        <div className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">Tools of the trade</div>
      </Reveal>
      <div className="relative overflow-hidden border-y border-white/5 py-5">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[color:var(--background)] to-transparent md:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[color:var(--background)] to-transparent md:w-28" />
        <div className="flex w-max animate-marquee-rtl gap-4 whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/75 transition-all hover:border-[color:var(--accent-hex,#baff29)] hover:text-white"
            >
              {item.icon ? (
                <item.icon size={18} className="shrink-0" style={{ color: ACCENT }} />
              ) : item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.label} logo`}
                  loading="lazy"
                  className="h-5 w-5 shrink-0"
                />
              ) : (
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#31a8ff]/15 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#31a8ff]">
                  {item.fallback}
                </span>
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Services ------------------------ */

function Services() {
  const items = [
    { n: "01", t: "Web Development", d: "Responsive, mobile-first websites — business, portfolio, e-commerce." },
    { n: "02", t: "Graphic & Brand Design", d: "Social creatives, posters, brand presentations." },
    { n: "03", t: "IoT & Embedded Solutions", d: "Sensor integration, real-time dashboards, automation." },
    { n: "04", t: "Maintenance & SEO", d: "Ongoing updates, optimization, performance." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="Services" title={"What I can build for you"} />
      <div className="divide-y divide-white/10 border-y border-white/10">
        {items.map((it, i) => (
          <Reveal key={it.n} delay={i * 0.05}>
            <a href="#contact" className="group flex items-center gap-6 py-8 md:py-10 transition-all">
              <span className="font-display text-2xl text-white/30 md:text-3xl w-14">{it.n}</span>
              <div className="flex-1">
                <div className="font-display text-2xl md:text-4xl text-white transition-colors group-hover:text-[color:var(--accent-hex,#baff29)]">{it.t}</div>
                <div className="mt-2 text-sm text-white/50 md:text-base">{it.d}</div>
              </div>
              <ArrowUpRight className="text-white/40 transition-all group-hover:text-[color:var(--accent-hex,#baff29)] group-hover:-translate-y-1 group-hover:translate-x-1" size={28} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Client Websites ------------------------ */

const CLIENT_SITES = [
  { title: "Maruthi Silks Saligrama", url: "https://maruthisilkssaligrama.com", tag: "E-Commerce / Retail", localImg: maruthisilksImg },
  { title: "MS Electricals", url: "https://mselectricalss.com", tag: "Business / Services", localImg: mselectricalsImg },
  { title: "Sudeeksha", url: "https://sudeeksha.in", tag: "Business / Services", localImg: sudeekshaImg },
  { title: "Royal Tripura Vasini", url: "https://royaltripuravasini.com", tag: "Business / Services", localImg: royaltripuravasiniImg },
  { title: "Saligrama Kayaking Point", url: "https://saligramakayaking.com", tag: "Tourism / Adventure", localImg: saligramakayakingImg },
  { title: "Sunstar Kitchen Equipments", url: "https://sunstarequipments.in", tag: "Business / Products", localImg: sunstarequipmentsImg },
  { title: "Samvada Communications", url: "https://samvadacommunications.com", tag: "Media / Communications", localImg: samvadaImg },
  { title: "Dot Design", url: "https://dotdesigntech.com", tag: "Design / Technology", localImg: dotdesignImg },
  { title: "Reliance Air Control", url: "https://relianceaircontrol.com", tag: "Business / HVAC", localImg: relianceaircontrolImg },
];


function ClientMarqueeRow({ sites, reverse = false }: { sites: typeof CLIENT_SITES; reverse?: boolean }) {
  const doubled = [...sites, ...sites];
  return (
    <div
      className="group flex gap-5 w-max"
      style={{
        animation: `marquee-${reverse ? "rtl" : "ltr"} ${reverse ? "38s" : "32s"} linear infinite`,
      }}
    >
      {doubled.map((site, i) => (
        <a
          key={i}
          href={site.url}
          target="_blank"
          rel="noreferrer"
          className="group/card relative flex-shrink-0 w-[280px] sm:w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-500 hover:border-[#baff29]"
          style={{ animationPlayState: "inherit" }}
        >
          <div className="relative h-40 overflow-hidden rounded-t-[1.4rem] bg-[#0d0d0d]">
            <img
              src={site.localImg ?? screenshotUrl(site.url)}
            alt={`${site.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover object-top opacity-60 md:grayscale transition-all duration-700 group-hover/card:scale-110 group-hover/card:opacity-90 md:group-hover/card:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
            <span className="absolute bottom-3 left-4 text-[10px] font-medium tracking-widest uppercase" style={{ color: ACCENT }}>{site.tag}</span>
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-medium text-white truncate">{site.title}</div>
            <div className="mt-0.5 text-[11px] text-white/40 truncate">{site.url.replace("https://", "")}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

function ClientWebsites() {
  const row1 = CLIENT_SITES.slice(0, 5);
  const row2 = CLIENT_SITES.slice(5);
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Client Work" title={<>Websites I've <span className="italic text-white/60">built & launched</span></>} />
      </div>
      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-40" style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-40" style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 100%)" }} />
        <div className="flex flex-col gap-5 overflow-hidden">
          <div className="overflow-hidden" onMouseEnter={e => (e.currentTarget.querySelector('div') as HTMLElement).style.animationPlayState = 'paused'} onMouseLeave={e => (e.currentTarget.querySelector('div') as HTMLElement).style.animationPlayState = 'running'}>
            <ClientMarqueeRow sites={row1} />
          </div>
          <div className="overflow-hidden" onMouseEnter={e => (e.currentTarget.querySelector('div') as HTMLElement).style.animationPlayState = 'paused'} onMouseLeave={e => (e.currentTarget.querySelector('div') as HTMLElement).style.animationPlayState = 'running'}>
            <ClientMarqueeRow sites={row2} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Projects ------------------------ */

const PROJECTS = [
  {
    title: "PumpMate",
    sub: "Fuel Station Management System",
    desc: "Full-stack platform for pump readings, sales, vehicles, expenses, salaries, and analytics.",
    tag: "Full-Stack / Web App",
    stack: "HTML • CSS • JS • PHP • MySQL",
    href: "https://pumpmate.vercel.app/",
  },
  {
    title: "QuickTools",
    sub: "Online Productivity Utilities",
    desc: "Browser-based utility platform with educational tools & calculators. Zero-dependency.",
    tag: "Web App / Utility",
    stack: "HTML • CSS • JS",
    href: "https://www.quicktools.website/",
  },
  {
    title: "AgroTrack",
    sub: "Agricultural Field Monitoring Robot",
    desc: "Autonomous robot with environmental sensors for real-time field data collection.",
    tag: "Robotics / IoT",
    stack: "Arduino • Sensors",
    href: "https://agrotrack-frontend.onrender.com/",
  },
  {
    title: "Public Stampede Control System",
    sub: "Crowd Density IoT Dashboard",
    desc: "IoT-based crowd density monitoring with real-time web dashboard and alerting.",
    tag: "IoT / Dashboard",
    stack: "IoT • Web Dashboard",
    href: null,
  },
];

const PROJECT_IMAGES: Record<string, string> = {
  PumpMate: pumpmateImg,
  QuickTools: quicktoolsImg,
  AgroTrack: agrotrackImg,
  "Public Stampede Control System": stampedImg,
};

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  const cardRef = useRef<HTMLElement>(null);
  const img = PROJECT_IMAGES[p.title];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.03,1.03,1.03)`;
    const imgEl = el.querySelector<HTMLElement>(".tilt-img");
    if (imgEl) imgEl.style.transform = `translate(${x * -10}px, ${y * -10}px) scale(1.08)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    const imgEl = el.querySelector<HTMLElement>(".tilt-img");
    if (imgEl) imgEl.style.transform = "translate(0,0) scale(1)";
  };

  const Tag = p.href ? "a" : "div";
  const linkProps = p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Tag
      {...linkProps}
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s cubic-bezier(0.22,1,0.36,1)", willChange: "transform", scrollSnapAlign: "start" }}
      className="relative flex-shrink-0 w-[340px] sm:w-[400px] md:w-[460px] overflow-hidden rounded-3xl border border-white/10 bg-[#141414] cursor-pointer group"
    >
      {/* accent glow */}
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 40px 4px ${ACCENT}22, 0 20px 60px -10px ${ACCENT}18` }} />
      {/* image */}
      <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-[1.6rem] bg-[#0d0d0d]">
        {img ? (
          <img
            src={img}
            alt={p.title}
            loading="lazy"
            className="tilt-img h-full w-full object-cover opacity-60 md:grayscale group-hover:opacity-90 md:group-hover:grayscale-0"
            style={{ transition: "transform 0.15s cubic-bezier(0.22,1,0.36,1), opacity 0.4s, filter 0.4s", willChange: "transform" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <Sparkles size={32} style={{ color: ACCENT }} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <span className="absolute bottom-4 left-5 text-[10px] font-medium tracking-widest uppercase" style={{ color: ACCENT }}>{p.tag}</span>
        <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100" style={{ color: ACCENT }}>
          <ArrowUpRight size={16} />
        </div>
      </div>
      {/* content */}
      <div className="px-6 py-5">
        <div className="font-display text-2xl text-white">{p.title}</div>
        <div className="mt-1 text-sm text-white/50">{p.sub}</div>
        <p className="mt-2 text-sm text-white/60 line-clamp-2">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.split(" • ").map((s) => (
            <span key={s} className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/60">{s}</span>
          ))}
        </div>
      </div>
    </Tag>
  );
}

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 480 : -480, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / PROJECTS.length;
      setActiveIdx(Math.round(el.scrollLeft / cardW));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="work" className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Selected" title="Curated Work" className="mb-0" />
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo("left")} aria-label="Scroll left"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/30 hover:text-white">
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button onClick={() => scrollTo("right")} aria-label="Scroll right"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/30 hover:text-white">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* scroll row */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24"
          style={{ background: "linear-gradient(to right, oklch(0.14 0 0), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24"
          style={{ background: "linear-gradient(to left, oklch(0.14 0 0), transparent)" }} />
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-6"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {/* peek spacer */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>
      {/* dot indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {PROJECTS.map((_, i) => (
          <button key={i} aria-label={`Go to project ${i + 1}`}
            onClick={() => scrollRef.current?.scrollTo({ left: i * (scrollRef.current.scrollWidth / PROJECTS.length), behavior: "smooth" })}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === activeIdx ? 28 : 6, background: i === activeIdx ? ACCENT : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Experience ------------------------ */

const EXPERIENCE = [
  { when: "November 2025 – Present", role: "Web Developer & Graphic Designer", org: "Samvada Communications, Udupi", desc: "" },
  { when: "09th Feb 2026 – 09th Mar 2026", role: "Robotics Engineering Intern", org: "Technical Career Education Pvt. Ltd. — AgroTrack", desc: "Built an agricultural monitoring robot with real-time sensor data and web-based updates." },
  { when: "26th Mar 2026 – 26th Apr 2026", role: "IoT & Web Development Intern", org: "Technical Career Education Pvt. Ltd. — Stampede Control", desc: "Built an IoT-based crowd monitoring system with a real-time web dashboard for safety management." },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="Experience" title="Work history" />
      <div className="relative">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block" />
        <div className="space-y-2">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-2 border-b border-white/5 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:pl-8">
                <div className="text-sm text-white/50">{e.when}</div>
                <div>
                  <div className="work-role text-lg md:text-xl">{e.role}</div>
                  <div className="mt-1 text-sm text-white/50">{e.org}</div>
                  {e.desc && <div className="mt-2 text-sm text-white/40">{e.desc}</div>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Certifications ------------------------ */

const CERTS = [
  { t: "Technology Job Simulation", o: "Deloitte Australia (Forage)", y: "2025", i: Award },
  { t: "Mastering HTML5: Beginner to Advanced", o: "Udemy", y: "2025", i: Code2 },
  { t: "Learn Basics of Adobe Photoshop CC", o: "Udemy", y: "2025", i: Palette },
  { t: "GenAI Cybersecurity Solutions", o: "Udemy", y: "2024", i: Zap },
  { t: "Graphic Design Essentials", o: "Canva Design School", y: "2024", i: Sparkles },
  { t: "Basics of Python", o: "Infosys Springboard", y: "2024", i: Cpu },
];

function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="Credentials" title="Certifications & Education" />

      <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
        <span className="h-px w-8 bg-[color:var(--accent-hex,#baff29)]" />
        Certifications
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[color:var(--accent-hex,#baff29)]/40 hover:bg-white/[0.04]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                <c.i size={20} />
              </div>
              <div className="text-white">{c.t}</div>
              <div className="mt-2 flex items-center justify-between text-sm text-white/50">
                <span>{c.o}</span><span>{c.y}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
        <span className="h-px w-8 bg-[color:var(--accent-hex,#baff29)]" />
        Education
      </div>
      <div className="flex flex-col gap-4">
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl shrink-0" style={{ background: `${ACCENT}18`, color: ACCENT }}>
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <div className="text-white">B.E. Robotics & Automation Engineering</div>
              <div className="mt-1 text-sm text-white/50">Sahyadri College of Engineering & Management, Mangalore · 2024–Present · 5th Semester</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl shrink-0" style={{ background: `${ACCENT}18`, color: ACCENT }}>
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <div className="text-white">Pre-University Course · Science (PCMC)</div>
              <div className="mt-1 text-sm text-white/50">Government Pre-University College, Kundapura · Jun 2022 – Apr 2024 · Grade: 86%</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl shrink-0" style={{ background: `${ACCENT}18`, color: ACCENT }}>
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <div className="text-white">SSLC · Grade: 92.64%</div>
              <div className="mt-1 text-sm text-white/50">Government High School, Chittur · 2022</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Achievements ------------------------ */

const ACHIEVEMENTS = [
  { t: "10+ client websites delivered", d: "As Web Developer at Samvada Communications.", i: Rocket },
  { t: "Built PumpMate independently", d: "Production-grade, multi-module fuel-station platform.", i: Wrench },
  { t: "7 industry certifications", d: "Across web dev, design, cybersecurity, and AI.", i: Award },
  { t: "Robotics & IoT projects", d: "Real-world automation and embedded systems deployments.", i: Sparkles },
];

function Achievements() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="Milestones" title="Key Achievements" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="group h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all hover:border-white/25">
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                <a.i size={20} />
              </div>
              <div className="font-display text-xl text-white md:text-2xl">{a.t}</div>
              <div className="mt-2 text-sm text-white/50">{a.d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Skills ------------------------ */

const SKILLS = [
  { t: "Web Development", i: Code2, items: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Responsive Design"] },
  { t: "Robotics & Embedded", i: Cpu, items: ["Arduino", "Raspberry Pi", "Embedded Systems", "IoT", "Sensors & Actuators"] },
  { t: "Design & Creative", i: Palette, items: ["Photoshop", "Canva", "Branding", "Social Media Design"] },
  { t: "Tools", i: Wrench, items: ["Git", "Microsoft Office", "Google Workspace"] },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <SectionTitle eyebrow="Skills" title="What I bring to the table" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.06}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                <s.i size={20} />
              </div>
              <div className="text-white font-medium">{s.t}</div>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1 w-1 rounded-full" style={{ background: ACCENT }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ CTA ------------------------ */

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT}40, transparent 60%)` }} />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl">
            Let's build <span className="italic" style={{ color: ACCENT }}>something</span> together
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
            Open to web development, design, and robotics/IoT collaborations.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Pill filled href={EMAIL}>Get in touch <ArrowUpRight size={14} /></Pill>
            <Pill href={LINKEDIN}><Linkedin size={14} /> LinkedIn</Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Footer ------------------------ */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-display text-2xl text-white">Nagaraja</div>
            <div className="mt-2 text-sm text-white/50">Robotics Engineer · Web Developer · Designer</div>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/40">About</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">Bio</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Services</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>IoT & Embedded</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Contact</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a></li>
              <li><a href={EMAIL} className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <span>© 2026 Nagaraja. All rights reserved.</span>
          <span>Mangalore, Karnataka, India · English · Kannada</span>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(186,255,41,0.3)]"
      style={{ color: ACCENT }}
    >
      <ChevronUp size={20} />
    </button>
  );
}

/* ------------------------ Root ------------------------ */

export default function Portfolio() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <TechStack />
        <Services />
        <ClientWebsites />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Skills />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
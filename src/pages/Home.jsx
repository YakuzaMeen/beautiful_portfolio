import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Github,
  Mail,
  Menu,
  Smartphone,
  TestTube2,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const expertise = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Responsive interfaces, REST APIs, authentication, databases and complete product workflows built with modern web technologies.",
  },
  {
    number: "02",
    title: "Quality Assurance",
    description:
      "Functional, regression, exploratory and API testing supported by clear evidence, reproducible findings and product context.",
  },
  {
    number: "03",
    title: "Test Automation",
    description:
      "Reusable scenarios, automated validation and CI-oriented quality practices that help teams release with greater confidence.",
  },
  {
    number: "04",
    title: "Mobile Development",
    description:
      "Flutter and Kotlin experiences with responsive layouts, navigation, authentication and connected application flows.",
  },
  {
    number: "05",
    title: "IoT Solutions",
    description:
      "Sensor monitoring, health-oriented data visualization and mobile integration for connected-device experiences.",
  },
];

const projects = [
  {
    number: "01",
    category: "REAL PRODUCT",
    name: "Seven Gym CRM",
    description:
      "A full-stack management platform for clients, memberships, payments, attendance, inventory, staff and commercial reporting.",
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "JWT"],
    href: "https://github.com/YakuzaMeen/Seven-Gym-CRM",
    accent: "seven",
    panels: ["Revenue overview", "Member management", "Payment control"],
  },
  {
    number: "02",
    category: "MOBILE & IOT",
    name: "EMSafe",
    description:
      "A responsive Flutter experience for connected-device monitoring, electromagnetic health information and sensor-driven user flows.",
    stack: ["Flutter", "Dart", "REST API", "IoT", "QA"],
    href: "https://github.com/orgs/Desarrollo-de-soluciones-IOT-UPC",
    accent: "emsafe",
    panels: ["Sensor monitoring", "Health insights", "Mobile onboarding"],
  },
  {
    number: "03",
    category: "FULL STACK",
    name: "HogarPlan",
    description:
      "A mortgage planning platform with secure access, financial simulations and structured customer and property workflows.",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "JWT"],
    href: "https://github.com/YakuzaMeen/HogarPlan-Web-App",
    accent: "hogar",
    panels: ["Financial simulator", "Customer profiles", "Payment journey"],
  },
];

const marqueeItems = [
  "REACT",
  "TYPESCRIPT",
  "JAVA",
  "SPRING BOOT",
  "FLUTTER",
  "QUALITY ASSURANCE",
  "API TESTING",
  "JENKINS",
  "MYSQL",
  "POSTGRESQL",
  "IOT",
  "GIT",
];

function FadeIn({ children, delay = 0, y = 32, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ContactButton({ label = "Contact me", href = "mailto:u202212214@upc.edu.pe" }) {
  return (
    <a href={href} className="contact-button">
      <span>{label}</span>
      <ArrowUpRight size={18} />
    </a>
  );
}

function CodePortrait() {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 18;
    const y = (event.clientY - rect.top - rect.height / 2) / 18;
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="hero-device"
    >
      <div className="device-glow" />
      <div className="device-window">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <p>oskar.dev</p>
        </div>
        <div className="code-layout">
          <aside>
            <Code2 size={22} />
            <TestTube2 size={22} />
            <Smartphone size={22} />
            <Wifi size={22} />
          </aside>
          <div className="code-content">
            <p><b>const</b> engineer = {'{'}</p>
            <p>&nbsp;&nbsp;build: <span>"products"</span>,</p>
            <p>&nbsp;&nbsp;test: <span>"quality"</span>,</p>
            <p>&nbsp;&nbsp;improve: <span>true</span></p>
            <p>{'}'};</p>
            <div className="quality-card">
              <CheckCircle2 size={24} />
              <div>
                <strong>Release ready</strong>
                <small>Development + QA</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.accent}`}>
      <div className="mini-panel panel-a">
        <span>01</span>
        <strong>{project.panels[0]}</strong>
        <div className="chart-bars"><i /><i /><i /><i /><i /></div>
      </div>
      <div className="mini-panel panel-b">
        <span>02</span>
        <strong>{project.panels[1]}</strong>
        <div className="list-lines"><i /><i /><i /></div>
      </div>
      <div className="main-panel">
        <div className="mock-nav"><i /><i /><i /></div>
        <small>{project.category}</small>
        <h4>{project.panels[2]}</h4>
        <div className="metric-grid">
          <div><b>24/7</b><span>reliable flows</span></div>
          <div><b>100%</b><span>responsive</span></div>
        </div>
        <div className="mock-table"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0.2, 0.85], [1, targetScale]);

  return (
    <div ref={ref} className="project-card-shell">
      <motion.article
        style={{ scale, top: `${96 + index * 28}px` }}
        className="project-card"
      >
        <div className="project-card-top">
          <div className="project-number">{project.number}</div>
          <div className="project-title-wrap">
            <p>{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <a href={project.href} target="_blank" rel="noreferrer" className="ghost-button">
            View project <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="project-description">
          <p>{project.description}</p>
          <div>{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <ProjectVisual project={project} />
      </motion.article>
    </div>
  );
}

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const doubledMarquee = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="portfolio-page">
      <header className="hero" id="home">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="navbar"
        >
          <a href="#home" className="brand">OSKAR®</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </motion.nav>

        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mobile-menu">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            {["about", "expertise", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="hero-title-wrap"
        >
          <h1 className="hero-heading">OSKAR SOSA</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="hero-center"
        >
          <CodePortrait />
        </motion.div>

        <div className="hero-bottom">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Software engineering student building reliable web, mobile and IoT products through development and quality assurance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <ContactButton label="View my work" href="#projects" />
          </motion.div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll</span><ArrowDownRight /></a>
      </header>

      <section className="marquee-section" aria-label="Technology marquee">
        <div className="marquee-track forward">
          {doubledMarquee.map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}
        </div>
        <div className="marquee-track reverse">
          {doubledMarquee.slice().reverse().map((item, index) => <span key={`${item}-reverse-${index}`}>{item}<i /></span>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="floating-icon icon-code"><Code2 /></div>
        <div className="floating-icon icon-test"><TestTube2 /></div>
        <div className="floating-icon icon-mobile"><Smartphone /></div>
        <div className="floating-icon icon-iot"><Wifi /></div>
        <FadeIn><h2 className="section-heading gradient-heading">ABOUT ME</h2></FadeIn>
        <FadeIn delay={0.12} className="about-copy">
          <p>
            I am a Software Engineering student at UPC with experience building full-stack applications, mobile interfaces and IoT-oriented solutions. I also work in Quality Assurance, validating user stories, APIs, integrations and business flows.
          </p>
          <p>
            I enjoy understanding software from both perspectives: <strong>building it correctly</strong> and <strong>verifying that it works correctly.</strong>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}><ContactButton /></FadeIn>
      </section>

      <section className="expertise-section" id="expertise">
        <FadeIn><h2 className="section-heading dark-heading">EXPERTISE</h2></FadeIn>
        <div className="expertise-list">
          {expertise.map((item, index) => (
            <FadeIn delay={index * 0.08} key={item.number}>
              <article className="expertise-item">
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <FadeIn><h2 className="section-heading gradient-heading">PROJECTS</h2></FadeIn>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} total={projects.length} />
          ))}
        </div>
      </section>

      <section className="stack-section">
        <FadeIn><p className="eyebrow">TECHNOLOGY STACK</p></FadeIn>
        <FadeIn delay={0.1}><h2>Tools I use to turn ideas into reliable products.</h2></FadeIn>
        <div className="stack-cloud">
          {["React", "TypeScript", "Java", "Spring Boot", "Flutter", "Python", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Jenkins", "Postman", "Git", "GitHub", "Docker", "Figma"].map((tech, index) => (
            <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}>{tech}</motion.span>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <div>
            <p>AVAILABLE FOR OPPORTUNITIES</p>
            <h2>LET'S BUILD<br />AND TEST<br />SOMETHING GREAT.</h2>
          </div>
          <ContactButton label="Send an email" />
        </div>
        <div className="footer-bottom">
          <p>© 2026 Oskar Rodrigo Sosa Soto</p>
          <div>
            <a href="https://github.com/YakuzaMeen" target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
            <a href="mailto:u202212214@upc.edu.pe"><Mail size={18} />Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

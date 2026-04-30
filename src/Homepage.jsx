import { useEffect, useState, useRef } from "react";
import "./Homepage.css";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SKILLS = [
  {
    cat: "Frontend Core",
    title: "React Ecosystem",
    icon: "⚛️",
    tags: ["React.js", "React Native", "TypeScript", "JavaScript ES6+", "React Hooks", "Context API"],
    color: "#06b6d4",
  },
  {
    cat: "Styling & Design",
    title: "UI Craft",
    icon: "🎨",
    tags: ["Tailwind CSS", "CSS3 / SCSS", "Responsive Design", "Figma to Code", "Animations", "Design Systems"],
    color: "#f97316",
  },
  {
    cat: "Backend & APIs",
    title: "Integrations",
    icon: "🔗",
    tags: ["REST APIs", "Firebase", "WhatsApp API", "Node.js basics", "API Workflows", "Vercel Deploy"],
    color: "#8b5cf6",
  },
  {
    cat: "AI & Tooling",
    title: "AI-Enhanced Dev",
    icon: "🤖",
    tags: ["GitHub Copilot", "Cursor IDE", "Prompt Engineering", "AI Workflow Automation", "LLM Integration", "Claude API"],
    color: "#22c55e",
  },
];

const EXPERIENCE = [
  {
    period: "Oct 2024 – Oct 2025",
    company: "Zaniha Technologies",
    location: "Bangalore",
    role: "Frontend Developer",
    badge: "Full-time",
    points: [
      "Delivered scalable React.js web apps for vendor & executive operations",
      "Built & integrated REST APIs, improving reliability and developer experience",
      "Designed reusable components, form validation, image uploads & API-driven workflows",
      "Shipped a mobile-first company website — increased mobile engagement by 20%",
      "Collaborated in Agile/Scrum sprints, consistently meeting deadlines",
    ],
  },
  {
    period: "Feb 2023 – Feb 2024",
    company: "Maskan Technologies",
    location: "Bangalore",
    role: "Frontend Dev Trainee",
    badge: "Trainee",
    points: [
      "Supported frontend development of a healthcare web application in React.js",
      "Converted Figma designs into clean, responsive, reusable React components",
      "Resolved UI bugs for cross-browser & cross-device compatibility",
      "Strengthened component architecture & state management fundamentals",
    ],
  },
];

const PROJECTS = [
  {
  num: "01",
  name: "GSBM — Ganesan School of Business Management",
  desc: "Full-stack marketing website for a premier business school, featuring Zoho CRM integration for lead capture and admissions workflow. Built for performance, SEO, and conversion.",
  tags: ["React.js", "Vite", "Zoho CRM"],
  live: "https://www.gsbm.co.in",
  color: "#0ea5e9",
  bg: "hsla(19, 91%, 39%, 0.06)",
},
  {
    num: "02",
    name: "Trading Wolf Academy",
    desc: "Fully responsive educational platform for a trading academy. Interactive UI, course layouts, and dynamic content — built for performance and conversion.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://www.tradingwolfacademy.com",
    color: "#f97316",
    bg: "rgba(249,115,22,0.06)",
  },
  {
    num: "02",
    name: "Ariar Technology",
    desc: "High-performance company website with TypeScript type safety, reusable React components, and a consistent Tailwind-powered design system.",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    live: "https://www.ariartech.com",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.06)",
  },
  {
    num: "03",
    name: "Ariar Kitchen",
    desc: "Cloud kitchen ordering app using WhatsApp-based order flow — zero native app required. Menu browsing, cart & order placement solving a real business problem.",
    tags: ["React.js", "WhatsApp API"],
    live: "https://ariar-kitchen-app.vercel.app",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.06)",
  },
  {
    num: "04",
    name: "Vendor Task Manager",
    desc: "Internal platform for task assignment, progress tracking and approval workflows. Real-time data handling & dynamic state management boosting operational efficiency.",
    tags: ["React.js", "Real-time", "Firebase"],
    live: null,
    color: "#22c55e",
    bg: "rgba(34,197,94,0.06)",
  },
];

const MARQUEE_ITEMS = [
  "React.js", "TypeScript", "React Native", "Tailwind CSS",
  "AI-Enhanced Dev", "REST APIs", "Firebase", "Figma to Code",
  "React.js", "TypeScript", "React Native", "Tailwind CSS",
  "AI-Enhanced Dev", "REST APIs", "Firebase", "Figma to Code",
];

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".sl-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("sl-visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────── */
function SectionLabel({ num, text }) {
  return (
    <div className="sl-section-label">
      <span className="sl-section-num">{num}</span>
      <span className="sl-section-divider" />
      <span className="sl-section-text">{text}</span>
    </div>
  );
}

/* HERO */
function Hero() {
  const roles = ["Frontend Developer", "React.js Engineer", "React Native Dev", "AI-Enhanced Builder"];
  const typed = useTypewriter(roles);

  return (
    <section className="sl-hero" id="home">
      {/* Background elements */}
      <div className="sl-hero-noise" aria-hidden />
      <div className="sl-hero-grid" aria-hidden />
      <div className="sl-hero-glow sl-glow1" aria-hidden />
      <div className="sl-hero-glow sl-glow2" aria-hidden />
      <div className="sl-hero-glow sl-glow3" aria-hidden />

      <div className="sl-hero-inner">
        <div className="sl-hero-left">
          {/* Available badge */}
          <div className="sl-hero-badge">
            <span className="sl-badge-ring" />
            <span className="sl-badge-dot" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="sl-hero-name">
            <span className="sl-name-first">SYED</span>
            <span className="sl-name-last">
              <span className="sl-name-outline">LUQ</span>MAAN
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="sl-hero-role-wrap">
            <span className="sl-hero-role-prefix">I build as a </span>
            <span className="sl-hero-role-typed">{typed}<span className="sl-cursor">|</span></span>
          </div>

          <p className="sl-hero-desc">
            Crafting fast, beautiful, and scalable web & mobile experiences.
            From Figma to production — with AI-enhanced workflows that ship faster.
          </p>

          <div className="sl-hero-actions">
            <a href="#projects" className="sl-btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="sl-btn-ghost">Get in Touch</a>
          </div>

          {/* Quick links */}
          <div className="sl-hero-links">
            {[
              { label: "GitHub", href: "https://github.com/syedluqmaan-dev", icon: "⌥" },
              { label: "Email", href: "mailto:Syedluqmaanwork@gmail.com", icon: "✉" },
              { label: "+91 97391 83566", href: "tel:+919739183566", icon: "◎" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="sl-hero-link" target="_blank" rel="noreferrer">
                <span className="sl-hero-link-icon">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="sl-hero-right">
          {/* Stats panel */}
          <div className="sl-hero-panel">
            <div className="sl-panel-header">
              <div className="sl-panel-dots">
                <span /><span /><span />
              </div>
              <span className="sl-panel-title">stats.json</span>
            </div>
            <div className="sl-panel-body">
              {[
                { key: "experience", value: "1+ years", color: "#f97316" },
                { key: "projects_shipped", value: "4+", color: "#06b6d4" },
                { key: "companies", value: "2", color: "#a855f7" },
                { key: "mobile_engagement", value: "+20%", color: "#22c55e" },
                { key: "status", value: "open_to_work", color: "#22c55e" },
              ].map((s) => (
                <div className="sl-panel-row" key={s.key}>
                  <span className="sl-panel-key">"{s.key}"</span>
                  <span className="sl-panel-sep">: </span>
                  <span className="sl-panel-val" style={{ color: s.color }}>"{s.value}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack chips */}
          <div className="sl-hero-stack">
            <p className="sl-stack-label">CURRENT STACK</p>
            <div className="sl-stack-chips">
              {["React.js", "TypeScript", "Tailwind", "React Native", "Firebase", "AI Tools"].map((t) => (
                <span className="sl-stack-chip" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* AI badge */}
          <div className="sl-ai-badge">
            <span className="sl-ai-icon">✦</span>
            <div>
              <div className="sl-ai-title">AI-Enhanced Developer</div>
              <div className="sl-ai-sub">Copilot · Cursor · Claude API</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sl-hero-scroll">
        <div className="sl-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

/* MARQUEE */
function Marquee() {
  return (
    <div className="sl-marquee-wrap">
      <div className="sl-marquee-track">
        {MARQUEE_ITEMS.map((item, i) => (
          <span className="sl-marquee-item" key={i}>
            {item}<span className="sl-marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ABOUT */
function About() {
  return (
    <section className="sl-section sl-about" id="about">
      <SectionLabel num="01" text="About" />
      <div className="sl-about-grid">
        <div className="sl-reveal sl-about-text">
          <h2 className="sl-section-title">
            Building for the<br />
            <span className="sl-title-accent">next generation</span>
          </h2>
          <p>
            I'm <strong>Syed Luqmaan</strong>, a <em>Frontend Developer based in Bangalore</em> with hands-on
            experience building production-grade web and mobile applications. I specialise in{" "}
            <strong>React.js</strong> and increasingly in <strong>React Native</strong> for cross-platform apps.
          </p>
          <p>
            From startup internship to professional roles — I've shipped pixel-perfect interfaces and full
            company websites from scratch. I care about <strong>clean architecture, reusable components,
            and real business impact</strong>.
          </p>
          <p>
            I independently levelled up to <em>TypeScript, Tailwind CSS, and AI-enhanced development workflows</em> —
            using tools like GitHub Copilot, Cursor, and the Claude API to ship faster and smarter.
          </p>

          <div className="sl-about-meta">
            <div className="sl-meta-item">
              <span className="sl-meta-icon">📍</span>
              <span>Bangalore, India</span>
            </div>
            <div className="sl-meta-item">
              <span className="sl-meta-icon">🎓</span>
              <span>B.Tech IST — Presidency University</span>
            </div>
            <div className="sl-meta-item sl-meta-green">
              <span className="sl-meta-dot" />
              <span>Open to Work</span>
            </div>
          </div>
        </div>

        <div className="sl-reveal sl-about-traits">
          {[
            { icon: "⚡", title: "Fast Learner", desc: "Self-taught TypeScript, Tailwind & AI tools on the job to ship better, faster." },
            { icon: "🎯", title: "Impact-Driven", desc: "Increased mobile engagement 20% with a mobile-first redesign. Real metrics matter." },
            { icon: "🧩", title: "Component Architect", desc: "Reusable, clean components that scale across products and teams." },
            { icon: "🤖", title: "AI-Native Workflow", desc: "Copilot, Cursor & Claude API integrated into daily dev — shipping smarter, not just harder." },
          ].map((c) => (
            <div className="sl-trait-card" key={c.title}>
              <span className="sl-trait-icon">{c.icon}</span>
              <div>
                <h4 className="sl-trait-title">{c.title}</h4>
                <p className="sl-trait-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SKILLS */
function Skills() {
  return (
    <section className="sl-section sl-skills" id="skills">
      <SectionLabel num="02" text="Skills" />
      <h2 className="sl-section-title sl-reveal">What I Work With</h2>
      <div className="sl-skills-grid">
        {SKILLS.map((s, i) => (
          <div
            className="sl-skill-card sl-reveal"
            key={s.title}
            style={{ "--accent": s.color, animationDelay: `${i * 0.08}s` }}
          >
            <div className="sl-skill-top">
              <span className="sl-skill-icon">{s.icon}</span>
              <div>
                <div className="sl-skill-cat">{s.cat}</div>
                <h3 className="sl-skill-title">{s.title}</h3>
              </div>
            </div>
            <div className="sl-skill-tags">
              {s.tags.map((t) => (
                <span className="sl-skill-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="sl-skill-glow" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}

/* EXPERIENCE */
function Experience() {
  return (
    <section className="sl-section sl-experience" id="experience">
      <SectionLabel num="03" text="Experience" />
      <h2 className="sl-section-title sl-reveal">Where I've Worked</h2>
      <div className="sl-exp-list">
        {EXPERIENCE.map((e) => (
          <div className="sl-exp-item sl-reveal" key={e.company}>
            <div className="sl-exp-meta">
              <div className="sl-exp-period">{e.period}</div>
              <div className="sl-exp-company">{e.company}</div>
              <div className="sl-exp-loc">{e.location}</div>
              <span className="sl-exp-badge">{e.badge}</span>
            </div>
            <div className="sl-exp-body">
              <h3 className="sl-exp-role">{e.role}</h3>
              <ul className="sl-exp-points">
                {e.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* PROJECTS */
function Projects() {
  return (
    <section className="sl-section sl-projects" id="projects">
      <SectionLabel num="04" text="Projects" />
      <h2 className="sl-section-title sl-reveal">What I've Built</h2>
      <div className="sl-projects-grid">
        {PROJECTS.map((p) => (
          <div
            className="sl-project-card sl-reveal"
            key={p.name}
            style={{ "--accent": p.color, "--bg": p.bg }}
          >
            <div className="sl-project-num">{p.num}</div>
            <div className="sl-project-tags">
              {p.tags.map((t) => (
                <span className="sl-project-tag" key={t}>{t}</span>
              ))}
            </div>
            <h3 className="sl-project-name">{p.name}</h3>
            <p className="sl-project-desc">{p.desc}</p>
            <div className="sl-project-footer">
              {p.live ? (
                <a href={p.live} target="_blank" rel="noreferrer" className="sl-project-link">
                  <span>View Live</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <span className="sl-project-internal">● Internal Project</span>
              )}
            </div>
            <div className="sl-project-shine" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}

/* AI SECTION */
function AISection() {
  return (
    <section className="sl-section sl-ai-section" id="ai">
      <SectionLabel num="05" text="AI & Workflow" />
      <div className="sl-ai-grid">
        <div className="sl-reveal sl-ai-text">
          <h2 className="sl-section-title">
            AI-Native<br />
            <span className="sl-title-accent">Development</span>
          </h2>
          <p>
            I don't just use AI tools — I integrate them into every stage of the development cycle.
            From prompt-engineered code scaffolding to Claude API-powered features, I ship 2–3x faster
            while maintaining production quality.
          </p>
          <p>
            This isn't about replacing skill — it's about <strong>amplifying it</strong>. Better code reviews,
            smarter debugging, faster prototyping. The future of frontend development is AI-enhanced,
            and I'm already there.
          </p>
        </div>
        <div className="sl-reveal sl-ai-tools">
          {[
            { name: "GitHub Copilot", desc: "In-editor AI pair programming", tag: "Daily Driver", color: "#f97316" },
            { name: "Cursor IDE", desc: "AI-native code editor with codebase awareness", tag: "Primary IDE", color: "#06b6d4" },
            { name: "Claude API", desc: "LLM integration in client products", tag: "Integration", color: "#a855f7" },
            { name: "Prompt Engineering", desc: "Structured prompts for code generation & review", tag: "Workflow", color: "#22c55e" },
          ].map((t) => (
            <div className="sl-ai-tool-card" key={t.name} style={{ "--accent": t.color }}>
              <div className="sl-ai-tool-header">
                <h4 className="sl-ai-tool-name">{t.name}</h4>
                <span className="sl-ai-tool-tag">{t.tag}</span>
              </div>
              <p className="sl-ai-tool-desc">{t.desc}</p>
              <div className="sl-ai-tool-bar">
                <div className="sl-ai-tool-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="sl-section sl-contact" id="contact">
      <SectionLabel num="06" text="Contact" />
      <div className="sl-contact-grid">
        <div className="sl-reveal sl-contact-left">
          <h2 className="sl-section-title">
            Let's Build<br />
            <span className="sl-title-accent">Together</span>
          </h2>
          <p>
            Open to frontend roles, React Native opportunities, and freelance projects.
            If you're building something meaningful, I'd love to be part of it.
          </p>

          <div className="sl-contact-channels">
            {[
              { icon: "✉️", label: "Email", val: "Syedluqmaanwork@gmail.com", href: "mailto:Syedluqmaanwork@gmail.com" },
              { icon: "📞", label: "Phone", val: "+91 97391 83566", href: "tel:+919739183566" },
              { icon: "⌥", label: "GitHub", val: "syedluqmaan-dev", href: "https://github.com/syedluqmaan-dev" },
            ].map((c) => (
              <a className="sl-channel" href={c.href} target="_blank" rel="noreferrer" key={c.label}>
                <span className="sl-channel-icon">{c.icon}</span>
                <div>
                  <div className="sl-channel-label">{c.label}</div>
                  <div className="sl-channel-val">{c.val}</div>
                </div>
                <span className="sl-channel-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <form className="sl-reveal sl-contact-form" onSubmit={handleSubmit}>
          <div className="sl-form-row">
            <div className="sl-form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="sl-form-field">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="sl-form-field">
            <label>Subject</label>
            <input type="text" placeholder="Frontend role · React Native · Freelance project..." required />
          </div>
          <div className="sl-form-field">
            <label>Message</label>
            <textarea rows={5} placeholder="Tell me about what you're building..." required />
          </div>
          <button type="submit" className={`sl-form-submit ${sent ? "sl-sent" : ""}`}>
            {sent ? "Sent ✓" : "Send Message"}
            {!sent && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function Homepage() {
  useReveal();

  return (
    <div className="sl-portfolio">
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AISection />
      <Contact />
    </div>
  );
}
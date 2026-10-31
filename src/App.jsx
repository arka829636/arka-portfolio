import React from "react";
import "./App.css";

const skillGroups = [
  {
    title: "Programming & Tools",
    icon: "⌘",
    skills: [
      "Python",
      "SQL",
      "Git & GitHub",
      "Streamlit",
      "Jupyter Notebook",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Data Science",
    icon: "◈",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Cleaning",
      "Power BI",
      "Data Visualization",
    ],
  },
  {
    title: "Mathematics & Statistics",
    icon: "∑",
    skills: [
      "Linear Algebra",
      "Calculus",
      "Probability",
      "Statistics",
      "Descriptive Statistics",
      "Inferential Statistics",
    ],
  },
  {
    title: "Core Concepts",
    icon: "⌘",
    skills: [
      "OOP",
      "Computer Networks",
      "Operating System",
      "Software Engineering",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "◉",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "NLP",
      "RAG",
      "LLMs",
      "Scikit-learn",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "AI • FINTECH",
    title: "Finlytic AI — Intelligent Personal Finance Assistant",
    description:
      "An intelligent personal finance assistant for tracking expenses, analyzing spending patterns, and generating actionable financial insights.",
    tech: "Data Science • Machine Learning  • RAG • LLM",
    link: "https://github.com/arka829636/ai-personal-finance-assistant",
    linkLabel: "View Repository →",
  },
  {
    number: "02",
    category: "SUPPLY CHAIN • ANALYTICS",
    title: "SupplyShield — Supply Chain Analytics & Risk Intelligence",
    description:
      "An interactive supply chain analytics solution that transforms operational data into insights on supplier performance, inventory, and supply chain risks.",
    tech: "SQL · MySQL · Power BI · DAX · Data Analytics",
    link: "https://github.com/arka829636/SupplyShield.git",
    linkLabel: "View Repository →",
  },
  {
    number: "03",
    category: "AI • CONSULTING",
    title: "ConsultIQ",
    description:
      "An AI-powered consulting assistant designed to analyze business problems, identify risks and support data-driven decisions.",
    tech: "Python • AI • RAG • Data Science",
    link: "https://github.com/arka829636",
    linkLabel: "GitHub Profile →",
  },
];

function App() {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [loaderExiting, setLoaderExiting] = React.useState(false);
  const [liveTime, setLiveTime] = React.useState(new Date());
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  React.useEffect(() => {
    const updateClock = () => setLiveTime(new Date());

    updateClock();

    const clock = setInterval(updateClock, 1000);

    return () => clearInterval(clock);
  }, []);

  React.useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    if (
      !cursor ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const move = (e) => {
      cursor.style.setProperty("--cursor-x", `${e.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${e.clientY}px`);

      const card = e.target.closest?.(
        ".project-card, .info-card, .skill-group, .contact-card"
      );

      if (card) {
        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }
    };

    const over = (e) => {
      const target = e.target.closest(
        "a, button, .project-card, .focus-card, .skill-group, .contact-card"
      );

      cursor.classList.toggle("is-hovering", !!target);
    };

    const down = () => cursor.classList.add("is-clicking");
    const up = () => cursor.classList.remove("is-clicking");

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);

    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
    };
  }, []);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const value =
        max > 0 ? (window.scrollY / max) * 100 : 0;

      setScrollProgress(value);
    };

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );

      window.removeEventListener(
        "resize",
        updateScrollProgress
      );
    };
  }, []);

  React.useEffect(() => {
  let value = 0;

  setProgress(0);
  setLoaderExiting(false);

  const interval = setInterval(() => {
    value += 1;

    setProgress(value);

    if (value >= 100) {
      clearInterval(interval);

      // Hold at 100% for a moment
      setTimeout(() => {
        // Start the exit animation
        setLoaderExiting(true);

        // Remove loader after animation finishes
        setTimeout(() => {
          setLoading(false);
        }, 1100);

      }, 500);
    }
  }, 30);

  return () => clearInterval(interval);
}, []);

  React.useEffect(() => {
    if (loading) return;

    const revealItems = document.querySelectorAll(
      ".reveal, .reveal-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const hero = document.querySelector(".hero");
    const scene = document.querySelector(".scene");

    const handleMouseMove = (event) => {
      if (!canHover || !hero || !scene) return;

      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      scene.style.setProperty(
        "--mouse-x",
        `${x * 12}deg`
      );

      scene.style.setProperty(
        "--mouse-y",
        `${y * -10}deg`
      );
    };

    const resetMouse = () => {
      if (!scene) return;

      scene.style.setProperty(
        "--mouse-x",
        "0deg"
      );

      scene.style.setProperty(
        "--mouse-y",
        "0deg"
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      resetMouse
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        resetMouse
      );
    };
  }, [loading]);

  return (
    <div className="app">

      {/* CUSTOM CURSOR */}

      <div
        className="custom-cursor"
        aria-hidden="true"
      >
        <span className="cursor-core" />
        <span className="cursor-ring" />
        <span className="cursor-crosshair" />
      </div>

      {/* SCROLL PROGRESS */}

      <div className="scroll-progress">
        <div
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* LIVE TIME */}

      <div
        className="live-status-bar live-time-only"
        aria-label="Live time and date"
      >
        <span className="live-dot" />

        <span className="live-label">
          LIVE
        </span>

        <strong>
          {liveTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </strong>

        <span className="live-date">
          {liveTime.toLocaleDateString([], {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* LOADER */}

      {loading && (
  <div
    className={`portfolio-loader ${
      loaderExiting ? "loader-exiting" : ""
    }`}
  >
          <div className="loader-grid" />

          <div className="loader-glow loader-glow-one" />
          <div className="loader-glow loader-glow-two" />

          <div className="loader-content">

            <div className="loader-monogram">
              AM
            </div>

            <div className="loader-name">
              <span>ARKA</span>
              <span>MONDAL</span>
            </div>

            <div className="loader-progress-row">
              <span>
                INITIALIZING PORTFOLIO
              </span>

              <strong>
                {progress}%
              </strong>
            </div>

            <div className="loader-progress">
              <div
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="loader-caption">
              LOADING 0 → 100
              &nbsp; • &nbsp;
              DATA • AI • MATHEMATICS
            </div>

          </div>
        </div>
      )}

      {/* BACKGROUND */}

      <div className="stars" />
      <div className="grid-bg" />

      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* NAVBAR */}

      <nav
        className={`navbar ${
          mobileNavOpen
            ? "mobile-open"
            : ""
        }`}
      >

        <a
          href="#home"
          className="brand"
          onClick={() =>
            setMobileNavOpen(false)
          }
        >
          <span className="brand-logo">
            AM
          </span>

          <span>
            Arka Mondal
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            mobileNavOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={
            mobileNavOpen
          }
          onClick={() =>
            setMobileNavOpen(
              (open) => !open
            )
          }
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links">

          <a
            href="#home"
            onClick={() =>
              setMobileNavOpen(false)
            }
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() =>
              setMobileNavOpen(false)
            }
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() =>
              setMobileNavOpen(false)
            }
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() =>
              setMobileNavOpen(false)
            }
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() =>
              setMobileNavOpen(false)
            }
          >
            Contact
          </a>

        </div>

        <a
          className="resume-btn"
          href="#contact"
        >
          Resume ↓
        </a>

      </nav>

      {/* HERO */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <div className="hero-tag">
            ✦ MCA • DATA SCIENCE • AI/ML
          </div>

          <h1 className="hero-title hero-editorial">

            <span className="hero-line hero-white">
              Hi, I&apos;m{" "}
              <span className="hero-gradient-text">
                Arka.
              </span>
            </span>

            <span className="hero-line hero-white">
              I turn data into
            </span>

            <span className="hero-line hero-gradient">
              intelligent
            </span>

            <span className="hero-line hero-amber">
              solutions.
            </span>

          </h1>

          <p className="hero-description">
            MCA student and aspiring Data Scientist
            passionate about Python, Mathematics,
            Statistics, Artificial Intelligence,
            Machine Learning and building
            data-driven applications.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              Explore Projects
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Let&apos;s Connect
            </a>

          </div>

          <div className="terminal">
            <span>$</span>{" "}
            python build_future.py{" "}
            <i>_</i>
          </div>

        </div>

        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="scene">

            <div className="scene-grid" />

            <div className="ring ring-1">
              <span className="ring-dot dot-a" />
              <span className="ring-dot dot-b" />
            </div>

            <div className="ring ring-2">
              <span className="ring-dot dot-c" />
            </div>

            <div className="ring ring-3" />

            <div className="particle particle-1">
              +
            </div>

            <div className="particle particle-2">
              ◆
            </div>

            <div className="particle particle-3">
              ·
            </div>

            <div className="particle particle-4">
              +
            </div>

            <div className="particle particle-5">
              ✦
            </div>

            <div className="core-shadow" />

            <div className="ai-core">

              <div className="core-glow" />

              <div className="core-inner">

                <span className="core-symbol">
                  AI
                </span>

                <span className="core-label">
                  DATA CORE
                </span>

              </div>

            </div>

            <div className="orbit-card card-python">
              PYTHON
            </div>

            <div className="orbit-card card-rag">
              RAG
            </div>

            <div className="orbit-card card-stats">
              σ STATISTICS
            </div>

            <div className="orbit-card card-math">
              ∑ MATH
            </div>

            <div className="orbit-card card-ml">
              AI / ML
            </div>

            <div className="data-panel panel-left">

              <span className="panel-title">
                DATA
              </span>

              <div className="bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

            </div>

            <div className="data-panel panel-right">

              <span className="panel-title">
                MODEL
              </span>

              <div className="wave">
                <b />
                <b />
                <b />
                <b />
                <b />
                <b />
                <b />
              </div>

            </div>

            <div className="scene-scanline scanline-one" />
            <div className="scene-scanline scanline-two" />

            <div className="scene-caption">
              A R K A &nbsp; M O N D A L
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="section about-section reveal"
      >

        <div className="section-label">
          ABOUT ME
        </div>

        <h2>
          Curious mind.
          <br />
          <span>
            Data-driven builder.
          </span>
        </h2>

        <p className="about-text">
          I&apos;m currently pursuing MCA and
          developing my skills in Data Science,
          Artificial Intelligence and Machine
          Learning. With a background in Mathematics,
          I enjoy solving complex problems using
          mathematics, statistics, data and technology.
        </p>

        <div className="about-cards">

          <div className="info-card reveal-card">

            <span>🎓</span>

            <h3>
              MCA Student
            </h3>

            <p>
              Building strong foundations in
              computer science, programming and
              software development.
            </p>

          </div>

          <div className="info-card reveal-card">

            <span>∑</span>

            <h3>
              Mathematics
            </h3>

            <p>
              Using mathematical thinking,
              probability and statistics to
              understand and solve problems.
            </p>

          </div>

          <div className="info-card reveal-card">

            <span>📊</span>

            <h3>
              Data Analysis
            </h3>

            <p>
              Exploring, cleaning and analyzing
              data to discover trends, patterns
              and actionable insights.
            </p>

          </div>

          <div className="info-card reveal-card">

            <span>📈</span>

            <h3>
              Data Science
            </h3>

            <p>
              Turning analyzed data into meaningful
              insights using Python, statistics
              and visualization.
            </p>

          </div>

          <div className="info-card reveal-card">

            <span>🤖</span>

            <h3>
              AI / ML
            </h3>

            <p>
              Exploring machine learning and AI
              to build practical intelligent
              applications.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section reveal"
      >

        <div className="section-label">
          TECHNICAL SKILLS
        </div>

        <h2>
          My <span>toolkit.</span>
        </h2>

        <p className="section-description">
          A combination of programming, data science,
          mathematics, statistics and AI that I use
          to solve problems and build intelligent
          applications.
        </p>

        <div className="skills-stage">

          <div className="skill-orbit orbit-skill-one">
            <span>PY</span>
          </div>

          <div className="skill-orbit orbit-skill-two">
            <span>AI</span>
          </div>

          <div className="skill-orbit orbit-skill-three">
            <span>SQL</span>
          </div>

          <div className="skill-orbit orbit-skill-four">
            <span>∑</span>
          </div>

          <div className="skill-orbit orbit-skill-five">
            <span>DA</span>
          </div>

          <div className="skill-center">

            <div className="skill-center-glow" />

            <strong>
              SKILLS
            </strong>

            <small>
              ANALYSIS • AI • MATH
            </small>

          </div>

          <div className="skill-groups">

            {skillGroups.map(
              (group) => (
                <div
                  className="skill-group reveal-card"
                  key={group.title}
                >

                  <div className="skill-group-header">

                    <div className="skill-group-icon">
                      {group.icon}
                    </div>

                    <h3>
                      {group.title}
                    </h3>

                  </div>

                  <div className="skill-tags">

                    {group.skills.map(
                      (skill) => (
                        <span
                          className="skill-tag"
                          key={skill}
                        >
                          {skill}
                        </span>
                      )
                    )}

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        <div className="learning-state-card reveal-card">

          <div className="learning-state-icon">
            <span>▣</span>
          </div>

          <div className="learning-state-copy">

            <span className="learning-state-label">
              LEARNING STATE
            </span>

            <p>
              Currently exploring advanced topics in AI, RAG, LLMs while building intelligent applications.
            </p>

          </div>

          <div className="learning-state-status">

            <span className="learning-state-dot" />

            <span>
              ALWAYS EXPLORING
            </span>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section reveal"
      >

        <div className="section-label">
          SELECTED WORK
        </div>

        <h2>
          Projects that <span>matter.</span>
        </h2>

        <p className="section-description">
          Practical projects focused on Data Science,
          AI, analytics and intelligent applications.
        </p>

        <div className="projects-grid">

          {projects.map(
            (project) => (
              <article
                className="project-card reveal-card"
                key={project.number}
              >

                <div className="project-topline">

                  <div className="project-number">
                    {project.number}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <div className="project-buttons">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.linkLabel}
                  </a>

                  <span className="project-status">
                    SELECTED PROJECT
                  </span>

                </div>

              </article>
            )
          )}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section contact-section reveal"
      >

        <div className="section-label">
          LET&apos;S CONNECT
        </div>

        <h2>
          Let&apos;s build something
          <br />
          <span>
            intelligent together.
          </span>
        </h2>

        <div className="contact-signal">

          <div className="signal-ring signal-ring-one" />
          <div className="signal-ring signal-ring-two" />
          <div className="signal-ring signal-ring-three" />

          <div className="signal-core">
            <span>↗</span>
          </div>

          <span className="signal-node node-one">
            ✦
          </span>

          <span className="signal-node node-two">
            ●
          </span>

          <span className="signal-node node-three">
            +
          </span>

          <span className="signal-node node-four">
            ◆
          </span>

          <div className="signal-text">
            LET&apos;S CONNECT
          </div>

        </div>

        <div className="contact-grid">

          <a
            href="mailto:arka829636@gmail.com"
            className="contact-card reveal-card"
          >

            <span className="contact-icon">
              ✉
            </span>

            <div>

              <small>
                EMAIL
              </small>

              <strong>
                arka829636@gmail.com
              </strong>

            </div>

            <span>↗</span>

          </a>

          <a
            href="https://github.com/arka829636"
            target="_blank"
            rel="noreferrer"
            className="contact-card reveal-card"
          >

            <span
              className="contact-icon brand-icon"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.17c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.28-1.29-5.28-5.75 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.74.82 1.19 1.86 1.19 3.13 0 4.47-2.72 5.45-5.3 5.74.42.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </span>

            <div>

              <small>
                GITHUB
              </small>

              <strong>
                GitHub Profile
              </strong>

            </div>

            <span>↗</span>

          </a>

          <a
            href="https://www.linkedin.com/in/arka-mondal-am/"
            target="_blank"
            rel="noreferrer"
            className="contact-card reveal-card"
          >

            <span className="contact-icon">
              in
            </span>

            <div>

              <small>
                LINKEDIN
              </small>

              <strong>
                LinkedIn Profile
              </strong>

            </div>

            <span>↗</span>

          </a>

          <a
            href="https://www.instagram.com/arkamondal_/"
            target="_blank"
            rel="noreferrer"
            className="contact-card reveal-card"
          >

            <span
              className="contact-icon brand-icon"
              aria-label="Instagram"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <rect
                  x="3.2"
                  y="3.2"
                  width="17.6"
                  height="17.6"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.4"
                  cy="6.7"
                  r="1.15"
                  fill="currentColor"
                />

              </svg>

            </span>

            <div>

              <small>
                INSTAGRAM
              </small>

              <strong>
                @arkamondal_
              </strong>

            </div>

            <span>↗</span>

          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <span>
          © 2026 Arka Mondal
        </span>

        <span>
          Built with React • Data • AI
        </span>

      </footer>

    </div>
  );
}

export default App;
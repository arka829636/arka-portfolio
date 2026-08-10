import React from "react";
import "./App.css";

const skillGroups = [
  {
    title: "Programming & Tools",
    icon: "⌘",
    skills: ["Python", "SQL", "Git & GitHub", "Streamlit", "Jupyter Notebook"],
  },
  {
    title: "Data Science",
    icon: "◈",
    skills: ["Pandas", "NumPy", "Data Analysis", "Data Cleaning", "Power BI", "Data Visualization"],
  },
  {
    title: "Mathematics & Statistics",
    icon: "∑",
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics", "Descriptive Statistics", "Inferential Statistics"],
  },
  {
    title: "AI & Machine Learning",
    icon: "◉",
    skills: ["Machine Learning", "Artificial Intelligence", "NLP", "RAG", "LLMs", "Scikit-learn"],
  },
];

const projects = [
  {
    number: "01",
    title: "AI Personal Finance Assistant",
    description:
      "An intelligent application that analyzes personal expenses and provides data-driven financial insights and recommendations.",
    tech: "Python • AI • RAG • Streamlit",
  },
  {
    number: "02",
    title: "HR Analytics Dashboard",
    description:
      "An interactive HR dashboard for analyzing employee data, attrition patterns, workforce trends and generating actionable HR insights.",
    tech: "Power BI • Excel • Data Analysis",
  },
  {
    number: "03",
    title: "Data Analysis Dashboard",
    description:
      "An interactive data analysis project focused on cleaning datasets, exploring patterns, finding trends and presenting useful insights through visualizations.",
    tech: "Python • Pandas • NumPy • Data Analysis • Power BI",
  },
];

function App() {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [liveTime, setLiveTime] = React.useState(new Date());
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateClock = () => setLiveTime(new Date());
    updateClock();
    const clock = setInterval(updateClock, 1000);
    return () => clearInterval(clock);
  }, []);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(value);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  React.useEffect(() => {
    let value = 0;
    setProgress(0);

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 550);
      }
    }, 24);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (loading) return;

    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const hero = document.querySelector(".hero");
    const scene = document.querySelector(".scene");

    const handleMouseMove = (event) => {
      if (!canHover || !hero || !scene) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty("--mouse-x", `${x * 12}deg`);
      scene.style.setProperty("--mouse-y", `${y * -10}deg`);
    };

    const resetMouse = () => {
      if (!scene) return;
      scene.style.setProperty("--mouse-x", "0deg");
      scene.style.setProperty("--mouse-y", "0deg");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetMouse);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetMouse);
    };
  }, [loading]);

  return (
    <div className="app">
      <div className="scroll-progress">
        <div style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="cursor-aura" />
      <div className="live-status-bar live-time-only" aria-label="Live time and date">
        <span className="live-dot" />
        <span className="live-label">LIVE</span>
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

      {loading && (
        <div className="portfolio-loader">
          <div className="loader-grid" />
          <div className="loader-glow loader-glow-one" />
          <div className="loader-glow loader-glow-two" />

          <div className="loader-content">
            <div className="loader-monogram">AM</div>
            <div className="loader-name">
              <span>ARKA</span>
              <span>MONDAL</span>
            </div>

            <div className="loader-progress-row">
              <span>INITIALIZING PORTFOLIO</span>
              <strong>{progress}%</strong>
            </div>

            <div className="loader-progress">
              <div style={{ width: `${progress}%` }} />
            </div>

            <div className="loader-caption">DATA • AI • MATHEMATICS</div>
          </div>
        </div>
      )}
      <div className="stars" />
      <div className="grid-bg" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-logo">AM</span>
          <span>Arka Mondal</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="resume-btn" href="/Arka-Mondal-Resume.pdf" download>
          Resume ↓
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-tag">✦ MCA • DATA SCIENCE • AI/ML</div>

          <h1>
            Hi, I'm <span>Arka.</span>
            <br />
            I turn data into
            <br />
            <span>intelligent solutions.</span>
          </h1>

          <p className="hero-description">
            MCA student and aspiring Data Scientist passionate about Python,
            Mathematics, Statistics, Artificial Intelligence, Machine Learning
            and building data-driven applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects <span>→</span>
            </a>
            <a href="#contact" className="secondary-btn">Let's Connect</a>
          </div>

          <div className="terminal">
            <span>$</span> python build_future.py <i>_</i>
          </div>
        </div>

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

            <div className="particle particle-1">+</div>
            <div className="particle particle-2">◆</div>
            <div className="particle particle-3">·</div>
            <div className="particle particle-4">+</div>
            <div className="particle particle-5">✦</div>

            <div className="core-shadow" />
            <div className="ai-core">
              <div className="core-glow" />
              <div className="core-inner">
                <span className="core-symbol">AI</span>
                <span className="core-label">DATA CORE</span>
              </div>
            </div>

            <div className="orbit-card card-python">PYTHON</div>
            <div className="orbit-card card-rag">RAG</div>
            <div className="orbit-card card-stats">σ STATISTICS</div>
            <div className="orbit-card card-math">∑ MATH</div>
            <div className="orbit-card card-ml">AI / ML</div>

            <div className="data-panel panel-left">
              <span className="panel-title">DATA</span>
              <div className="bars">
                <i /><i /><i /><i /><i />
              </div>
            </div>

            <div className="data-panel panel-right">
              <span className="panel-title">MODEL</span>
              <div className="wave">
                <b /><b /><b /><b /><b /><b /><b />
              </div>
            </div>

            <div className="scene-scanline scanline-one" />
            <div className="scene-scanline scanline-two" />
            <div className="scene-caption">A R K A &nbsp; M O N D A L</div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section reveal">
        <div className="section-label">ABOUT ME</div>
        <h2>Curious mind.<br /><span>Data-driven builder.</span></h2>

        <p className="about-text">
          I'm currently pursuing MCA and developing my skills in Data Science,
          Artificial Intelligence and Machine Learning. With a background in
          Mathematics, I enjoy solving complex problems using mathematics,
          statistics, data and technology.
        </p>

        <div className="about-cards">
          <div className="info-card reveal-card"><span>🎓</span><h3>MCA Student</h3><p>Building strong foundations in computer science, programming and software development.</p></div>
          <div className="info-card reveal-card"><span>∑</span><h3>Mathematics</h3><p>Using mathematical thinking, probability and statistics to understand and solve problems.</p></div>
          <div className="info-card reveal-card"><span>📊</span><h3>Data Analysis</h3><p>Exploring, cleaning and analyzing data to discover trends, patterns and actionable insights.</p></div>
          <div className="info-card reveal-card"><span>📈</span><h3>Data Science</h3><p>Turning analyzed data into meaningful insights using Python, statistics and visualization.</p></div>
          <div className="info-card reveal-card"><span>🤖</span><h3>AI / ML</h3><p>Exploring machine learning and AI to build practical intelligent applications.</p></div>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <div className="section-label">TECHNICAL SKILLS</div>
        <h2>My <span>toolkit.</span></h2>
        <p className="section-description">
          A combination of programming, data science, mathematics, statistics
          and AI that I use to solve problems and build intelligent applications.
        </p>

        <div className="skills-stage">
          <div className="skill-orbit orbit-skill-one"><span>PY</span></div>
          <div className="skill-orbit orbit-skill-two"><span>AI</span></div>
          <div className="skill-orbit orbit-skill-three"><span>SQL</span></div>
          <div className="skill-orbit orbit-skill-four"><span>∑</span></div>
          <div className="skill-orbit orbit-skill-five"><span>DA</span></div>
          <div className="skill-center">
            <div className="skill-center-glow" />
            <strong>SKILLS</strong>
            <small>ANALYSIS • AI • MATH</small>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group reveal-card" key={group.title}>
                <div className="skill-group-header">
                  <div className="skill-group-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="projects" className="section reveal">
        <div className="section-label">SELECTED WORK</div>
        <h2>Projects that <span>matter.</span></h2>
        <p className="section-description">
          Practical projects focused on Data Science, AI, Mathematics and intelligent applications.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">{project.tech}</div>
              <div className="project-buttons">
                <a href="https://github.com/arka829636" target="_blank" rel="noreferrer" className="project-link">GitHub Profile →</a>
                <span className="project-status">PROJECT SHOWCASE</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section reveal">
        <div className="section-label">CONTACT</div>
        <h2>Let's build something<br /><span>intelligent together.</span></h2>

        <div className="contact-signal">
          <div className="signal-ring signal-ring-one" />
          <div className="signal-ring signal-ring-two" />
          <div className="signal-ring signal-ring-three" />
          <div className="signal-core">
            <span>↗</span>
          </div>
          <span className="signal-node node-one">✦</span>
          <span className="signal-node node-two">●</span>
          <span className="signal-node node-three">+</span>
          <span className="signal-node node-four">◆</span>
          <div className="signal-text">LET'S CONNECT</div>
        </div>

        <div className="contact-grid">
          <a href="mailto:arka829636@gmail.com" className="contact-card reveal-card">
            <span className="contact-icon">✉</span>
            <div><small>EMAIL</small><strong>arka829636@gmail.com</strong></div>
            <span>↗</span>
          </a>

          <a href="https://github.com/arka829636" target="_blank" rel="noreferrer" className="contact-card reveal-card">
            <span className="contact-icon">◉</span>
            <div><small>GITHUB</small><strong>GitHub Profile</strong></div>
            <span>↗</span>
          </a>

          <a href="https://www.linkedin.com/in/arka-mondal-am/" target="_blank" rel="noreferrer" className="contact-card reveal-card">
            <span className="contact-icon">in</span>
            <div><small>LINKEDIN</small><strong>LinkedIn Profile</strong></div>
            <span>↗</span>
          </a>

          <a href="https://www.instagram.com/arkamondal_/" target="_blank" rel="noreferrer" className="contact-card reveal-card">
            <span className="contact-icon">◎</span>
            <div><small>INSTAGRAM</small><strong>@arkamondal_</strong></div>
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Arka Mondal</span>
        <span>Built with React • Data • AI</span>
      </footer>
    </div>
  );
}

export default App;

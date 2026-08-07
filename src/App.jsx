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
    ],
  },
  {
    title: "Data Science",
    icon: "◈",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
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
    title: "AI Personal Finance Assistant",
    description:
      "An intelligent application that analyzes personal expenses and provides data-driven financial insights and recommendations.",
    tech: "Python • AI • RAG • Streamlit",
  },
  {
    number: "02",
    title: "Data Science Analytics Dashboard",
    description:
      "An interactive dashboard for exploring datasets, identifying trends, visualizing patterns and generating business insights.",
    tech: "Python • Pandas • NumPy • Power BI",
  },
  {
    number: "03",
    title: "RAG-Based AI Assistant",
    description:
      "An AI assistant that retrieves relevant information from documents and generates contextual answers using retrieval augmented generation.",
    tech: "Python • RAG • LLM • NLP",
  },
];

function App() {
  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="stars"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* ================= NAVBAR ================= */}

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

        <a
          className="resume-btn"
          href="/Arka-Mondal-Resume.pdf"
          download
        >
          Resume ↓
        </a>

      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-tag">
            ✦ MCA • DATA SCIENCE • AI/ML
          </div>

          <h1>
            Hi, I'm <span>Arka.</span>
            <br />
            I turn data into
            <br />
            <span>intelligent solutions.</span>
          </h1>

          <p className="hero-description">
            MCA student and aspiring Data Scientist passionate about
            Python, Mathematics, Statistics, Artificial Intelligence,
            Machine Learning and building data-driven applications.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              Explore Projects <span>→</span>
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Let's Connect
            </a>

          </div>

          <div className="terminal">
            <span>$</span> python build_future.py
            <i>_</i>
          </div>

        </div>

        {/* ================= 3D VISUAL ================= */}

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="floating-badge badge-python">
            PYTHON
          </div>

          <div className="floating-badge badge-math">
            ∑ MATH
          </div>

          <div className="floating-badge badge-stat">
            σ STATISTICS
          </div>

          <div className="floating-badge badge-ai">
            AI / ML
          </div>

          <div className="data-stack">

            <div className="stack-card card-am">
              <strong>AM</strong>
            </div>

            <div className="stack-card card-data">
              <span>D A T A</span>
            </div>

            <div className="stack-card card-ai">
              <span>AI</span>
            </div>

          </div>

          <div className="name-platform">
            A R K A &nbsp; M O N D A L
          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-label">
          ABOUT ME
        </div>

        <h2>
          Curious mind.
          <br />
          <span>Data-driven builder.</span>
        </h2>

        <p className="about-text">
          I'm currently pursuing MCA and developing my skills in
          Data Science, Artificial Intelligence and Machine Learning.
          With a background in Mathematics, I enjoy solving complex
          problems using mathematics, statistics, data and technology.
        </p>

        <div className="about-cards">

          <div className="info-card">
            <span>🎓</span>

            <h3>
              MCA Student
            </h3>

            <p>
              Building strong foundations in computer science,
              programming and software development.
            </p>
          </div>

          <div className="info-card">
            <span>∑</span>

            <h3>
              Mathematics
            </h3>

            <p>
              Using mathematical thinking, probability and statistics
              to understand and solve problems.
            </p>
          </div>

          <div className="info-card">
            <span>📊</span>

            <h3>
              Data Science
            </h3>

            <p>
              Turning raw data into meaningful insights using
              Python, statistics and visualization.
            </p>
          </div>

          <div className="info-card">
            <span>🤖</span>

            <h3>
              AI / ML
            </h3>

            <p>
              Exploring machine learning and AI to build practical
              intelligent applications.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section"
      >

        <div className="section-label">
          TECHNICAL SKILLS
        </div>

        <h2>
          My <span>toolkit.</span>
        </h2>

        <p className="section-description">
          A combination of programming, data science, mathematics,
          statistics and AI that I use to solve problems and build
          intelligent applications.
        </p>

        <div className="skill-groups">

          {skillGroups.map((group) => (

            <div
              className="skill-group"
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

                {group.skills.map((skill) => (

                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section"
      >

        <div className="section-label">
          SELECTED WORK
        </div>

        <h2>
          Projects that <span>matter.</span>
        </h2>

        <p className="section-description">
          Practical projects focused on Data Science, AI,
          Mathematics and intelligent applications.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
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
                  href="#"
                  className="project-link"
                >
                  GitHub →
                </a>

                <a
                  href="#"
                  className="project-link"
                >
                  Live Demo →
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-label">
          CONTACT
        </div>

        <h2>
          Let's build something
          <br />
          <span>intelligent together.</span>
        </h2>

        <p className="section-description">
          I'm open to internships, projects, collaborations
          and interesting opportunities.
        </p>

        <div className="contact-grid">

          {/* EMAIL */}

          <a
            href="mailto:arka829636@gmail.com"
            className="contact-card"
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

            <span>
              ↗
            </span>

          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-icon">
              ◉
            </span>

            <div>
              <small>
                GITHUB
              </small>

              <strong>
                GitHub Profile
              </strong>
            </div>

            <span>
              ↗
            </span>

          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
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

            <span>
              ↗
            </span>

          </a>

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/arkamondal_/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-icon">
              ◎
            </span>

            <div>
              <small>
                INSTAGRAM
              </small>

              <strong>
                @arkamondal_
              </strong>
            </div>

            <span>
              ↗
            </span>

          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

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
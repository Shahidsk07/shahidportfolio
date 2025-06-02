import './App.css'

function App() {
  return (
    <div className="portfolio-root">
      {/* Header Section */}
      <header className="portfolio-header">
        <h1 className="portfolio-title">Shahid Ullah</h1>
        <nav className="portfolio-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="portfolio-section about-section">
        <img src="/profile.png" alt="Profile" className="profile-img" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi, I'm Shhaid, a passionate Full Stack Web Developer dedicated to building modern, scalable, and user-friendly web applications. With expertise in both frontend and backend technologies, I specialize in turning ideas into functional, visually appealing products..
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="portfolio-section projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/project1.png" alt="Project 1" />
            <h3>Student Mangaemnet System</h3>
            <p>A sleek, responsive web application built with React and Vite.</p>
          </div>
          <div className="project-card">
            <img src="/project2.png" alt="Project 2" />
            <h3>Advance Health Monitoring</h3>
            <p>Showcase of unique UI/UX concepts and interactive design.</p>
          </div>
          <div className="project-card">
            <img src="/project2.png" alt="Project 2" />
            <h3>Advance Health Monitoring</h3>
            <p>Showcase of unique UI/UX concepts and interactive design.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="portfolio-section skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React.js (Hooks, Context API, React Router)</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Responsive & Mobile-First Design</li>
          <li>UI/UX Design (Figma, Canva)</li>
          <li>Core PHP</li>
          <li>Laravel</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST API Development & Integration</li>
          <li>Authentication & Authorization (JWT, Sessions)</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL (Basic Knowledge)</li>
          <li>Git, GitHub</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>NPM, Yarn</li>
          <li>JSON, AJAX, Fetch API</li>
          <li>API Integration (OpenAI API, Third-Party APIs)</li>
          <li>CRUD Operations</li>
          <li>MVC Architecture</li>
          <li>Deployment (Netlify, Vercel, InfinityFree, 000webhost)</li>
          <li>Domain & Hosting Management (cPanel, FTP)</li>
          <li>Problem-Solving & Debugging</li>
          <li>Clean Code & Performance Optimization</li>
          <li>AI-Powered App Development (Resume Analyzer, Smart Solutions)</li>
          <li>Visual Design with Canva & Figma</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section contact-section">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; 2025 Shahid . All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

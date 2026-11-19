
import "../css_files/Internships.css";

const internshipWeeks = [
  {
    week: "01",
    title: "HTML & Git",
    focus: "Building the first portfolio",
    description:
      "Started with the fundamentals of web development by creating a portfolio using HTML. Practiced using Git to track changes and manage the development process.",
    technologies: ["HTML", "Git", "GitHub"],
  },
  {
    week: "02",
    title: "CSS & Responsive Design",
    focus: "Making the portfolio responsive",
    description:
      "Worked on the visual structure of the portfolio using CSS. Focused on layouts, styling, and making the website adapt to different screen sizes.",
    technologies: ["CSS", "Flexbox", "Responsive Design"],
  },
  {
    week: "03",
    title: "JavaScript",
    focus: "Building an interactive application",
    description:
      "Moved beyond static pages and developed a JavaScript application. Applied JavaScript concepts to make the interface interactive.",
    technologies: ["JavaScript", "DOM", "Events"],
  },
  {
    week: "04",
    title: "React Development",
    focus: "Portfolio & dashboard",
    description:
      "Rebuilt the portfolio using React. Worked with reusable components, state, effects, routing, and component-based application structure.",
    technologies: ["React", "Vite", "React Router", "CSS"],
  },
  {
    week: "05",
    title: "Backend Development",
    focus: "Internship Management API",
    description:
      "Developed a REST API using Node.js and Express. Implemented CRUD operations for students, internships, and applications, along with JWT authentication, password hashing, validation, filtering, and JSON-file persistence. Tested API functionality using Postman.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "bcrypt",
      "Postman",
    ],
  },
  {
    week: "06",
    title: "MongoDB & Full Stack Development",
    focus: "Trackly — Learning Management System",
    description:
      "Worked on Trackly, a learning organization tool. Connected the React frontend with a Node.js and Express backend and MongoDB using Mongoose. Worked on authentication, courses, enrollments, learning paths, and goal tracking.",
    technologies: [
      "MongoDB",
      "Mongoose",
      "React",
      "Node.js",
      "Express.js",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "React Portfolio",
    description:
      "A responsive personal portfolio built with React, featuring reusable components, multiple pages, project details, GitHub integration, and a contact form.",
    stack: "React · Vite · React Router · CSS",
    link: "https://github.com/Rishabh8122004/react-portfolio",
    linkLabel: "View repository",
  },
  {
    number: "02",
    name: "Internship Management API",
    description:
      "A RESTful backend application for managing students, internships, and applications, with CRUD operations, JWT authentication, validation, filtering, and persistent JSON-file storage.",
    stack: "Node.js · Express.js · JWT · JSON",
    link: "https://github.com/Rishabh8122004/internship-management-api",
    linkLabel: "View repository",
  },
  {
    number: "03",
    name: "Trackly — LMS",
    description:
      "A full-stack learning organization tool focused on organizing courses, enrollments, learning paths, and personal learning goals.",
    stack: "React · Node.js · Express · MongoDB",
    link: "https://github.com/Rishabh8122004/Trackly",
    linkLabel: "View repository",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "JSON persistence"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

function Internships() {
  return (
    <section className="internships-page">
      {/* PAGE HEADER */}

      <header className="internships-header">
        <p>MY PROFESSIONAL JOURNEY</p>
        <h1>InternNova Internship</h1>
        <div className="internships-subtitle">
          Full Stack Web Development
        </div>
      </header>

      {/* INTERNSHIP OVERVIEW */}

      <article className="internship-overview">
        <div className="internship-overview-heading">
          <div>
            <p className="internship-eyebrow">EXPERIENCE</p>
            <h2>From fundamentals to full stack development.</h2>
          </div>

          <span className="internship-duration">6 Weeks</span>
        </div>

        <p className="internship-introduction">
          I completed a six-week Full Stack Web Development internship
          at{" "}
          <a
            href="https://www.internnova.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InternNova
          </a>
          . The internship followed a week-by-week learning
          structure, taking me from basic web development to building
          frontend applications, backend APIs, and a full-stack
          application.
        </p>

        <div className="internship-overview-details">
          <div>
            <span>Organization</span>
            <strong>InternNova</strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>6 Weeks</strong>
          </div>

          <div>
            <span>Domain</span>
            <strong>Full Stack Development</strong>
          </div>
        </div>
      </article>

      {/* WEEK-BY-WEEK TIMELINE */}

      <section className="internship-section">
        <header className="internship-section-header">
          <p>THE LEARNING PROCESS</p>
          <h2>Six weeks of building.</h2>
          <span>
            A progression through different layers of web development.
          </span>
        </header>

        <div className="internship-timeline">
          {internshipWeeks.map((item) => (
            <article className="internship-week" key={item.week}>
              <div className="internship-week-number">
                {item.week}
              </div>

              <div className="internship-week-content">
                <p className="internship-week-label">
                  WEEK {item.week}
                </p>

                <h3>{item.title}</h3>

                <h4>{item.focus}</h4>

                <p className="internship-week-description">
                  {item.description}
                </p>

                <div className="internship-tags">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="internship-section">
        <header className="internship-section-header">
          <p>WORK & IMPLEMENTATION</p>
          <h2>Projects I worked on.</h2>
          <span>
            Some of the practical outcomes of this learning journey.
          </span>
        </header>

        <div className="internship-projects">
          {projects.map((project) => (
            <article
              className="internship-project-card"
              key={project.number}
            >
              <span className="internship-project-number">
                {project.number}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="internship-project-stack">
                {project.stack}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="internship-project-link"
              >
                {project.linkLabel} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="internship-section">
        <header className="internship-section-header">
          <p>TECHNOLOGY OVERVIEW</p>
          <h2>Tools & technologies.</h2>
          <span>
            Technologies I worked with throughout the internship.
          </span>
        </header>

        <div className="internship-skills">
          {skillGroups.map((group) => (
            <article className="internship-skill-group" key={group.category}>
              <h3>{group.category}</h3>

              <div className="internship-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TAKEAWAY */}

      <section className="internship-takeaway">
        <p>LOOKING BACK</p>

        <h2>Learning by building.</h2>

        <p>
          This internship helped me connect theoretical concepts
          with practical development. More importantly, it gave me
          experience working across the frontend, backend, and
          database layers of an application.
        </p>
      </section>
    </section>
  );
}

export default Internships;

/* ==================================================
   PROJECT DETAILS
   WEEK 4 REACT PORTFOLIO
   Route: /project/:id
================================================== */

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../Data/projects.js";
import projectCode from "../Data/projectCode.js";
import { ProjectVisual } from "./ProjectCard.jsx";
import ProjectDemo from "./ProjectDemo.jsx";
import CodeViewer from "./CodeViewer.jsx";
import "../css_files/ProjectDetails.css";

const formatNumber = (number) => String(number).padStart(2, "0");

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15 5l-7 7 7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectDetails() {
  const { id } = useParams();

  /* findIndex gives -1 when nothing matches, so project is undefined */
  const projectIndex = projects.findIndex((item) => item.id === id);
  const project = projects[projectIndex];

  /* Every project starts at the top of the page */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  /* Page title = project name, restored when leaving the page */
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousTitle = document.title;

    document.title = `${project.name} | Rishabh Pareek`;

    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  /* ---------- Unknown id ---------- */

  if (!project) {
    return (
      <section className="details-page details-missing">
        <p className="details-eyebrow">404 / project</p>

        <h1>Project not found</h1>

        <p className="details-lead">
          There is no project with the id &ldquo;{id}&rdquo;. It may have been
          renamed or removed.
        </p>

        <Link to="/projects" className="details-button details-button-primary">
          Back to Projects
        </Link>
      </section>
    );
  }

  /* ---------- Values worked out from the project (not state) ---------- */

  const code = projectCode[project.id];

  const sourceLines = code
    ? code.source.replace(/\s+$/, "").split(/\r?\n/).length
    : null;

  const hasLinks = Boolean(project.projectLink || project.githubLink);

  const projectLinkLabel = project.projectLinkLabel || "View project";

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article key={project.id} className="details-page">
      <nav aria-label="Breadcrumb">
        <Link to="/projects" className="details-back">
          <BackIcon />
          Back to Projects
        </Link>
      </nav>

      {/* ---------- Title, description, links + visual ---------- */}

      <section className="details-top">
        <header className="details-intro">
          <p className="details-number" aria-hidden="true">
            {formatNumber(projectIndex + 1)}
          </p>

          <p className="details-eyebrow">{project.category} project</p>

          <h1>{project.name}</h1>

          <p className="details-lead">{project.description}</p>

          <ul className="details-tech" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          {hasLinks && (
            <nav className="details-links" aria-label="Project links">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  className="details-button details-button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={projectLinkLabel + " (opens in a new tab)"}
                >
                  {projectLinkLabel}
                  <ExternalIcon />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="details-button details-button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub (opens in a new tab)"
                >
                  View on GitHub
                  <ExternalIcon />
                </a>
              )}
            </nav>
          )}

          {!hasLinks && code && (
            <p className="details-note">
              The full source code is shown further down this page.
            </p>
          )}
        </header>

        <figure className="details-stage">
          <ProjectVisual project={project} />

          <figcaption>
            Illustration made for this portfolio, not a screenshot.
          </figcaption>
        </figure>
      </section>

      {/* ---------- At a glance ---------- */}

      <ul className="details-facts details-reveal" aria-label="At a glance">
        <li>
          <small>Category</small>
          <strong>{project.category}</strong>
        </li>

        <li>
          <small>Technologies</small>
          <strong>{project.technologies.length}</strong>
        </li>

        <li>
          <small>Features</small>
          <strong>{project.features.length}</strong>
        </li>

        {sourceLines !== null && (
          <li>
            <small>Lines of code</small>
            <strong>{sourceLines}</strong>
          </li>
        )}
      </ul>

      {/* ---------- Features + how it works ---------- */}

      <section
        className={
          project.howItWorks ? "details-columns has-two" : "details-columns"
        }
      >
        <section
          className="details-panel details-reveal"
          aria-labelledby="features-title"
        >
          <h2 id="features-title">Features</h2>

          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {project.howItWorks && (
          <section
            className="details-panel details-reveal"
            aria-labelledby="how-title"
          >
            <h2 id="how-title">How it works</h2>

            <ol className="step-list">
              {project.howItWorks.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        )}
      </section>

      {/* ---------- Interactive demo (console projects only) ---------- */}

      <ProjectDemo key={project.id} visual={project.visual} />

      {/* ---------- Source code (console projects only) ---------- */}

      {code && (
        <CodeViewer
          key={project.id}
          fileName={code.fileName}
          source={code.source}
        />
      )}

      {/* ---------- Previous / next project ---------- */}

      <nav className="details-more details-reveal" aria-label="More projects">
        <Link
          to={`/project/${previousProject.id}`}
          className="details-more-link"
        >
          <small>Previous project</small>
          <strong>{previousProject.name}</strong>
        </Link>

        <Link
          to={`/project/${nextProject.id}`}
          className="details-more-link details-more-next"
        >
          <small>Next project</small>
          <strong>{nextProject.name}</strong>
        </Link>
      </nav>
    </article>
  );
}

export default ProjectDetails;

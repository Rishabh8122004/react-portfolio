/* ==================================================
   PROJECT LAB
   WEEK 4 REACT PORTFOLIO
================================================== */

import { useEffect, useState } from "react";
import projects from "../Data/projects.js";
import ProjectList from "./ProjectList.jsx";
import "../css_files/Projects.css";

const categories = ["All", "Web", "JavaScript", "React", "Other"];

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [quote, setQuote] = useState(null);
  const [quoteStatus, setQuoteStatus] = useState("loading");
  const [quoteRequest, setQuoteRequest] = useState(0);

  /*
    Runs on the first render, and again every time
    quoteRequest changes (the "Another quote" button).
  */
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/quotes/random", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }

        return response.json();
      })
      .then((data) => {
        setQuote(data);
        setQuoteStatus("success");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setQuoteStatus("error");
        }
      });

    return () => controller.abort();
  }, [quoteRequest]);

  const loadAnotherQuote = () => {
    setQuoteStatus("loading");
    setQuoteRequest((current) => current + 1);
  };

  const search = searchTerm.toLowerCase().trim();

  const filteredProjects = projects.filter((project) => {
    const searchableText = [
      project.name,
      project.description,
      project.category,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(search);

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <section className="projects-page">
      {/* ==================================================
          PROJECT LAB INTRO
      ================================================== */}

      <header className="projects-header">
        <p className="projects-eyebrow">
          PROJECT LAB / {String(projects.length).padStart(2, "0")} BUILDS
        </p>

        <h1>
          Projects that
          <br />
          <strong>made me build.</strong>
        </h1>

        <p className="projects-introduction">
          A collection of experiments, systems, games, interfaces, and
          problem-solving work &mdash; each one built to understand something
          rather than simply make something.
        </p>
      </header>

      {/* ==================================================
          PROJECT CONTROLS
      ================================================== */}

      <section className="project-filters">
        <header className="filter-header">
          <p>Explore the collection</p>

          <p className="project-count">
            {filteredProjects.length} of {projects.length} projects
          </p>
        </header>

        <label htmlFor="project-search">Find a project</label>

        <input
          type="search"
          id="project-search"
          placeholder="Try C++, DSA, JavaScript..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <nav className="category-filters" aria-label="Project categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>
      </section>

      {/* ==================================================
          PROJECT RESULTS
      ================================================== */}

      {filteredProjects.length > 0 ? (
        <ProjectList
          key={`${selectedCategory}-${search}`}
          projects={filteredProjects}
        />
      ) : (
        <section className="projects-empty-state">
          <p className="empty-state-number">00</p>

          <h2>No project found.</h2>

          <p>
            Nothing matches your current search and filter. Try another keyword
            or reset the collection.
          </p>

          <button type="button" onClick={clearFilters}>
            Reset exploration
          </button>
        </section>
      )}

      {/* ==================================================
          DEVELOPER QUOTE
      ================================================== */}

      <section className="developer-quote" aria-live="polite">
        <header>
          <p>From the developer</p>
        </header>

        {quoteStatus === "loading" && (
          <p>Finding something worth building...</p>
        )}

        {quoteStatus === "success" && quote && (
          <figure>
            <blockquote>&ldquo;{quote.quote}&rdquo;</blockquote>

            <figcaption>&mdash; {quote.author}</figcaption>
          </figure>
        )}

        {quoteStatus === "error" && (
          <p>The quote could not be loaded right now.</p>
        )}

        <button
          type="button"
          onClick={loadAnotherQuote}
          disabled={quoteStatus === "loading"}
        >
          Another quote
        </button>
      </section>
    </section>
  );
}

export default Projects;

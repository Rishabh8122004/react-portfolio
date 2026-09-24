/* ==================================================
   PROJECT LAB
   WEEK 4 REACT PORTFOLIO
================================================== */

import { useEffect, useState } from "react";
import { GitHubContributionGraph } from "github-contrib-graph/react";
import "github-contrib-graph/styles.css";
import projects from "../Data/projects.js";
import ProjectList from "./ProjectList.jsx";
import "../css_files/Projects.css";

const categories = ["All", "Web", "JavaScript", "React", "Other"];

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [githubData, setGithubData] = useState(null);
  const [githubStatus, setGithubStatus] = useState("loading");
  const [githubRequest, setGithubRequest] = useState(0);

  /*
    Runs on the first render, and again every time
    quoteRequest changes (the "Another quote" button).
  */
  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch("https://api.github.com/users/Rishabh8122004", {
        signal: controller.signal,
      }),
      fetch(
        "https://api.github.com/users/Rishabh8122004/repos?sort=updated&direction=desc&per_page=1",
        {
          signal: controller.signal,
        },
      ),
    ])
      .then(([profileResponse, reposResponse]) => {
        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        return Promise.all([profileResponse.json(), reposResponse.json()]);
      })
      .then(([profile, repositories]) => {
        setGithubData({
          profile,
          repository: repositories[0] || null,
        });

        setGithubStatus("success");
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setGithubStatus("error");
        }
      });

    return () => controller.abort();
  }, [githubRequest]);

  const refreshGitHubData = () => {
    setGithubStatus("loading");
    setGithubRequest((current) => current + 1);
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

      <section className="github-activity">
        {/* ==================================================
      GITHUB SNAPSHOT
  ================================================== */}

        <section className="developer-quote" aria-live="polite">
          <header>
            <p>GitHub snapshot</p>
          </header>

          {githubStatus === "loading" && <p>Loading live GitHub data...</p>}

          {githubStatus === "success" && githubData && (
            <figure>
              <blockquote>
                Repositories: {githubData.profile.public_repos}
                <br />
                Followers: {githubData.profile.followers}
                <br />
                Following: {githubData.profile.following}
                <br />
                Latest build:{" "}
                {githubData.repository
                  ? githubData.repository.name
                  : "No public repository found"}
              </blockquote>

              <figcaption>
                {githubData.repository
                  ? `★ ${githubData.repository.stargazers_count} · Forks ${githubData.repository.forks_count} · ${githubData.repository.language || "Mixed technologies"}`
                  : "GitHub profile data loaded"}
              </figcaption>
            </figure>
          )}

          {githubStatus === "error" && (
            <p>GitHub data could not be loaded right now.</p>
          )}

          <button
            type="button"
            onClick={refreshGitHubData}
            disabled={githubStatus === "loading"}
          >
            Refresh GitHub data
          </button>
        </section>

        {/* ==================================================
      CONTRIBUTION HEATMAP
  ================================================== */}

        <section className="github-heatmap">
          <header>
            <p>Contribution activity</p>
          </header>

          <div className="github-heatmap-frame">
            <GitHubContributionGraph
              username="Rishabh8122004"
              theme="midnight"
            />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Projects;

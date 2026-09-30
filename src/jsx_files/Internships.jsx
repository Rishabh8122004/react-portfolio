import { useEffect, useState } from "react";
import "../css_files/Internships.css";

// Backend address comes from .env.local (Vite only exposes variables starting with VITE_).
const API_URL = import.meta.env.VITE_API_URL;

function Internships() {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(API_URL));
  const [error, setError] = useState(
    API_URL
      ? ""
      : "VITE_API_URL is not set. Add it to .env.local and restart the dev server.",
  );
  // Changing this number re-runs the fetch effect (used by the "Try again" button).
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!API_URL) return;

    // Lets us cancel the request if the user leaves the page before it finishes.
    const controller = new AbortController();

    async function loadInternships() {
      try {
        const response = await fetch(`${API_URL}/api/internships`, {
          signal: controller.signal,
        });
        const result = await response.json();

        // fetch() only throws on network problems. A 404 or 500 still "succeeds",
        // so we check the status ourselves.
        if (!response.ok || !result.success) {
          throw new Error(result.message || "Request failed");
        }

        setInternships(result.data);
        setError("");
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return;

        // A TypeError means the request never got a response
        // (backend not running, wrong address, or blocked by CORS).
        setError(
          err instanceof TypeError
            ? "Could not reach the server. Check that the backend is running and that CORS allows this site."
            : err.message,
        );
        setIsLoading(false);
      }
    }

    loadInternships();

    // Cleanup: cancel the request when the component unmounts or the effect re-runs.
    return () => controller.abort();
  }, [reloadCount]);

  function handleRetry() {
    setError("");
    setIsLoading(true);
    setReloadCount(reloadCount + 1);
  }

  return (
    <section className="internships-page">
      <header className="internships-header">
        <p>Live data from the Express API</p>
        <h1>Internships</h1>
      </header>

      <aside className="internships-demo-notice">
        <strong>Sample / Demo Data — Not Personal Experience</strong>
        <p>
          Only the InternNova Full Stack Web Development Internship represents
          my actual professional experience. Other entries shown here are sample
          data used to demonstrate this application's backend/API functionality.
        </p>
      </aside>
      {/* LOADING state */}
      {isLoading && (
        <p className="internships-message" role="status">
          Loading internships...
        </p>
      )}

      {/* ERROR state */}
      {!isLoading && error && (
        <section className="internships-message internships-error" role="alert">
          <p>{error}</p>
          {API_URL && (
            <button type="button" onClick={handleRetry}>
              Try again
            </button>
          )}
        </section>
      )}

      {/* EMPTY state (request worked, but there is no data) */}
      {!isLoading && !error && internships.length === 0 && (
        <p className="internships-message">No internships available yet.</p>
      )}

      {/* SUCCESS state */}
      {!isLoading && !error && internships.length > 0 && (
        <>
          <p className="internships-count">
            {internships.length} internships found
          </p>

          <ul className="internships-list">
            {internships.map((internship) => (
              <li key={internship.id}>
                <article className="internship-card">
                  <header className="internship-card-header">
                    <h2>{internship.title}</h2>
                    <p
                      className={
                        internship.status === "Open"
                          ? "internship-status is-open"
                          : "internship-status is-closed"
                      }
                    >
                      {internship.status}
                    </p>
                  </header>

                  <p className="internship-meta">
                    {internship.domain} · {internship.mode} ·{" "}
                    {internship.duration}
                  </p>

                  <p className="internship-description">
                    {internship.description}
                  </p>

                  {internship.skillsRequired.length > 0 && (
                    <ul
                      className="internship-skills"
                      aria-label="Skills required"
                    >
                      {internship.skillsRequired.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Internships;

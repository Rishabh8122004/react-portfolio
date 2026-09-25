import '../css_files/Education.css'

function Education() {
  return (
    <section className="education-page">
      <div className="education-container">

        <header className="education-header">
          <p className="education-eyebrow">Academic Journey</p>

          <h1>Education</h1>

          <p className="education-intro">
            A snapshot of my academic background, learning journey,
            and the technical areas I am currently exploring.
          </p>
        </header>

        <div className="education-grid">

          {/* Schooling */}
          <article className="education-card schooling-card">
            <div className="education-card-number">01</div>

            <div className="education-card-content">
              <p className="education-card-label">Schooling</p>

              <h2>Secondary Education</h2>

              <p className="education-institution">
                Govt. Sr. Sec. School, Rajendra Marg
              </p>

              <p className="education-location">
                Bhilwara, Rajasthan · Passed out in 2021
              </p>

              <div className="education-results">
                <div className="result-item">
                  <span>10th Grade</span>
                  <strong>79.83%</strong>
                </div>

                <div className="result-item">
                  <span>12th Grade</span>
                  <strong>90.02%</strong>
                </div>
              </div>
            </div>
          </article>

          {/* Degree */}
          <article className="education-card degree-card">
            <div className="education-card-number">02</div>

            <div className="education-card-content">
              <p className="education-card-label">Current Degree</p>

              <h2>B.Tech — CSE (IoT)</h2>

              <p className="education-institution">
                Computer Science & Engineering (IoT)
              </p>

              <p className="education-location">
                MLV Textile & Engineering College, Bhilwara
              </p>

              <p className="education-description">
                Pursuing a Bachelor of Technology with a focus on
                Computer Science fundamentals, programming, and
                practical technology development.
              </p>

              <div className="degree-meta">
                <span>
                  <strong>Expected completion</strong>
                  2027
                </span>

                <span>
                  <strong>CGPA till 5th semester</strong>
                  7.748 / 10
                </span>
              </div>

              <a
                href="https://mlvti.ac.in/web/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="education-link"
              >
                Visit MLVTEC
                <span>↗</span>
              </a>
            </div>
          </article>

          {/* Completed learning */}
          <article className="education-card learning-card">
            <div className="education-card-number">03</div>

            <div className="education-card-content">
              <p className="education-card-label">Completed Learning</p>

              <h2>Data Structures & Algorithms</h2>

              <p className="education-description">
                Completed structured learning in Data Structures
                and Algorithms while developing problem-solving
                and programming skills.
              </p>

              <a
                href={`${import.meta.env.BASE_URL}image/Data_Structure_certificate.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="education-link certificate-link"
              >
                View Certificate
                <span>↗</span>
              </a>
            </div>
          </article>

          {/* Current learning */}
          <article className="education-card current-card">
            <div className="education-card-number">04</div>

            <div className="education-card-content">
              <p className="education-card-label">Currently Exploring</p>

              <h2>Building Beyond Academics</h2>

              <div className="learning-list">
                <div className="learning-item">
                  <span className="learning-dot"></span>
                  <div>
                    <strong>Full Stack Web Development</strong>
                    <p>
                      Building practical applications using modern
                      frontend and backend technologies.
                    </p>
                  </div>
                </div>

                <div className="learning-item">
                  <span className="learning-dot"></span>
                  <div>
                    <strong>Core Computer Science</strong>
                    <p>
                      COA, Compiler Design, Operating Systems,
                      DBMS, and other foundational subjects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>

        <div className="education-footer-note">
          <span className="education-line"></span>

          <p>
            Learning is an ongoing process — academics provide the
            foundation, while projects turn that knowledge into practice.
          </p>

          <span className="education-line"></span>
        </div>

      </div>
    </section>
  )
}

export default Education
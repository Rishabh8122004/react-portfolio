import Hero from './Hero.jsx'
import Footer from './Footer.jsx'
import '../css_files/Home.css'

function Home() {
  return (
    <>
      <Hero />

      <section className="home-intro">
        <h2>Welcome to my portfolio</h2>
        <p>
          I am Rishabh Pareek, a Computer Science & Engineering (IoT) student
          interested in software development, problem solving, and technology.
        </p>
      </section>

      <Footer />
    </>
  )
}

export default Home
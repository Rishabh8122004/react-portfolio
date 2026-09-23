import { Routes, Route } from 'react-router-dom'

import Navbar from './jsx_files/Navbar.jsx'
import Footer from './jsx_files/Footer.jsx'
import Home from './jsx_files/Home.jsx'
import About from './jsx_files/About.jsx'
import Projects from './jsx_files/Projects.jsx'
import Contact from './jsx_files/Contact.jsx'
import ProjectDetails from './jsx_files/ProjectDetails.jsx'
import NotFound from './jsx_files/NotFound.jsx'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
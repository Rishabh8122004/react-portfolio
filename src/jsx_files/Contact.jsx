import ContactForm from './ContactForm.jsx'
import '../css_files/Contact.css'

function Contact() {
  return (
    <section className="contact-page">
      <header className="contact-header">
        <p>Let's connect</p>
        <h1>Contact Me</h1>
        <p>
          Have a question or want to connect? Feel free to send me a message.
        </p>
      </header>

      <ContactForm />
    </section>
  )
}

export default Contact
import { useState } from 'react'
import '../css_files/ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: '',
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })

    setErrors({
      ...errors,
      [name]: '',
    })

    setSuccess('')
  }

  function validateForm() {
    const newErrors = {}

    if (formData.name.trim() === '') {
      newErrors.name = 'Please enter your full name.'
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (
      formData.phone.trim() !== '' &&
      !/^[0-9]{10}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (formData.subject.trim() === '') {
      newErrors.subject = 'Please enter a subject.'
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Please enter a message.'
    }

    if (formData.contactMethod === '') {
      newErrors.contactMethod =
        'Please select a preferred contact method.'
    }

    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccess('')
      return
    }

    setErrors({})
    setSuccess('Your message has been submitted successfully!')

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: '',
    })
  }

  function handleReset() {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: '',
    })

    setErrors({})
    setSuccess('')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name:</label>

      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {errors.name && (
        <small className="form-error">{errors.name}</small>
      )}

      <label htmlFor="email">Email:</label>

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {errors.email && (
        <small className="form-error">{errors.email}</small>
      )}

      <label htmlFor="phone">Phone Number:</label>

      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      {errors.phone && (
        <small className="form-error">{errors.phone}</small>
      )}

      <label htmlFor="subject">Subject:</label>

      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />

      {errors.subject && (
        <small className="form-error">{errors.subject}</small>
      )}

      <label htmlFor="message">Message:</label>

      <textarea
        id="message"
        name="message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
      />

      {errors.message && (
        <small className="form-error">{errors.message}</small>
      )}

      <fieldset className="contact-method">
        <legend>Preferred Contact Method:</legend>

        <label>
          <input
            type="radio"
            name="contactMethod"
            value="email"
            checked={formData.contactMethod === 'email'}
            onChange={handleChange}
          />
          Email
        </label>

        <label>
          <input
            type="radio"
            name="contactMethod"
            value="phone"
            checked={formData.contactMethod === 'phone'}
            onChange={handleChange}
          />
          Phone
        </label>
      </fieldset>

      {errors.contactMethod && (
        <small className="form-error">
          {errors.contactMethod}
        </small>
      )}

      <section className="form-actions">
        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </section>

      {success && (
        <small className="form-success">{success}</small>
      )}
    </form>
  )
}

export default ContactForm

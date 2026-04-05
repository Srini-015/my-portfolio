import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaEnvelope,
  FaPaperPlane,
  FaPhoneAlt,
  FaDownload,
} from 'react-icons/fa'

const resumeUrl = '/sri1.pdf'

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'srinivasan55758@gmail.com',
    href: 'mailto:srinivasan55758@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '9361471869',
    href: 'tel:+919361471869',
  },
  {
    icon: FaCode,
    label: 'LeetCode',
    value: 'leetcode.com/u/Srini15',
    href: 'https://leetcode.com/u/Srini15/',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('')

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || 'there').trim()
    const email = String(formData.get('email') || 'srinivasan55758@gmail.com').trim()
    const message = String(formData.get('message') || '').trim()

    if (!message) {
      setStatus('Please add a message before sending.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'A visitor'}`)
    const body = encodeURIComponent(`Name: ${name || 'Not provided'}\nEmail: ${email}\n\n${message}`)
    const mailtoUrl = `mailto:srinivasan55758@gmail.com?subject=${subject}&body=${body}`

    try {
      await navigator.clipboard.writeText(
        `To: srinivasan55758@gmail.com\nSubject: Portfolio inquiry from ${name || 'A visitor'}\n\nName: ${name || 'Not provided'}\nEmail: ${email}\n\n${message}`,
      )
      window.location.href = mailtoUrl
      setStatus('Message ready. Your email app should open, and the message is copied as a fallback.')
      event.currentTarget.reset()
    } catch {
      window.location.href = mailtoUrl
      setStatus('Message ready. If your email app does not open, copy the details manually.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Contact</p>
          <h2 className="section__title">Reach out for internships, projects, or collaboration.</h2>
          <p className="section__lead">
            If you want to discuss full stack work, placement prep tools, or a role that values practical
            problem-solving, use the links below.
          </p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="card contact__panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3>Quick links</h3>
            <p className="contact__intro">
              Email, phone, and LeetCode are the fastest ways to reach me.
            </p>

            <div className="contact__list">
              {contactItems.map((item) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                const wrapperProps = item.href ? { href: item.href } : {}

                return (
                  <Wrapper key={item.label} className="contact__item" {...wrapperProps}>
                    <span className="contact__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.value}</small>
                    </span>
                  </Wrapper>
                )
              })}
            </div>

            <a className="btn btn--ghost" href={resumeUrl} download="Srinivasan_T_Resume.pdf">
              Download resume
              <FaDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.form
            className="card contact__form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me what you're building."
                required
              />
            </div>

            <button className="btn btn--primary" type="submit">
              Send message
              <FaPaperPlane aria-hidden="true" />
            </button>

            <p className={`contact__status ${status ? 'contact__status--show' : ''}`}>
              {status || 'The form opens your mail app and copies the message as a fallback.'}
            </p>

            <p className="contact__note">
              This opens a prefilled email draft to the resume email address.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

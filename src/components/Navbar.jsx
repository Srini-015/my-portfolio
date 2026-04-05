import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const resumeUrl = '/sri1.pdf'

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="container navbar__inner">
        <a className="brand" href="#home" aria-label="Go to top of page">
          <span className="brand__mark">ST</span>
          <span className="brand__copy">
            <strong>Srinivasan T</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <nav className="navlinks" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--small"
          href={resumeUrl}
          download="Srinivasan_T_Resume.pdf"
        >
          Download Resume
          <FaDownload aria-hidden="true" />
        </a>
      </div>
    </motion.header>
  )
}

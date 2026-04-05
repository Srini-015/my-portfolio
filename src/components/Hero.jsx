import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaReact,
  FaStar,
} from 'react-icons/fa'
import heroImage from '../assets/hero.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const resumeUrl = '/sri1.pdf'

const stats = [
  { value: 'B.Tech', label: 'Information Technology' },
  { value: '7.90', label: 'CGPA at Adhi College' },
  { value: '2022-2026', label: 'Current study period' },
]

const highlights = [
  'Motivated full stack developer with frontend and backend knowledge.',
  'Interested in building scalable web applications and solving real-world software problems.',
  'Projects include OpenRank and Campus Cracker, plus strong fundamentals in Java, React, Node.js, and SQL.',
]

const socialLinks = [
  {
    href: 'mailto:srinivasan55758@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
  },
  {
    href: 'tel:+919361471869',
    label: 'Phone',
    icon: FaPhoneAlt,
  },
  {
    href: 'https://leetcode.com/u/Srini15/',
    label: 'LeetCode',
    icon: FaCode,
  },
]

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span className="eyebrow hero__eyebrow" variants={item}>
            <FaStar aria-hidden="true" />
            Available for full stack roles and internships
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            Srinivasan T
            <span>Building practical web apps with React and Node.js.</span>
          </motion.h1>

          <motion.p className="hero__summary" variants={item}>
            Motivated full stack developer with frontend and backend knowledge, interested in developing scalable
            web applications and solving real-world software problems.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a className="btn btn--primary" href="#projects">
              View projects
              <FaArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href={resumeUrl} download="Srinivasan_T_Resume.pdf">
              Download resume
              <FaDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                className="icon-link"
                href={href}
                aria-label={label}
                target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noreferrer'}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </motion.div>

          <motion.div className="hero__stats" variants={item}>
            {stats.map((stat) => (
              <article key={stat.label} className="card metric">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="card hero__portrait">
            <span className="hero__chip">Resume snapshot</span>
            <img
              src={heroImage}
              alt="Abstract portfolio illustration"
              className="hero__image"
            />
          </div>

          <div className="card hero__panel">
            <div className="hero__panel-head">
              <p className="eyebrow">Quick summary</p>
              <h2>Frontend, backend, and problem-solving in one profile.</h2>
            </div>

            <ul className="hero__highlights">
              {highlights.map((highlight, index) => (
                <li key={highlight}>
                  <span>{`0${index + 1}`}</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="hero__framework">
              <FaReact aria-hidden="true" />
              Java, JavaScript, HTML, CSS, React.js, Node.js, SQL, Git, GitHub, and VS Code.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

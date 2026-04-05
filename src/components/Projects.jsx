import { motion } from 'framer-motion'
import {
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa'

const resumeUrl = '/sri1.pdf'

const projects = [
  {
    title: 'OpenRank',
    year: 'Open Source Contribution Tracker',
    type: 'Full stack project',
    description:
      'Built a full stack web application that tracks GitHub contributions, includes GitHub OAuth login, and shows a contribution analytics dashboard with a developer ranking system based on activity.',
    tags: ['GitHub OAuth', 'Analytics', 'Ranking system'],
    accent: 'project-card__art--one',
    previewTitle: 'Contribution dashboard',
    previewItems: ['GitHub sign-in', 'Activity ranking', 'Developer analytics'],
    bars: [76, 54, 91, 68],
    stats: [
      { icon: FaGithub, label: 'Auth', value: 'OAuth' },
      { icon: FaChartLine, label: 'Data', value: 'Live charts' },
      { icon: FaUsers, label: 'Focus', value: 'Ranking' },
    ],
  },
  {
    title: 'Campus Cracker',
    year: 'Placement Preparation Platform',
    type: 'Student practice app',
    description:
      'Developed a web application that helps students practice aptitude questions and organized company-based question collections for placement preparation.',
    tags: ['Aptitude prep', 'Question bank', 'Placement'],
    accent: 'project-card__art--two',
    previewTitle: 'Placement prep workspace',
    previewItems: ['Aptitude sets', 'Company collections', 'Study progress'],
    bars: [44, 72, 58, 84],
    stats: [
      { icon: FaCode, label: 'Mode', value: 'Practice' },
      { icon: FaCheckCircle, label: 'Structure', value: 'Curated' },
      { icon: FaUsers, label: 'Goal', value: 'Placement' },
    ],
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut',
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Projects</p>
          <h2 className="section__title">The two projects highlighted in the resume.</h2>
          <p className="section__lead">
            OpenRank shows full stack and analytics work, while Campus Cracker focuses on helpful practice tools
            for placement preparation. Each card now has an animated preview panel so the section feels more visual.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="card project-card"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className={`project-card__art ${project.accent}`}>
                <motion.div
                  className="project-card__orb project-card__orb--one"
                  animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                  transition={{ ...floatTransition, delay: 0.15 }}
                />
                <motion.div
                  className="project-card__orb project-card__orb--two"
                  animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                  transition={{ ...floatTransition, delay: 0.4 }}
                />

                <div className="project-card__mockup">
                  <div className="project-card__mockup-top">
                    <div className="project-card__lights" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="project-card__mockup-label">{project.type}</span>
                  </div>

                  <div className="project-card__mockup-body">
                    <div className="project-card__mockup-copy">
                      <p className="project-card__mockup-kicker">{project.year}</p>
                      <h3>{project.previewTitle}</h3>
                      <ul className="project-card__mockup-list">
                        {project.previewItems.map((itemName) => (
                          <li key={itemName}>
                            <FaCheckCircle aria-hidden="true" />
                            {itemName}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-card__mockup-visual">
                      <div className="project-card__chart" aria-hidden="true">
                        {project.bars.map((bar, index) => (
                          <motion.span
                            key={`${project.title}-${bar}-${index}`}
                            className="project-card__bar"
                            style={{ height: `${bar}%` }}
                            initial={{ opacity: 0, scaleY: 0.55 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.3 }}
                          />
                        ))}
                      </div>

                      <div className="project-card__stats">
                        {project.stats.map(({ icon: Icon, label, value }) => (
                          <div key={label} className="project-card__stat">
                            <Icon aria-hidden="true" />
                            <span>{label}</span>
                            <strong>{value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card__meta">
                <h3>{project.title}</h3>
                <span>{project.year}</span>
              </div>

              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="projects__footer">
          <a className="btn btn--primary" href={resumeUrl} download="Srinivasan_T_Resume.pdf">
            Download resume
            <FaDownload aria-hidden="true" />
          </a>
          <a
            className="btn btn--ghost"
            href="https://leetcode.com/u/Srini15/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode profile
            <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

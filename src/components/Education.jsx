import { motion } from 'framer-motion'
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'

const timeline = [
  {
    year: '2022 - 2026',
    title: 'B.Tech - Information Technology',
    place: 'Adhi College of Engineering and Technology, Chennai',
    details: 'CGPA: 7.90',
  },
  {
    year: '2021 - 2022',
    title: 'Higher Secondary Certificate (HSC)',
    place: 'Government Boys Higher Secondary School',
    details: 'Percentage: 72%',
  },
  {
    year: '2019 - 2020',
    title: 'Secondary School Leaving Certificate (SSLC)',
    place: 'Government High School',
    details: 'Percentage: 84%',
  },
]

const certifications = [
  'AI Fluency - Naan Mudhalvan',
  'SQL Basics - Great Learning',
  'Microsoft Office Certification - Naan Mudhalvan',
]

const hobbies = ['Listening to Music', 'Traveling']

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Education</p>
          <h2 className="section__title">Academic background and certifications from the resume.</h2>
          <p className="section__lead">
            The timeline below shows the formal education path, followed by certifications and personal interests
            pulled from the same resume.
          </p>
        </div>

        <ol className="education__timeline">
          {timeline.map((entry) => (
            <motion.li
              key={entry.title}
              className="card education__item"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="education__meta">
                <span className="education__year">
                  <FaCalendarAlt aria-hidden="true" />
                  {entry.year}
                </span>
                <span className="education__badge">
                  <FaGraduationCap aria-hidden="true" />
                  Education
                </span>
              </div>

              <h3>{entry.title}</h3>
              <p className="education__place">{entry.place}</p>
              <p>{entry.details}</p>
            </motion.li>
          ))}
        </ol>

        <div className="education__extras">
          <article className="card education__note">
            <p className="education__kicker">Certifications</p>
            <ul className="skill-chip-list">
              {certifications.map((certification) => (
                <li key={certification} className="skill-chip">
                  {certification}
                </li>
              ))}
            </ul>
          </article>

          <article className="card education__note">
            <p className="education__kicker">Hobbies</p>
            <ul className="skill-chip-list">
              {hobbies.map((hobby) => (
                <li key={hobby} className="skill-chip">
                  {hobby}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

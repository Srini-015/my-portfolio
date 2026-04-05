import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaServer, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa'

const groups = [
  {
    icon: FaCode,
    title: 'Programming',
    items: ['Java', 'JavaScript'],
  },
  {
    icon: FaLaptopCode,
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React.js'],
  },
  {
    icon: FaServer,
    title: 'Backend, database, and tools',
    items: ['Node.js', 'SQL', 'Git', 'GitHub', 'VS Code'],
  },
]

const softSkills = [
  {
    icon: FaLightbulb,
    label: 'Problem solving',
  },
  {
    icon: FaUsers,
    label: 'Teamwork',
  },
  {
    icon: FaAward,
    label: 'Leadership',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Technical Skills</p>
          <h2 className="section__title">A focused stack for building real web apps.</h2>
          <p className="section__lead">
            These are the technologies and work habits highlighted in the resume: Java, JavaScript, React.js,
            Node.js, SQL, Git, GitHub, and VS Code, supported by strong collaboration habits.
          </p>
        </div>

        <div className="skills__grid">
          {groups.map((group) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                className="card skill-card"
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="skill-card__head">
                  <div className="skill-card__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{group.title}</h3>
                    <p>Core tools and languages from the resume.</p>
                  </div>
                </div>

                <ul className="skill-chip-list">
                  {group.items.map((itemName) => (
                    <li key={itemName} className="skill-chip">
                      {itemName}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <div className="skill-mini-grid">
          {softSkills.map((skill) => {
            const Icon = skill.icon

            return (
              <article key={skill.label} className="card skill-mini-card">
                <Icon aria-hidden="true" />
                <span>{skill.label}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

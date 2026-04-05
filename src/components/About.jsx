import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaFlag } from 'react-icons/fa'

const cards = [
  {
    icon: FaLightbulb,
    title: 'Problem solving',
    description:
      'I enjoy breaking down software problems into clear, practical features that can be shipped and improved.',
  },
  {
    icon: FaUsers,
    title: 'Teamwork',
    description:
      'I work well across frontend, backend, and project teams, and I’m comfortable collaborating to move things forward.',
  },
  {
    icon: FaFlag,
    title: 'Leadership',
    description:
      'I like taking ownership, keeping momentum steady, and making sure tasks are carried through to completion.',
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Career Objective</p>
          <h2 className="section__title">
            Motivated full stack developer with frontend and backend knowledge.
          </h2>
          <p className="section__lead">
            Interested in developing scalable web applications and solving real-world software problems.
            Outside of coding, I also enjoy listening to music and traveling.
          </p>
        </div>

        <div className="about__grid">
          {cards.map((card) => {
            const Icon = card.icon

            return (
              <motion.article
                key={card.title}
                className="card about__card"
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="about__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

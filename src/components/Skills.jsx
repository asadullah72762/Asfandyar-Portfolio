import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: ['Flutter', 'Dart', 'Android', 'iOS'],
      color: 'cyan'
    },
    {
      title: 'Programming',
      icon: '💻',
      skills: ['C++', 'Java', 'Dart', 'OOP'],
      color: 'blue'
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
      color: 'purple'
    },
    {
      title: 'Tools & Integration',
      icon: '🔧',
      skills: ['Git', 'GitHub', 'REST APIs', 'Google Maps'],
      color: 'pink'
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header centered"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider centered" />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="skill-card"
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + idx * 0.1 }}
                    className="skill-item"
                  >
                    <div className={`skill-bar ${category.color}`} />
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

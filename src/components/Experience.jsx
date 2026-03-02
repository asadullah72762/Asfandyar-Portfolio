import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'ProTech Code Park',
      role: 'Senior Flutter Developer & Team Lead',
      period: '2023 — Present',
      description: 'Leading a team of mobile developers, architecting scalable Flutter applications, mentoring junior developers, and delivering production apps across healthcare, agriculture, and social platforms.',
      highlights: ['Team Leadership', 'Architecture Design', 'Code Reviews', 'Client Communication']
    },
    {
      company: 'Khyber Coded',
      role: 'Android Developer',
      period: '2021 — 2022',
      description: 'Developed native Android applications using Java, implemented REST API integrations, and created responsive user interfaces for marketplace applications.',
      highlights: ['Android Development', 'Java', 'API Integration', 'UI Implementation']
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="timeline-wrapper">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="timeline-content">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="timeline-item"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="timeline-dot"
                />

                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-info">
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                    <div className="experience-period">{exp.period}</div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

const Leadership = () => {
  const achievements = [
    {
      icon: '👥',
      title: 'Team Leadership',
      description: 'Leading a team of 10+ developers, conducting code reviews, and establishing best practices for mobile development.'
    },
    {
      icon: '🎓',
      title: 'Teaching & Mentorship',
      description: 'Teaching programming fundamentals and mobile development to aspiring developers, creating course materials and conducting workshops.'
    },
    {
      icon: '🏆',
      title: 'Technical Excellence',
      description: 'Architecting scalable solutions, implementing CI/CD pipelines, and maintaining 99.9% app stability across all projects.'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Contributing to open-source projects, sharing knowledge through technical blogs, and organizing developer meetups.'
    },
  ];

  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Leadership & Teaching</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="achievement-card"
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

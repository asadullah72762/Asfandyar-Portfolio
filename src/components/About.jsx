import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Apps Created' },
    { number: '6+', label: 'Active App' },
    { number: '10+', label: 'Team Members Led' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-content"
          >
            <p className="about-text">
              As a <span className="highlight">Computer Science Graduate</span> and 
              <span className="highlight"> Flutter Specialist</span>, I've dedicated my career to crafting 
              exceptional cross-platform mobile experiences that users love.
            </p>
            <p className="about-text">
              My expertise lies in building <span className="highlight">high-performance mobile applications</span> that 
              serve real-world needs across healthcare, e-commerce, agriculture, and social platforms. I focus obsessively on 
              <span className="highlight"> user experience</span>, ensuring every interaction feels native and polished.
            </p>
            <p className="about-text">
              Beyond code, I'm passionate about <span className="highlight">leading teams</span> and 
              <span className="highlight"> mentoring developers</span>. I believe in sharing knowledge and 
              elevating the entire engineering community through teaching and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="stats-grid"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

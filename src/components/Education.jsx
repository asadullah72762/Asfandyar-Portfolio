import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="education-card"
        >
          <div className="education-icon-wrapper">
            <div className="education-icon">
              <svg 
                className="icon-svg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 14l9-5-9-5-9 5 9 5z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
                />
              </svg>
            </div>
          </div>
          <div className="education-content">
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <p className="education-institution">University Graduate</p>
            <p className="education-description">
              Comprehensive study in computer science fundamentals, software engineering principles, 
              data structures, algorithms, and mobile application development. Built a strong foundation 
              in programming languages including C++, Java, and modern mobile frameworks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

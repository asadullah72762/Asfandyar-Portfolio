import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Echo Medical Center',
      category: 'Healthcare',
      description: 'Comprehensive medical platform connecting patients with healthcare providers, featuring appointment scheduling, telemedicine, and patient records management.',
      tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],
      gradient: 'cyan'
    },
    {
      title: 'Agrileader',
      category: 'Agriculture Tech',
      description: 'Smart agriculture management system helping farmers optimize crop yields with weather integration, pest alerts, and market price tracking.',
      tech: ['Flutter', 'Google Maps', 'Weather API', 'Real-time Data'],
      gradient: 'green'
    },
    {
      title: 'Wondermate',
      category: 'Social Platform',
      description: 'Interactive social networking app with real-time messaging, media sharing, and community features for enhanced user engagement.',
      tech: ['Flutter', 'Firebase', 'Cloud Messaging', 'Media Upload'],
      gradient: 'purple'
    },
    {
      title: 'EdenaSpace',
      category: 'E-Learning',
      description: 'Educational platform delivering courses, quizzes, and interactive learning experiences with progress tracking and certifications.',
      tech: ['Flutter', 'Video Streaming', 'SQLite', 'Payment Gateway'],
      gradient: 'blue'
    },
    {
      title: 'Online Buy & Sell App',
      category: 'Marketplace',
      description: 'Full-featured marketplace enabling users to buy and sell products with advanced search, chat, and secure payment integration.',
      tech: ['Flutter', 'REST API', 'In-app Chat', 'Payment Integration'],
      gradient: 'orange'
    },
    {
      title: 'T20 App',
      category: 'Sports & Entertainment',
      description: 'Live cricket score tracking app with match schedules, player statistics, and real-time notifications for cricket enthusiasts.',
      tech: ['Flutter', 'Live Data API', 'Push Notifications', 'Data Visualization'],
      gradient: 'yellow'
    },
    {
      title: 'Wholesale Marketplace',
      category: 'B2B Platform',
      description: 'Android-based wholesale trading platform connecting suppliers with retailers, featuring bulk ordering and inventory management.',
      tech: ['Java', 'Android', 'MySQL', 'API Integration'],
      gradient: 'gray'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header centered"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider centered" />
          <p className="section-description">
            Production-grade applications serving thousands of users across various industries
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="project-card"
            >
              <div className={`project-category ${project.gradient}`}>
                {project.category}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

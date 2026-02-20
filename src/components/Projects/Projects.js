import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './Projects.scss';

const Projects = ({ language }) => {
  const [filter, setFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Portafolio Danel',
      description:
        language === 'es'
          ? 'Portafolio moderno y responsive para Danel, enfocado en presentar sus servicios y proyectos con una UI limpia y profesional.'
          : 'Modern and responsive portfolio for Danel, focused on showcasing services and projects with a clean, professional UI.',
      image: '/imgs/danel 1.png',
      category: 'web',
      technologies: ['React', 'Vite', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Fuljoq/Portafolio-danel',
      demo: 'https://portafolio-danel.vercel.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Masajes Marsela Rosso',
      description:
        language === 'es'
          ? 'Sitio web para un negocio de masajes y bienestar, optimizado para SEO local y pensado para captar clientes potenciales.'
          : 'Website for a massage and wellness business, optimized for local SEO and designed to attract potential clients.',
      image: '/imgs/Marsela-nueva.jpg',
      category: 'web',
      technologies: ['React', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Joaquin-Orlandau-Rosso/Nueva-pagina-marsela',
      demo: 'https://marselarosso.vercel.app/',
      featured: false,
    },
    {
      id: 2,
      title: 'María AstroCoach',
      description:
        language === 'es'
          ? 'Landing page para una coach espiritual y astróloga, con enfoque en conversión, reservas y presentación clara de servicios.'
          : 'Landing page for a spiritual coach and astrologer, focused on conversion, bookings and a clear presentation of services.',
      image: '/imgs/mariasastrocoach.png',
      category: 'web',
      technologies: ['React', 'Styled Components', 'Netlify'],
      github: 'https://github.com/Fuljoq/MariaAstroCoach',
      demo: 'https://mariaastrocoach.netlify.app/',
      featured: false,
    },
  ];

  const categories = [
    { id: 'todos', label: language === 'es' ? 'Todos' : 'All' },
    { id: 'web', label: 'Web' },
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? 'Algunos de mis trabajos más destacados'
              : 'Some of my most notable work'}
          </p>
        </motion.div>

        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            layout
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="overlay-btn" aria-label="View Project">
                      <FaEye />
                    </button>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">
                      {language === 'es' ? 'Destacado' : 'Featured'}
                    </span>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                <div className="modal-image">
                  <iframe
                    src={selectedProject.demo}
                    title={selectedProject.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
                <div className="modal-body">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                  <div className="modal-tech">
                    <h4>Tecnologías Utilizadas:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-links">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FaGithub /> Ver Código
                    </a>
                    <a 
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Ver Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

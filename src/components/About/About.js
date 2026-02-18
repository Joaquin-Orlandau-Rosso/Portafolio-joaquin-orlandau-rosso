import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket, FaCoffee } from 'react-icons/fa';
import CountUp from 'react-countup';
import cvPdf from './CV Joaquin Orlandau Rosso Actual.pdf';
import './About.scss';

const About = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: 2,
      label: language === 'es' ? 'Años de Experiencia' : 'Years of Experience',
      suffix: '+',
    },
    {
      number: 6,
      label: language === 'es' ? 'Proyectos Realizados' : 'Projects Completed',
      suffix: '',
    },
    {
      number: 6,
      label: language === 'es' ? 'Clientes Satisfechos' : 'Happy Clients',
      suffix: '',
    },
    {
      number: 10,
      label: language === 'es' ? 'Tecnologías Dominadas' : 'Technologies Mastered',
      suffix: '',
    },
  ];

  const interests = [
    { icon: <FaCode />, title: 'Clean Code', description: 'Escribir código limpio y mantenible' },
    { icon: <FaLaptopCode />, title: 'Nuevas Tecnologías', description: 'Aprender constantemente' },
    { icon: <FaRocket />, title: 'Innovación', description: 'Crear soluciones creativas' },
    { icon: <FaCoffee />, title: 'Trabajo en Equipo', description: 'Colaboración efectiva' },
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Sobre Mí' : 'About Me'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? 'Conoce más sobre mi trayectoria y pasión por el desarrollo'
              : 'Learn more about my journey and passion for development'}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img src="/imgs/imagen%20mejor.png" alt="Foto sobre mí" />
              <div className="image-overlay"></div>
              <div className="image-frame"></div>
            </div>
            
            <div className="floating-card">
              <FaRocket className="card-icon" />
              <div>
                <h4>2+ {language === 'es' ? 'Años' : 'Years'}</h4>
                <p>{language === 'es' ? 'De Experiencia' : 'Of Experience'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>{language === 'es' ? 'Desarrollador Front end' : 'Front-end Developer'}</h3>
            <p className="about-description">
              {language === 'es'
                ? 'Soy un apasionado desarrollador con más de 2+ años de experiencia creando aplicaciones web y móviles innovadoras. Mi enfoque combina creatividad técnica con un diseño centrado en el usuario para entregar soluciones que no solo funcionan perfectamente, sino que también brindan experiencias excepcionales.'
                : 'I am a passionate developer with more than 2+ years of experience creating innovative web and mobile applications. My approach combines technical creativity with user-centered design to deliver solutions that not only work perfectly but also provide exceptional experiences.'}
            </p>
            
            <div className="about-interests">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="interest-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="interest-icon">{interest.icon}</div>
                  <div>
                    <h4>{interest.title}</h4>
                    <p>{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-buttons">
              <a href={cvPdf} download="CV Joaquin Orlandau Rosso Actual.pdf" className="btn btn-primary">
                {language === 'es' ? 'Descargar CV' : 'Download CV'}
              </a>
              <a href="#contact" className="btn btn-outline">
                {language === 'es' ? 'Hablemos' : "Let's Talk"}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

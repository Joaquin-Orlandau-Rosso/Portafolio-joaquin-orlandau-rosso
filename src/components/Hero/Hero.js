import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.scss';

const Hero = ({ language }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Fuljoq', label: 'GitHub', type: 'link' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/joaquin-orlandau-rosso/', label: 'LinkedIn', type: 'link' },
    { icon: <FaEnvelope />, url: 'joaquin.orlandau.rosso@gmail.com', label: 'Email', type: 'email' },
  ];

  const handleEmailClick = async () => {
    const email = 'joaquin.orlandau.rosso@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copiado al portapapeles');
    } catch (error) {
      toast.error('No se pudo copiar el email');
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>{language === 'es' ? 'Hola, soy' : 'Hi, I am'}</span>
            </div>
            
            <h1 className="hero-name">Joaquin</h1>
            
            <div className="hero-title">
              <span>{language === 'es' ? 'Soy ' : "I'm "}</span>

              {/* NUEVA ANIMACIÓN TYPEWRITER */}
              <span className="typed-text">
                <Typewriter
                  words={
                    language === 'es'
                      ? ['Desarrollador Front End', 'Desarrollador React', 'Creativo Digital']
                      : ['Front End Developer', 'React Developer', 'Digital Creator']
                  }
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </div>
            
            <p className="hero-description">
              {language === 'es'
                ? 'Soy un desarrollador front end enfocado en crear interfaces modernas, rápidas y atractivas, con especial atención a la experiencia de usuario y los detalles visuales.'
                : 'I am a front-end developer focused on creating modern, fast and attractive interfaces, with special attention to user experience and visual details.'}
            </p>
            
            <div className="hero-buttons">
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn btn-primary">
                  {language === 'es' ? 'Contáctame' : 'Contact Me'}
                </button>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn btn-outline">
                  {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
                </button>
              </Link>
            </div>
            
            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.type === 'link' ? link.url : '#'}
                  target={link.type === 'link' ? "_blank" : undefined}
                  rel={link.type === 'link' ? "noopener noreferrer" : undefined}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                  onClick={(e) => {
                    if (link.type === 'email') {
                      e.preventDefault();
                      handleEmailClick();
                    }
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt
              className="tilt-container"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
            >
              <div className="hero-avatar">
                <div className="avatar-glow"></div>
                <img 
                  src="/imgs/fotasa.jpg" 
                  alt="Foto de perfil"
                />
              </div>
            </Tilt>
            
            <div className="floating-elements">
              <div className="floating-element element-1">
                <span>React</span>
              </div>
              <div className="floating-element element-2">
                <span>Node.js</span>
              </div>
              <div className="floating-element element-3">
                <span>CSS</span>
              </div>
              <div className="floating-element element-4">
                <span>Html</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500}>
            <FaArrowDown />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

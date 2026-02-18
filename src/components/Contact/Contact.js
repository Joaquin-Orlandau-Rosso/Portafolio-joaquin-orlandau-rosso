import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './Contact.scss';

const Contact = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: language === 'es' ? 'Email' : 'Email',
      value: 'joaquin.orlandau.rosso@gmail.com',
      link:  'joaquin.orlandau.rosso@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: language === 'es' ? 'WhatsApp' : 'WhatsApp',
      value: '+54 1134372005',
      link: 'https://wa.me/541134372005'
    }
  ];

  const handleCopyEmail = async () => {
    const email = 'joaquin.orlandau.rosso@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copiado al portapapeles');
    } catch (error) {
      toast.error('No se pudo copiar el email');
    }
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/541134372005', '_blank');
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? '¿Tienes un proyecto en mente? ¡Hablemos!'
              : 'Do you have a project in mind? Let\'s talk!'}
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
            </h3>
            <p>
              {language === 'es'
                ? 'Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.'
                : 'I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.'}
            </p>

            <div className="info-items">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.title === 'Email' && (
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={handleCopyEmail}
                      >
                        {info.value}
                      </button>
                    )}
                    {info.title === 'WhatsApp' && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleOpenWhatsApp}
                      >
                        {info.value}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';
import './Experience.scss';

const Experience = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'education',
      title:
        language === 'es'
          ? 'Carrera de Desarrollo Web'
          : 'Web Development Career',
      company: 'Coderhouse',
      period: '2023 - 2024',
      description:
        language === 'es'
          ? 'Formación en desarrollo web frontend con enfoque en proyectos prácticos y trabajo en equipo.'
          : 'Front-end web development training focused on practical projects and teamwork.',
      icon: <FaGraduationCap />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      type: 'education',
      title:
        language === 'es'
          ? 'Licenciatura en Programación'
          : "Bachelor's Degree in Programming",
      company: 'UCES',
      period: '2024 - 2026',
      description:
        language === 'es'
          ? 'Formación universitaria en programación con enfoque en fundamentos, algoritmos y desarrollo de software.'
          : 'University education in programming focused on fundamentals, algorithms, and software development.',
      icon: <FaGraduationCap />,
      skills: ['Programación', 'Algoritmos', 'Bases de Datos', 'Desarrollo de Software']
    },
    {
      type: 'education',
      title:
        language === 'es'
          ? 'Carrera de Desarrollo Web / Full Stack'
          : 'Web / Full Stack Development Career',
      company: 'Digital House',
      period: '2025 - 2026',
      description:
        language === 'es'
          ? 'Programa intensivo orientado a proyectos reales, buenas prácticas y trabajo colaborativo.'
          : 'Intensive program focused on real projects, best practices and collaborative work.',
      icon: <FaGraduationCap />,
      skills: ['React', 'Node.js', 'Git', 'Agile Methodologies']
    }
  ];

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Experiencia' : 'Experience'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? 'Mi trayectoria profesional y académica'
              : 'My professional and academic journey'}
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <span className="experience-period">{exp.period}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

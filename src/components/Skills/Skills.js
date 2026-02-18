import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaSass, FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs,
  SiTailwindcss, SiAngular
} from 'react-icons/si';
import './Skills.scss';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      color: '#61dafb',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'Angular', icon: <SiAngular />, level: 80 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 88 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 100 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'Sass', icon: <FaSass />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 70 },
      ]
    },
    {
      title: 'Herramientas',
      color: '#f1502f',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 92 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino
          </p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + index * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="skill-icon" style={{ color: category.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-decoration"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

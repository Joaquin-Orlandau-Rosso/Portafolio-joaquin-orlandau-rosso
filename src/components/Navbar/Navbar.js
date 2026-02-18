import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: language === 'es' ? 'Inicio' : 'Home', to: 'hero' },
    { name: language === 'es' ? 'Sobre Mí' : 'About', to: 'about' },
    { name: language === 'es' ? 'Habilidades' : 'Skills', to: 'skills' },
    { name: language === 'es' ? 'Experiencia' : 'Experience', to: 'experience' },
    { name: language === 'es' ? 'Proyectos' : 'Projects', to: 'projects' },
    { name: language === 'es' ? 'Contacto' : 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="hero" smooth={true} duration={500}>
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot">.</span>
            </Link>
          </div>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-list">
              {navItems.map((item, index) => (
                <li key={index} className="navbar-item">
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="navbar-actions desktop">
              <button className="lang-toggle" onClick={toggleLanguage}>
                <span>{language === 'es' ? 'ES' : 'EN'}</span>
              </button>
              <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>

          <div className="navbar-mobile">
            <button className="lang-toggle mobile" onClick={toggleLanguage}>
              <span>{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
            <button className="theme-toggle mobile" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Social Link"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="footer-text">
            <p>
              © {currentYear} Portfolio. Hecho con{' '}
              <FaHeart className="heart-icon" /> por Joaquin Orlandau Rosso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

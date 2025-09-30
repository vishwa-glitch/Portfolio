import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../../utils/constants';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h3>Portfolio</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className={styles.footerSocial}>
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a 
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
            <a 
              href={SOCIAL_LINKS.email}
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
        
        <div className={styles.footerDivider}></div>
        
        <div className={styles.footerBottom}>
          <p>
            © {currentYear} Portfolio. Made with <FiHeart className={styles.heart} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import { EXPERIENCE_DATA } from '../utils/constants';
import { FiCalendar, FiAward } from 'react-icons/fi';
import Contact from '../components/Contact/Contact';
import styles from './ExperiencePage.module.css';

const ExperiencePage = () => {
  const experience = EXPERIENCE_DATA[0]; // Get the first experience

  return (
    <>
      <div id="experience" className={styles.experienceContainer}>
        <AnimatedBackground opacity={0.03} />
        <div className={styles.content}>
          <div className={styles.experienceLayout}>
            {/* Experience Card - Left Side */}
            <div className={styles.experienceCardSection}>
              <div className={styles.experienceCard}>
                <div className={styles.cardGradient}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.role}>{experience.role}</h3>
                    <div className={styles.company}>{experience.company}</div>
                    <div className={styles.period}>
                      <FiCalendar className={styles.periodIcon} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <p className={styles.description}>{experience.description}</p>
                  
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <FiAward className={styles.achievementIcon} />
                        <span>{experience.achievements[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Animated Quote Section - Right Side */}
            <div className={styles.quoteSection}>
              <h1 className={styles.animatedQuote}>
                <span className={styles.word1}>You give the chance</span>
                <span className={styles.dash}>—</span>
                <span className={styles.word2}>I'll make it loud</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default ExperiencePage;

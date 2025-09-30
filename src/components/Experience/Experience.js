import React from 'react';
import { FiBriefcase, FiCalendar, FiAward } from 'react-icons/fi';
import { EXPERIENCE_DATA } from '../../utils/constants';
import AnimatedBackground from '../common/AnimatedBackground';
import styles from './Experience.module.css';

const ExperienceItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`${styles.timelineItem} ${isEven ? styles.left : styles.right}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles.timelineContent}>
        <div className={styles.timelineIcon}>
          <FiBriefcase />
        </div>
        
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.role}>{experience.role}</h3>
            <div className={styles.company}>{experience.company}</div>
          </div>
          
          <div className={styles.period}>
            <FiCalendar className={styles.periodIcon} />
            <span>{experience.period}</span>
          </div>
          
          <p className={styles.description}>{experience.description}</p>
          
          <div className={styles.achievements}>
            <h4 className={styles.achievementsTitle}>
              <FiAward className={styles.achievementIcon} />
              Key Achievements
            </h4>
            <ul className={styles.achievementsList}>
              {experience.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <AnimatedBackground opacity={0.15} particleColor="0, 212, 170" density={20000} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceItem 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

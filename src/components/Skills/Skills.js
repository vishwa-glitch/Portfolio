import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiDjango, SiExpress, SiPostgresql, SiMongodb, SiMysql, SiAmazonaws, SiGooglecloud, SiFlask, SiReact, SiExpo } from 'react-icons/si';
import AnimatedBackground from '../common/AnimatedBackground';
import styles from './Skills.module.css';

const skillIconMap = {
  'React': <FaReact />,
  'HTML5': <FaHtml5 />,
  'CSS3': <FaCss3Alt />,
  'JavaScript ES6+': <FaJsSquare />,
  'Django': <SiDjango />,
  'Express': <SiExpress />,
  'Flask': <SiFlask />,
  'Node.js': <FaNodeJs />,
  'PostgreSQL': <SiPostgresql />,
  'MongoDB': <SiMongodb />,
  'MySQL': <SiMysql />,
  'AWS': <SiAmazonaws />,
  'GCP': <SiGooglecloud />,
  'Git': <FaGitAlt />,
  'Docker': <FaDocker />,
  'React Native': <SiReact />,
  'Expo': <SiExpo />
};

const SkillNode = ({ skill, level, icon, delay }) => {
  return (
    <div 
      className={styles.skillNode}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.nodeContent}>
        {icon && <span className={styles.nodeIcon}>{icon}</span>}
        <span className={styles.nodeName}>{skill}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <AnimatedBackground opacity={0.2} particleColor="0, 212, 170" density={15000} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionSubtitle}>
            Full-stack development expertise visualized
          </p>
        </div>
        
        <div className={styles.skillTree}>
          {/* Root Node */}
          <div className={styles.treeLevel}>
            <SkillNode skill="Full Stack Developer" level="root" delay={0.1} />
          </div>
          
          {/* Level 1 - Main Categories */}
          <div className={styles.treeConnector}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.branchDown}></div>
          </div>
          
          <div className={styles.treeLevel}>
            <div className={styles.branchContainer}>
              <SkillNode skill="Frontend" level="category" delay={0.2} />
              <div className={styles.verticalConnector}></div>
            </div>
            <div className={styles.branchContainer}>
              <SkillNode skill="Backend" level="category" delay={0.3} />
              <div className={styles.verticalConnector}></div>
            </div>
            <div className={styles.branchContainer}>
              <SkillNode skill="Database" level="category" delay={0.4} />
              <div className={styles.verticalConnector}></div>
            </div>
            <div className={styles.branchContainer}>
              <SkillNode skill="DevOps & Tools" level="category" delay={0.5} />
              <div className={styles.verticalConnector}></div>
            </div>
          </div>
          
          {/* Level 2 - Technologies */}
          <div className={styles.treeLevel}>
            {/* Frontend Technologies */}
            <div className={styles.techGroup}>
              <SkillNode skill="React" icon={skillIconMap['React']} delay={0.6} />
              <SkillNode skill="HTML5" icon={skillIconMap['HTML5']} delay={0.65} />
              <SkillNode skill="CSS3" icon={skillIconMap['CSS3']} delay={0.7} />
              <SkillNode skill="JavaScript" icon={skillIconMap['JavaScript ES6+']} delay={0.75} />
              <SkillNode skill="React Native" icon={skillIconMap['React Native']} delay={0.8} />
            </div>
            
            {/* Backend Technologies */}
            <div className={styles.techGroup}>
              <SkillNode skill="Django" icon={skillIconMap['Django']} delay={0.85} />
              <SkillNode skill="Express" icon={skillIconMap['Express']} delay={0.9} />
              <SkillNode skill="Flask" icon={skillIconMap['Flask']} delay={0.95} />
              <SkillNode skill="Node.js" icon={skillIconMap['Node.js']} delay={1.0} />
            </div>
            
            {/* Database Technologies */}
            <div className={styles.techGroup}>
              <SkillNode skill="PostgreSQL" icon={skillIconMap['PostgreSQL']} delay={1.05} />
              <SkillNode skill="MongoDB" icon={skillIconMap['MongoDB']} delay={1.1} />
              <SkillNode skill="MySQL" icon={skillIconMap['MySQL']} delay={1.15} />
            </div>
            
            {/* DevOps & Tools */}
            <div className={styles.techGroup}>
              <SkillNode skill="AWS" icon={skillIconMap['AWS']} delay={1.2} />
              <SkillNode skill="GCP" icon={skillIconMap['GCP']} delay={1.25} />
              <SkillNode skill="Git" icon={skillIconMap['Git']} delay={1.3} />
              <SkillNode skill="Docker" icon={skillIconMap['Docker']} delay={1.35} />
              <SkillNode skill="Expo" icon={skillIconMap['Expo']} delay={1.4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

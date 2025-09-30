import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiMonitor } from 'react-icons/fi';
import { PROJECTS_DATA } from '../../utils/constants';
import AnimatedBackground from '../common/AnimatedBackground';
import styles from './Projects.module.css';

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.projectCard}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        {/* Front of card */}
        <div className={styles.cardFront}>
          {project.isOngoing && (
            <span className={styles.ongoingBadge}>Ongoing Project</span>
          )}
          <div className={styles.projectImage}>
            <img 
              src={project.image} 
              alt={project.title}
              className={`${styles.projectImg} ${project.title === 'NextWatch Backend' ? styles.fillImage : ''}`}
            />
            <div className={styles.imageOverlay}>
              <FiMonitor className={styles.overlayIcon} />
            </div>
          </div>
          
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.techStack}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            <h3 className={styles.backTitle}>{project.title}</h3>
            <div className={styles.backFeatures}>
              <h4>Key Features</h4>
              <ul>
                <li>Responsive design</li>
                <li>Real-time updates</li>
                <li>Secure authentication</li>
                <li>Optimized performance</li>
              </ul>
            </div>
            <div className={styles.projectLinks}>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FiExternalLink />
                  <span>View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  console.log('PROJECTS_DATA:', PROJECTS_DATA); // Debug log

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <AnimatedBackground opacity={0.15} particleColor="0, 212, 170" density={18000} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Showcasing my latest work and technical expertise
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS_DATA.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className={styles.moreProjects}>
          <button className={`btn btn-primary ${styles.moreButton}`}>
            <FiCode className={styles.buttonIcon} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

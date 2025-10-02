import React, { useState } from 'react';
import { PROJECTS_DATA } from '../utils/constants';
import { FiCode, FiExternalLink, FiSmartphone, FiGithub } from 'react-icons/fi';
import AnimatedBackground from '../components/common/AnimatedBackground';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlipCard = (projectId) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <div id="projects" className={styles.projectsContainer}>
      <AnimatedBackground opacity={0.02} />
      <div className={styles.content}>
        
        <div className={styles.projectsGrid}>
          {PROJECTS_DATA.map((project) => {
            const isFlipped = flippedCard === project.id;
            
            return (
              <div 
                key={project.id} 
                className={`${styles.projectCard} ${project.hasFlipCard ? styles.flipCard : ''} ${isFlipped ? styles.flipped : ''}`}
              >
                <div className={styles.cardGradient}></div>
                
                {/* Front of card */}
                <div className={styles.cardFront}>
                  <div className={styles.projectLeft}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>
                        {project.title}
                        {project.isOngoing && (
                          <span className={styles.ongoingBadge}>In Progress</span>
                        )}
                      </h3>
                    </div>
                    
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    
                    {/* Skill Badges */}
                    {project.skillBadges && (
                      <div className={styles.skillBadges}>
                        {project.skillBadges.map((skill, index) => (
                          <span key={index} className={styles.skillBadge}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className={styles.projectButtons}>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectButton}
                        >
                          <FiCode size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        project.liveUrl === 'beta' ? (
                          <button
                            className={`${styles.projectButton} ${styles.liveDemoButton} ${styles.betaButton}`}
                            disabled
                            title="Currently in beta testing on Play Store"
                          >
                            <FiExternalLink size={16} />
                            <span>Beta Testing</span>
                          </button>
                        ) : (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${styles.projectButton} ${styles.liveDemoButton}`}
                          >
                            <FiExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )
                      )}
                      {project.hasFlipCard && (
                        <button
                          onClick={() => handleFlipCard(project.id)}
                          className={`${styles.projectButton} ${styles.appPreviewButton}`}
                        >
                          <FiSmartphone size={16} />
                          <span>App Preview</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.projectRight}>
                    <div className={styles.projectImage}>
                      <img src={project.image} alt={`${project.title} preview`} />
                    </div>
                  </div>
                </div>
                
                {/* Back of card (for ExpenseWise mobile screenshots) */}
                {project.hasFlipCard && (
                  <div className={styles.cardBack}>
                    <div className={styles.mobileScreenshotsContainer}>
                      <h3 className={styles.screenshotsTitle}>App Screenshots</h3>
                      <div className={styles.mobileScreenshots}>
                        {project.mobileScreenshots && project.mobileScreenshots.map((screenshot, index) => (
                          <div key={index} className={styles.mobileScreenshot}>
                            <img src={screenshot} alt={`Screenshot ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => handleFlipCard(project.id)}
                        className={styles.backButton}
                      >
                        Back to Details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* See More Projects Button */}
        <div className={styles.seeMoreContainer}>
          <a 
            href="https://github.com/vishwa-glitch" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.seeMoreButton}
          >
            <FiGithub size={20} />
            <span>See More Projects</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;

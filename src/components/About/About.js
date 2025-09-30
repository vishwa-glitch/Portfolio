import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import { FiExternalLink } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <AnimatedBackground opacity={0.05} particleColor="100, 200, 255" density={30000} />
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <p className={styles.intro}>
                I'm <span className={styles.highlight}>Vishwa</span>— a Full Stack Developer and Computer Science student 
                who loves turning ideas into smooth, reliable software.
              </p>
              <p className={styles.description}>
                From React frontends to Django and Node backends, I enjoy building things that actually work 
                (and occasionally even look good). 
              </p>
              <p className={styles.description}>
                I'm consistently exploring and applying AI/ML and Web3 technologies, blending emerging tools 
                with solid engineering to create future-ready solutions.
              </p>
              <p className={styles.cta}>
                Let's connect and build something that actually solves real-world problems.
              </p>
            </div>
            <div className={styles.feedbackCard}>
              <div className={styles.feedbackContent}>
                <div className={styles.feedbackHeader}>
                  <span className={styles.starRating}>⭐</span>
                  <span className={styles.ratingText}>Client Feedback (5.0/5.0)</span>
                </div>
                <blockquote className={styles.testimonial}>
                  "An excellent freelancer, always in touch and completes tasks quickly. I hope I will contact him again!"
                </blockquote>
                <div className={styles.achievements}>
                  <p className={styles.achievement}>✓ Successfully delivered multiple Android app features</p>
                  <p className={styles.achievement}>✓ Maintained 100% on-time delivery rate</p>
                </div>
                <a 
                  href="https://www.upwork.com/freelancers/~013dc9d9aa14ffeacc?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.upworkButton}
                >
                  <span>View Upwork Profile</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

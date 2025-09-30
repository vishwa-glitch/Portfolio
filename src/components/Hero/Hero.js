import React, { useEffect, useRef, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const roles = [
    'Frontend Developer',
    'Backend Developer', 
    'DevOps Specialist',
    'React Native Developer'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 212, 170, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, index) => {
        particles.slice(index + 1).forEach(b => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 212, 170, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      init();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Role transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => 
          prevIndex === roles.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300); // Half of the animation duration
    }, 1500); // Change role every 1.5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    navigate('/projects');
  };


  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.nameTitle}>
            I am <span className={styles.name}>Vishwa Karikal</span>
          </h1>
          
          <div className={styles.roleContainer}>
            <div className={styles.animatedRole}>
              <span 
                className={`${styles.role} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
                key={currentRoleIndex}
              >
                {roles[currentRoleIndex]}
              </span>
            </div>
          </div>
          
          <h2 className={styles.subtitle}>
            BTech Computer Science | Building scalable web & mobile applications
          </h2>
          
          <div className={styles.buttons}>
            <button onClick={scrollToProjects} className={`btn btn-primary ${styles.ctaButton}`}>
              View Projects
            </button>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <FiArrowDown className={styles.scrollIcon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

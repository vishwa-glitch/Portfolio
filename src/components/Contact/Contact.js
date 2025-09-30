import React, { useState } from 'react';
import { FiMail, FiSend, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedBackground from '../common/AnimatedBackground';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to set up your EmailJS account
      // and replace these with your actual service ID, template ID, and public key
      
      // For now, we'll simulate the email sending since EmailJS needs configuration
      // To make it fully functional:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create a service and template
      // 3. Replace the IDs below with your actual IDs
      
      // Uncomment this when you have your EmailJS credentials:
      // const templateParams = {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   to_email: 'vishwa12550@gmail.com',
      //   message: formData.message,
      // };
      // 
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulate successful submission
      setTimeout(() => {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1500);
      
    } catch (error) {
      toast.error('Failed to send message. Please try again or email directly.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <AnimatedBackground opacity={0.1} particleColor="0, 212, 170" density={25000} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's Connect</h3>
            <p className={styles.infoDescription}>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <div>
                  <h4>Email</h4>
                  <a href={SOCIAL_LINKS.email}>vishwa12550@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FiMapPin className={styles.infoIcon} />
                <div>
                  <h4>Location</h4>
                  <span>Available for Remote Work</span>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4>Follow Me</h4>
              <div className={styles.socialIcons}>
                <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.error : ''}
                placeholder="John Doe"
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.error : ''}
                placeholder="john@example.com"
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.error : ''}
                placeholder="Tell me about your project..."
                rows="5"
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <FiSend className={styles.buttonIcon} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      <ToastContainer />
    </section>
  );
};

export default Contact;

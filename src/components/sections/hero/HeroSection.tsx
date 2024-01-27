import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <div id="top" className={styles.heroSection}>
      <h1>Welcome to Sumiya's Portfolio</h1>
      <p>Discover my projects and skills</p>
      <div className="scroll-indicator">
        <span className="scroll-arrow"></span>
      </div>
    </div>
  );
}

export default HeroSection;

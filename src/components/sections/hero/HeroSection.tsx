import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <div id="top" className={styles.heroSection}>
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects and skills</p>
      {/* その他の必要な要素やボタンなど */}
    </div>
  );
}

export default HeroSection;

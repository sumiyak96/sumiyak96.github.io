import React from 'react';
import styles from './HeroSection.module.scss';
import { Canvas } from '@react-three/fiber';
import { AirPlane } from './AirPlane';
import { Earth } from "./Earth"

// three.jsを利用したパターン
const HeroSection: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh'}} className={styles.heroSection}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AirPlane radius={2} speed={0.001} />
        <Earth position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default HeroSection;

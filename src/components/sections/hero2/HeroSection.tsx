import React from 'react';
import styles from './HeroSection.module.scss';
import { Canvas } from '@react-three/fiber';
import { Cube } from './Cube';
import Earth from "./Earth"

// three.jsを利用したパターン
const HeroSection: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Cube position={[-1.2, 0, 0]} />
        {/* <Cube position={[1.2, 0, 0]} /> */}
        <Earth />
      </Canvas>
    </div>
  );
}

export default HeroSection;

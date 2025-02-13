import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);

  // フレームごとに地球を回転させる
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[100, 100, 100]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Earth;

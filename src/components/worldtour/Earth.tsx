import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

interface EarthProps {
  position: [number, number, number];
}

export const Earth: React.FC<EarthProps> = (props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/earth_map2.jpg");

  // wrapS, wrapT を調整
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 1); // 必要なら調整

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 16, 64]} />
      <meshStandardMaterial map={texture} color="lightblue"/>
    </mesh>
  );
}

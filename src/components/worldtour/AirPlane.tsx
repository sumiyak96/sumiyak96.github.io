import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AirPlaneProps {
  radius: number; // 周回する半径
  speed: number; // 周回のスピード
}
// TODO 現在は十二面体なので、飛行機に変更する
export const AirPlane: React.FC<AirPlaneProps> = ({ radius, speed }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      const time = Date.now() * speed; // 時間に基づいて動きを決定

      // 十字の軌道に沿った位置の計算
      // x 軸と z 軸方向に移動し、y 軸方向にも移動させる
      const x = radius * Math.sin(time);
      const z = radius * Math.cos(time);

      // y 軸方向の動きを加える（上下に移動）
      const y = radius * Math.sin(time / 2); // 時間で変化する高さ

      mesh.current.position.set(x, y, z);
    }
  });

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[0.1]} />
      <meshStandardMaterial color={'#049ef4'} />
    </mesh>
  );
};

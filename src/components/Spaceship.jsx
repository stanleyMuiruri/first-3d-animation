// src/components/Spaceship.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Spaceship({ rotationSpeed = 0.3, floatAmplitude = 0.5, ...props }) {
  const group = useRef();
  const { scene } = useGLTF('/spaceship.glb');

  useFrame((state, delta) => {
    if (group.current) {
      // Continuous gentle rotation
      group.current.rotation.y += delta * rotationSpeed;
      // Floating animation using a sine wave
      group.current.position.y = Math.sin(state.clock.elapsedTime) * floatAmplitude;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

// src/components/Hologram.jsx
import React, { useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Hologram({ message = 'WELCOME TO THE FUTURE', color = 'cyan', pulseScale = 0.2, ...props }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      // Create a pulsing (scaling) effect using a sine wave
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * pulseScale;
      ref.current.scale.set(scale, scale, scale);
      // Subtle rotation for an added dynamic effect
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={1}
      color={color}
      position={[0, 2.5, -4]}
      anchorX="center"
      anchorY="middle"
      {...props}
    >
      {message}
    </Text>
  );
}

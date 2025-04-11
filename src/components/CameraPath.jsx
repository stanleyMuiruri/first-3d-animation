// src/components/CameraPath.jsx
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export default function CameraPath({ speed = 0.05 }) {
  const { camera } = useThree();
  const angleRef = useRef(0);
  
  useFrame((state, delta) => {
    angleRef.current += delta * speed;
    // Create a circular orbit around the center (0,0,0)
    const radius = 8;
    camera.position.x = Math.sin(angleRef.current) * radius;
    camera.position.z = Math.cos(angleRef.current) * radius;
    camera.lookAt(0, 1, 0);
  });
  
  return null;
}

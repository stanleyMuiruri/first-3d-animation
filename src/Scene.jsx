// src/Scene.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './Model';

const Scene = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full" // Let it fill the container
      camera={{ position: [0, 2, 5], fov: 60 }}
    >
      {/* Smooth interaction */}
      <OrbitControls enableDamping={true} dampingFactor={0.1} />

      {/* Soft ambient light and a stronger directional light */}
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow 
      />

      {/* Space environment: you can try different presets like "night" or "sunset" */}
      <Environment preset="night" />

      {/* (Optional) Add a starfield or dark gradient background 
          If you want a truly custom star background, create Starfield.jsx 
          or look for a skybox texture and use <Sky ... /> from Drei. 
      */}

      {/* The main 3D model with a slow rotation for a futuristic vibe */}
      <RotatingModel />
    </Canvas>
  );
};

// A small wrapper component to handle rotation
function RotatingModel() {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      // Slowly spin around the Y-axis
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={ref}>
      {/* Position or scale the model as needed */}
      <Model scale={0.5} position={[0, 0, 0]} />
    </group>
  );
}

export default Scene;

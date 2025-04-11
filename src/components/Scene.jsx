// src/components/Scene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Spaceship from './Spaceship';
import Hologram from './Hologram';
import CameraPath from './CameraPath';

export default function Scene() {
  // Interactive parameters via Leva
  const { ambientIntensity, rotationSpeed, floatAmplitude, holoColor, bloomIntensity } = useControls({
    ambientIntensity: { value: 0.1, min: 0, max: 1, step: 0.05 },
    rotationSpeed: { value: 0.3, min: 0, max: 1, step: 0.05 },
    floatAmplitude: { value: 0.5, min: 0, max: 2, step: 0.1 },
    holoColor: { value: 'cyan' },
    bloomIntensity: { value: 0.7, min: 0, max: 3, step: 0.1 }
  });

  return (
    <>
      {/* Leva control panel */}
      <Leva collapsed={false} />

      <Canvas
        shadows
        className="w-full h-full"
        camera={{ position: [0, 2, 8], fov: 60 }}
      >
        {/* Optional: If you want an automated camera orbit */}
        <CameraPath speed={0.05} />

        {/* Provide manual exploration */}
        <OrbitControls enableDamping />

        {/* Lighting */}
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />

        {/* Environment background with stars */}
        <Environment preset="sunset" background />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* The animated spaceship */}
        <Spaceship rotationSpeed={rotationSpeed} floatAmplitude={floatAmplitude} position={[0, 0, 0]} />

        {/* Floating hologram */}
        <Hologram message="WELCOME TO THE FUTURE" color={holoColor} />

        {/* Postprocessing Effects */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={bloomIntensity} />
        </EffectComposer>

        {/* Option: Add lens flare or additional light effects with custom shaders or Drei components */}
      </Canvas>
    </>
  );
}

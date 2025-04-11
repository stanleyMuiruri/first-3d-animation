// src/App.jsx
import React from 'react';
import Scene from './components/Scene';
import './index.css'; // Import your global styles or Tailwind CSS

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Scene />
      {/* Minimal overlay for branding */}
      <div className="absolute top-4 left-4 text-white pointer-events-none">
        <h1 className="text-xl font-bold">Futuristic Experience</h1>
        <p className="text-sm">Explore the future with your mouse</p>
      </div>
    </div>
  );
}

export default App;

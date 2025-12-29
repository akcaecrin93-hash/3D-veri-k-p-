
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, Grid, ContactShadows } from '@react-three/drei';
import { DataCube } from './components/DataCube';
import { UIOverlay } from './components/UIOverlay';

const App: React.FC = () => {
  const [activeFace, setActiveFace] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen bg-slate-950">
      {/* 3D Scene */}
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={45} />
        <OrbitControls 
          enablePan={false} 
          minDistance={4} 
          maxDistance={12}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#fb923c" />

        <Suspense fallback={null}>
          <Float speed={0} rotationIntensity={0} floatIntensity={0}>
            <DataCube onFaceClick={setActiveFace} activeFace={activeFace} />
          </Float>
          
          {/* Environment */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Grid 
            infiniteGrid 
            fadeDistance={20} 
            sectionColor="#1e293b" 
            cellColor="#334155" 
            sectionThickness={1} 
            cellSize={0.5} 
            position={[0, -2, 0]} 
          />
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={10} 
            color="#000000" 
          />
        </Suspense>
      </Canvas>

      {/* 2D UI Overlay */}
      <UIOverlay activeFace={activeFace} setActiveFace={setActiveFace} />
    </div>
  );
};

export default App;

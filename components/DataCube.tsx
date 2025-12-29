
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TimeFace } from './faces/TimeFace';
import { GeoFace } from './faces/GeoFace';
import { CategoryFace } from './faces/CategoryFace';
import { TurkeyGeoFace } from './faces/TurkeyGeoFace';
import { CategoryOverviewFace } from './faces/CategoryOverviewFace';

interface DataCubeProps {
  onFaceClick: (face: string) => void;
  activeFace: string | null;
}

export const DataCube: React.FC<DataCubeProps> = ({ onFaceClick, activeFace }) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const HALF_PI = 1.570796;
  const PI = 3.141592;

  return (
    <group>
      <mesh ref={cubeRef} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshPhysicalMaterial 
          transparent={false} 
          opacity={1} 
          color="#0f172a" 
          roughness={0.2} 
          metalness={0.9}
          transmission={0}
          thickness={0}
          reflectivity={0.5}
        />
        
        {/* Cube Outlines */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(3, 3, 3)]} />
          <lineBasicMaterial color="#38bdf8" linewidth={2} />
        </lineSegments>

        {/* Top Face - Zaman */}
        <group position={[0, 1.51, 0]} rotation={[-HALF_PI, 0, 0]}>
          <FaceHtml label="ZAMAN" color="blue" onClick={() => onFaceClick('zaman')}>
            <TimeFace />
          </FaceHtml>
        </group>

        {/* Left Face - Coğrafya (Global) */}
        <group position={[-1.51, 0, 0]} rotation={[0, -HALF_PI, 0]}>
          <FaceHtml label="COĞRAFYA (GLOBAL)" color="blue" onClick={() => onFaceClick('cografya-global')}>
            <GeoFace />
          </FaceHtml>
        </group>

        {/* Front Face - Coğrafya (Yerel) */}
        <group position={[0, 0, 1.51]} rotation={[0, 0, 0]}>
          <FaceHtml label="COĞRAFYA (YEREL)" color="orange" onClick={() => onFaceClick('cografya-yerel')}>
            <TurkeyGeoFace />
          </FaceHtml>
        </group>

        {/* Right Face - Kategori (Genel) */}
        <group position={[1.51, 0, 0]} rotation={[0, HALF_PI, 0]}>
          <FaceHtml label="KATEGORİ (GENEL)" color="orange" onClick={() => onFaceClick('kategori-genel')}>
            <CategoryOverviewFace />
          </FaceHtml>
        </group>

        {/* Back Face - Kategori (Detay) */}
        <group position={[0, 0, -1.51]} rotation={[0, PI, 0]}>
          <FaceHtml label="KATEGORİ (DETAY)" color="orange" onClick={() => onFaceClick('kategori-detay')}>
            <CategoryFace />
          </FaceHtml>
        </group>
      </mesh>

      {/* Decorative Glow Elements around the base */}
      <mesh rotation={[-HALF_PI, 0, 0]} position={[0, -1.8, 0]}>
        <ringGeometry args={[2.5, 2.6, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[-HALF_PI, 0, 0]} position={[0, -1.85, 0]}>
        <ringGeometry args={[2.8, 2.85, 64]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

interface FaceHtmlProps {
  children: React.ReactNode;
  label: string;
  color: 'blue' | 'orange';
  onClick: () => void;
}

const FaceHtml: React.FC<FaceHtmlProps> = ({ children, label, color, onClick }) => {
  const borderColor = color === 'blue' ? 'border-sky-500' : 'border-orange-500';
  const textColor = color === 'blue' ? 'text-sky-400' : 'text-orange-400';
  const bgColor = color === 'blue' ? 'bg-slate-900' : 'bg-slate-900'; // Using solid background now

  return (
    <Html
      transform
      distanceFactor={2.5}
      position={[0, 0, 0]}
      className="pointer-events-none"
    >
      <div 
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        className={`w-[400px] h-[400px] ${bgColor} border-2 ${borderColor} p-6 flex flex-col pointer-events-auto cursor-pointer transition-all duration-300 hover:brightness-125 overflow-hidden relative group`}
      >
        {/* Label Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-2xl font-bold tracking-widest ${textColor}`}>{label}</h2>
          <div className={`w-3 h-3 rounded-full animate-pulse ${color === 'blue' ? 'bg-sky-500' : 'bg-orange-500'}`}></div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Corner Decor */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 ${borderColor}`}></div>
        <div className={`absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 ${borderColor}`}></div>
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 ${borderColor}`}></div>
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 ${borderColor}`}></div>
      </div>
    </Html>
  );
};

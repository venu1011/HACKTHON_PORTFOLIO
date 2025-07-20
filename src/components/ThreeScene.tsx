
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingCube() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#00D9FF" 
        emissive="#001a2e"
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 2;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -2]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        emissive="#2a1065"
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 3;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#FF6B9D" 
        emissive="#4a0e2d"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.5;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.7) * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -1]}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial 
        color="#00FF94" 
        emissive="#003d26"
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function FloatingCone() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 2.5;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 1.5;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, 0, 1]}>
      <coneGeometry args={[0.8, 2, 8]} />
      <meshStandardMaterial 
        color="#FFD700" 
        emissive="#4d3300"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00D9FF" transparent opacity={0.8} />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#00D9FF" intensity={0.4} />
        <pointLight position={[0, -10, 5]} color="#FF6B9D" intensity={0.3} />
        <pointLight position={[-5, 5, -5]} color="#00FF94" intensity={0.3} />
        
        <FloatingCube />
        <FloatingSphere />
        <FloatingTorus />
        <FloatingOctahedron />
        <FloatingCone />
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

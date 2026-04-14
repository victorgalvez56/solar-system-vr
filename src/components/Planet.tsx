import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  name: string;
  radius: number;
  color: string;
  distance: number;
  orbitSpeed: number;
  rotationSpeed: number;
  info: string;
  rings?: boolean;
}

export function Planet({
  name,
  radius,
  color,
  distance,
  orbitSpeed,
  rotationSpeed,
  info,
  rings = false,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += orbitSpeed * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[distance, 0, 0]}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setShowInfo(!showInfo)}
        >
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={hovered ? '#ffffff' : color}
            emissive={color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>

        {rings && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius * 1.4, radius * 2, 64]} />
            <meshBasicMaterial
              color="#c9a86c"
              side={THREE.DoubleSide}
              transparent
              opacity={0.8}
            />
          </mesh>
        )}

        <Text
          position={[0, radius + 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="bottom"
        >
          {name}
        </Text>

        {showInfo && (
          <Html position={[0, radius + 1.5, 0]} center>
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.85)',
                color: 'white',
                padding: '15px',
                borderRadius: '10px',
                maxWidth: '250px',
                fontFamily: 'Arial, sans-serif',
                border: '1px solid #4a9eff',
                boxShadow: '0 0 20px rgba(74, 158, 255, 0.3)',
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#4a9eff' }}>{name}</h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>{info}</p>
              <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#888' }}>
                Click para cerrar
              </p>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}

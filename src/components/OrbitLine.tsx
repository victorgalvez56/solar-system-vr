import { useMemo } from 'react';
import * as THREE from 'three';

interface OrbitLineProps {
  radius: number;
}

export function OrbitLine({ radius }: OrbitLineProps) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  const lineObject = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: '#ffffff',
      opacity: 0.2,
      transparent: true,
    });
    return new THREE.Line(geometry, material);
  }, [points]);

  return <primitive object={lineObject} />;
}

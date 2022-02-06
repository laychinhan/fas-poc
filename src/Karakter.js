
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Karakter() {
  const meshRef = useRef();
  const { nodes } = useGLTF('/gltf/karakter/karakter.gltf');
  return (
    <mesh
      ref={meshRef}
      rotation={[0, 0, 0]}
      position={[0, 0.31, 0]}
      geometry={nodes.ZBrush_0_PM3D_head_235F46AE.geometry}
      material={nodes.ZBrush_0_PM3D_head_235F46AE.material}
    />
  );
}

useGLTF.preload('/gltf/karakter/karakter.gltf');

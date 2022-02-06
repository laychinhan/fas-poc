import clsx from 'clsx';
import React, { useRef } from 'react';
import { Html, useGLTF } from '@react-three/drei';

export default function Screen({ isOn = false, ...props }) {
  const group = useRef();
  const { nodes } = useGLTF('/gltf/screen/screen.gltf');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 0, 0]}
      position={[3, 2, 3]}
    >
      <mesh
        geometry={nodes.ZBrush_0_PM3D_big_screen_15248EBF.geometry}
        material={nodes.ZBrush_0_PM3D_big_screen_15248EBF.material}
      >
        <Html
          className={clsx('content', isOn && 'is-on')}
          position={[0, -0.5, 0]}
          transform
          rotation={[0, Math.PI, 0]}
        >
          <div className="wrapper">
            HOLA COMO ESTAS
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload('/gltf/screen/screen.gltf');

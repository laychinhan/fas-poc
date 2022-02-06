import React, { Suspense, useRef, useState } from 'react';
import {
  Canvas,
} from '@react-three/fiber';

import { PerspectiveCamera } from '@react-three/drei';
import { useControls, button } from 'leva';
import { animated, useSpring } from '@react-spring/three';
import Karakter from './Karakter';
import Screen from './Screen';
import './App.css';

const App = () => {
  const group = useRef();
  const cameraRef = useRef();
  useControls({ animate: button(() => setActive((old) => !old)) });
  const [isActive, setActive] = useState(false);
  const [isScreenOn, setScreenOn] = useState(false);
  const contentSprings = useSpring({
    from: {
      rotation: [0,0,0],
      position: [0,0,0],
    },
    to: async(next) => {
      if(isActive){
        await next({rotation: [0, Math.PI, 0]})
        await next({position: [3, -0.1, 4.55]})
        setScreenOn(true)
      }else{
        setScreenOn(false)
        next({rotation: [0, 0, 0], position: [0, 0, 0]})
      }
    },
  });

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        shadows
        style={{ background: 'white' }}
      >
        <PerspectiveCamera
          ref={cameraRef}
          fov={75}
          near={1}
          far={10}
          position={[0, 1, 3]}
          makeDefault
        />
        <ambientLight intensity={0.2}/>
        <axesHelper args={[5]}/>
        <Suspense fallback={null}>
          <animated.group
            ref={group}
            aspect={window.innerWidth / window.innerHeight}
            position={contentSprings.position}
            rotation={contentSprings.rotation}
            dispose={null}
          >
            <Karakter/>
            <Screen isOn={isScreenOn}/>
          </animated.group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;

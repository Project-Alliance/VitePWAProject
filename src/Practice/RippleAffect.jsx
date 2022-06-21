import './App.css';
import * as THREE from 'three';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei"
import circleImg from './circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from '../../public/Vtks Revolt_Regular.json'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import MeshMaterial from "../Pages/MeshBasicMaterial"
import Text from "./Text"
import React from "react"



function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  return (
    <OrbitControls
      ref={controlsRef} 
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
      enableZoom={false}  
    />
  );
}



function AnimationCanvas() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();
  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 100
  const sep = 3
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 15
    
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })
  return (
    
      <Suspense fallback={null}>

        {/* <Points /> */}
        <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

       <pointsMaterial
        attach="material"
        map={imgTex}
        color={"red"}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      /> 
      
        </points>
      </Suspense>

  );
}

function Jumbo() {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
  return (
    <group ref={ref}>
      <Text hAlign="right" position={[-10, 16.5, 0]} children="REHAN" />
      <Text hAlign="right" position={[-10, 10, 0]} children="GORAYA" />
      <Text hAlign="right" position={[-10, 4.5, 0]} children="MOSYALA" />
    </group>
  )
}

function Jumbo1() {

  return (
    <group>
      <Text hAlign="right" position={[-10, 16.5, 0]} children="CLICK" />
    </group>
  )
}

function App() {
  extend({ TextGeometry })

  const [visible,setVisible] = React.useState(false);

  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
      <Canvas
      colormanagement={"false"}
      camera={{ position: [100, 10, 0], fov: 75 }}
      
    >
        {!visible&&<MeshMaterial setVisible={setVisible} />}
        {!visible&&<Jumbo1 />}

        <AnimationCanvas />
        {visible&&<Jumbo />}
        <ambientLight args={["#ffffff", 0.25]} />

      <CameraControls />
    </Canvas>
      </Suspense>
    </div>
  );
}

export default App;


import { useFrame } from '@react-three/fiber'
import React,{useRef, useState} from 'react'
import Image from './Image';
import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

import  Text from "./Text3d"

export default function index() {
  extend({ TextGeometry })
  const box=useRef<any>(null)
  useFrame(() => box.current && void ( box.current.rotation.y += 0.01))
  const textures = ["lava", "carbonFiber"];
  const [selected, setSelected] = useState(textures[0]);

  const switchTexture = () => {
    const index = textures.indexOf(selected);
    if (index < textures.length - 1) {
      setSelected(textures[index + 1]);
      return;
    }

    setSelected(textures[0]);
    return;
  };

  const canvasStyle = {
    width: "100vw",
    height: "100vh"
  };

  const buttonStyle = {
    position: "absolute",
    zIndex: 100,
    top: "5px",
    left: "5px"
  };
  
  return (
   <>
   
   <ambientLight intensity={0.1} />
   <directionalLight intensity={0.5} position={[-1, 1, 1]} />

   
 
   

<mesh ref={box} onPointerDown={(e)=>console.log(e)} position={[1,1,-1]}>
     <Text />
   </mesh> 

   <mesh onPointerMove={(e)=>console.log(e)} position={[-1,0,1]}>
     <Image />
   </mesh>
   </>
  )
}
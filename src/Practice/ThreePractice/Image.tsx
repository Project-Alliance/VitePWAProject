
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef, useState } from 'react'
import { Image as ImageD, useTexture } from '@react-three/drei';
import image from "../../../public/image.jpeg";

export default function Image() {
    const ref=useRef<any>(null)
    useFrame(()=>{
        if(!!ref.current){
            ref.current.material.zoom=0.5;
            ref.current.material.grayscale=0;
            
            }
    })
  return (
      <mesh ref={ref}>
     <ImageD transparent url={image} opacity={1} ref={ref} />
     </mesh>
  )
}
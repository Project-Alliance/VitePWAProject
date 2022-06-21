import {Shape,TextureLoader,DoubleSide} from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from '../Utils/angle';
import TextureFile from './map.jpg'


export default function MeshBasicMaterial({setVisible}:any) {
    const mesh = useRef<any>();
    const orbitControlsRef = useRef<any>();
    const camera = useRef<any>();
    const [count, setCount] = useState(0);
    const MesArray = [
        {
            position: [2,30.1,1],
            color: 'red',
            mesh: mesh,
        },
    ]
   
    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y +=0.01;
    
    });

  

    const changeCameraPosition = () => {
        setVisible(true);
    }
    const shape = new Shape();
    const x = -2.5;
    const y = -5;
    shape.moveTo(x + 2.5, y + 2.5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
    const texture = new TextureLoader().load(TextureFile);
    return (
        <>
        <ambientLight intensity={0.5} />
   <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        {
            MesArray.map((item:{position:any,color:string,mesh:any}, index) => {
                return (
                    <mesh
                        onClick={changeCameraPosition}
                        key={index}
                        ref={item.mesh}
                        position={item.position}
                        castShadow
                        receiveShadow
                    >
                        <extrudeGeometry attach="geometry" args={[shape,{
                        steps: 2,  // ui: steps
                        depth: 2,  // ui: depth
                        bevelEnabled: true,  // ui: bevelEnabled
                        bevelThickness: 1,  // ui: bevelThickness
                        bevelSize: 5,  // ui: bevelSize
                        bevelSegments: 2,  // ui: bevelSegments
                        }]} />
                        <meshStandardMaterial map={texture} side={DoubleSide}  />
                    </mesh>
                )
            })
        }

        


        </>
          )
}



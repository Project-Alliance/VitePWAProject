
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { angleToRadians } from '../Utils/angle'

export default function Model() {
  const group = useRef<any>()
  const { nodes, materials }:any = useGLTF('/models/car/scene-transformed.glb')
  return (
    <group ref={group} dispose={null} scale={0.85} position={[0, 0, -3]} rotation={[0, angleToRadians(140), 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['body_color_supra.001']}
          />
          <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.headlightCovers} />
          <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.plasticMatte} />
          <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials['Material.003']} />
          <mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
          <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
          <group position={[0.42, 0.32, 0.33]} rotation={[0.7, 0.08, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
            <mesh castShadow receiveShadow geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
          </group>
          <group position={[0.81, 0.65, -3.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_43.geometry} material={nodes.Object_43.material} />
            <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={nodes.Object_44.material} />
          </group>
          <group position={[-0.81, 0.65, -3.01]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_46.geometry} material={nodes.Object_46.material} />
            <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={nodes.Object_47.material} />
          </group>
          <group position={[-0.27, 0.75, -4.03]} rotation={[Math.PI / 2, 0, 2.96]}>
            <mesh castShadow receiveShadow geometry={nodes.Object_49.geometry} material={nodes.Object_49.material} />
            <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={nodes.Object_50.material} />
          </group>
          <group position={[0.92, 0.34, -0.95]}>
            <group position={[-0.01, 0, 0]} scale={0.34}>
              <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={nodes.Object_53.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={nodes.Object_55.material} />
              <mesh castShadow receiveShadow geometry={nodes.Object_56.geometry} material={nodes.Object_56.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_58.geometry} material={nodes.Object_58.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_60.geometry} material={nodes.Object_60.material} />
            </group>
          </group>
          <group position={[0.92, 0.34, -3.65]}>
            <group position={[-0.01, 0, 0]} scale={0.34}>
              <mesh castShadow receiveShadow geometry={nodes.Object_63.geometry} material={nodes.Object_63.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_65.geometry} material={nodes.Object_65.material} />
              <mesh castShadow receiveShadow geometry={nodes.Object_66.geometry} material={nodes.Object_66.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_68.geometry} material={nodes.Object_68.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_70.geometry} material={nodes.Object_70.material} />
            </group>
          </group>
          <group position={[-0.92, 0.34, -3.65]} rotation={[-Math.PI, 0, -Math.PI]}>
            <group position={[-0.01, 0, 0]} scale={0.34}>
              <mesh castShadow receiveShadow geometry={nodes.Object_73.geometry} material={nodes.Object_73.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_75.geometry} material={nodes.Object_75.material} />
              <mesh castShadow receiveShadow geometry={nodes.Object_76.geometry} material={nodes.Object_76.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_78.geometry} material={nodes.Object_78.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_80.geometry} material={nodes.Object_80.material} />
            </group>
          </group>
          <group position={[-0.92, 0.34, -0.95]} rotation={[-Math.PI, 0, -Math.PI]}>
            <group position={[-0.01, 0, 0]} scale={0.34}>
              <mesh castShadow receiveShadow geometry={nodes.Object_83.geometry} material={nodes.Object_83.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_85.geometry} material={nodes.Object_85.material} />
              <mesh castShadow receiveShadow geometry={nodes.Object_86.geometry} material={nodes.Object_86.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_88.geometry} material={nodes.Object_88.material} />
            </group>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
              <mesh castShadow receiveShadow geometry={nodes.Object_90.geometry} material={nodes.Object_90.material} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/car/scene-transformed.glb')
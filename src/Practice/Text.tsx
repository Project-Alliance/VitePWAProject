import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import boldUrl from './bold.json'
import { Text3D } from '@react-three/drei'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }:any) {
  const config = useMemo(
    () => ({ size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    []
  )
  const mesh = useRef<any>()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])

  const font = new FontLoader().parse(boldUrl);

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  )
}

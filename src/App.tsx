
import { Suspense } from 'react';
import './App.css'


import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import MeshMaterial from './Pages/MeshBasicMaterial';
import Points from './Pages/ParametricGeometry';
import RippleAffect from "./Practice/RippleAffect"


function App() {
  return (
    <div className="App">
      <div >
      <RippleAffect />
      </div>
    </div>
  )
}

export default App
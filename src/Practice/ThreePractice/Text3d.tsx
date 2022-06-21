
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from '../../../public/Vtks Revolt_Regular.json'
import { useState } from 'react'



export default function Text() {
const font = new FontLoader().parse(myFont);
const [state, setstate] = useState("hanssan")

return(
<mesh position={[-0.5,0,0]} onClick={()=>setstate("Azeem")}>
    <textGeometry args={[state, {font, size:1, height: 1 }]}/>
    <meshLambertMaterial attach='material' color={'gold'}/>
</mesh>
)
}
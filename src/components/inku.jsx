import { Canvas } from "@react-three/fiber";
import { OrbitControls,PerspectiveCamera} from "@react-three/drei";
import { Suspense } from "react";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

// import { useEffect } from 'react'
import { CameraShake} from '@react-three/drei'

const Scene = () => {
  const materials = useLoader(MTLLoader,"../inkubot.mtl");
  const obj = useLoader(OBJLoader, "../inkubot.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  }
  
  );

  console.log(obj);
  return <primitive object={obj} scale={2}  />;
};



const InkuCanvas = () => {
    return (
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <ambientLight intensity={0.25} />
    <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
    <directionalLight intensity={5} position={[-10, -10, -10]} color="white" />
      <Suspense fallback={null}>
      <Scene />
      </Suspense>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.3}
        minPolarAngle={Math.PI / 2.3}
        enableZoom={false}
        enablePan={false}
      />

      <CameraShake
        maxYaw={0.1} // Max amount camera can yaw in either direction
        maxPitch={0.05} // Max amount camera can pitch in either direction
        maxRoll={.1} // Max amount camera can roll in either direction
        yawFrequency={0.1} // Frequency of the the yaw rotation
        pitchFrequency={0.1} // Frequency of the pitch rotation
        rollFrequency={0.1} // Frequency of the roll rotation
        intensity={.5} // initial intensity of the shake
        decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      />
      <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
        
      </PerspectiveCamera>
    </Canvas>
    )
  
  };
export default InkuCanvas

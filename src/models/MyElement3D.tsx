import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";

type Props = {};

const MyElement3D = (props: Props) => {
  const meshRef = useRef<Mesh>(null!);

  return (
    <>
      <directionalLight />
      <ambientLight />
      <pointLight />
      <hemisphereLight />
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh
        position={[0, 1, 0]}
        ref={meshRef}
        scale={2}
        rotation={[0, (45 * Math.PI) / 180, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#32a897" />
      </mesh>
      <mesh position={[3, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </>
  );
};

export default MyElement3D;

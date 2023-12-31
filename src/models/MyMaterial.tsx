import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useControls } from "leva";
import { Mesh } from "three";
import * as THREE from "three";

type Props = {};

const MyMaterial = (props: Props) => {
  const meshRef1 = useRef<Mesh>(null!);
  const meshRef2 = useRef<Mesh>(null!);

  const { roughness, metalness } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0, min: 0, max: 1, step: 0.01 },
  });

  useEffect(() => {
    meshRef2.current.material = meshRef1.current.material;
  }, []);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={meshRef1} position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          visible={true}
          transparent={false}
          opacity={0.5} // transparent가 true일때 작동
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xff0000}
          emissive={0x00000}
          roughness={roughness}
          metalness={metalness}
          wireframe={false}
        />
      </mesh>

      <mesh ref={meshRef2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
};

export default MyMaterial;

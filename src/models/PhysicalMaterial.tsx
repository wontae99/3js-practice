import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useControls } from "leva";
import { Mesh } from "three";
import * as THREE from "three";

type Props = {};

const PhysicalMaterial = (props: Props) => {
  const meshRef1 = useRef<Mesh>(null!);
  const meshRef2 = useRef<Mesh>(null!);

  const {
    roughness2,
    metalness2,
    clearcoat,
    clearcoatRoughness,
    transmission,
    thickness,
    ior,
  } = useControls({
    roughness2: { value: 0, min: 0, max: 1, step: 0.01 },
    metalness2: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
    transmission: { value: 0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2.333, step: 0.01 },
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
        <meshPhysicalMaterial
          visible={true}
          transparent={false}
          opacity={0.5} // transparent가 true일때 작동
          depthTest={true}
          depthWrite={true}
          side={THREE.DoubleSide}
          color={0xffffff}
          emissive={0x000000}
          roughness={roughness2}
          metalness={metalness2}
          flatShading={false}
          wireframe={false}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}

          transmission={transmission}
          thickness={thickness}
          ior={ior} // 굴절률
        />
      </mesh>

      <mesh ref={meshRef2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
};

export default PhysicalMaterial;

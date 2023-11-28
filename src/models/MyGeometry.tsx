import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef, useEffect } from "react";
import { Mesh } from "three";

type Props = {};

const MyGeometry = (props: Props) => {
  const meshRef = useRef<Mesh>(null!);
  const wireMeshRef = useRef<Mesh>(null!);

  const { xSize, ySize, zSize, xSeg, ySeg, zSeg } = useControls({
    xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    xSeg: { value: 1, min: 1, max: 10, step: 1 }, // segment는 1이상의 정수 값이 어야함
    ySeg: { value: 1, min: 1, max: 10, step: 1 },
    zSeg: { value: 1, min: 1, max: 10, step: 1 },
  });

  useEffect(() => {
    wireMeshRef.current.geometry = meshRef.current.geometry;
  }, [xSize, ySize, zSize, xSeg, ySeg, zSeg]);

  return (
    <>
      <directionalLight />
      <ambientLight />
      <pointLight />
      <hemisphereLight />

      <OrbitControls />
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[xSize, ySize, zSize, xSeg, ySeg, zSeg]} />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <mesh ref={wireMeshRef}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>

      <axesHelper scale={10} />
    </>
  );
};

export default MyGeometry;

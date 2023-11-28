import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef, useEffect } from "react";
import { Mesh } from "three";

type Props = {};

const SphereGeometry = (props: Props) => {
  const meshRef = useRef<Mesh>(null!);
  const wireMeshRef = useRef<Mesh>(null!);

  const {
    radius,
    widthSegments,
    heightSegments,
    piStart,
    piLength,
    thetaStart,
    thetaLength,
  } = useControls({
    radius: { value: 1, min: 0.1, max: 5, step: 0.01 },
    widthSegments: { value: 32, min: 3, max: 256, step: 1 },
    heightSegments: { value: 32, min: 3, max: 256, step: 1 },
    piStart: { value: 0, min: 0, max: 360, step: 0.1 },
    piLength: { value: 360, min: 0, max: 360, step: 0.1 },
    thetaStart: { value: 0, min: 0, max: 180, step: 0.1 },
    thetaLength: { value: 180, min: 0, max: 180, step: 0.1 },
  });

  useEffect(() => {
    wireMeshRef.current.geometry = meshRef.current.geometry;
  }, [radius, widthSegments, heightSegments]);

  return (
    <>
      <directionalLight />
      <ambientLight />
      <pointLight />
      <hemisphereLight />

      <OrbitControls />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry
          args={[
            radius,
            widthSegments,
            heightSegments,
            (piStart * Math.PI) / 180,
            (piLength * Math.PI) / 180,
            (thetaStart * Math.PI) / 180,
            (thetaLength * Math.PI) / 180,
          ]}
        />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <mesh ref={wireMeshRef}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>

      <axesHelper scale={10} />
    </>
  );
};

export default SphereGeometry;

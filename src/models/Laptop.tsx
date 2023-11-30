import { Environment, Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

type Props = {};

const Laptop = (props: Props) => {
  const laptop = useGLTF("./3d/laptop.glb");
  const modelRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(0.12, 0.12, 0.12);
    }
  }, []);

  return (
    <>
      <Environment preset="warehouse" />

      <primitive ref={modelRef} object={laptop.scene} position-y={-0.8}>
        <Html
          wrapperClass="laptop"
          position={[-2.1, 13.3, -10]}
          transform
          distanceFactor={10}
          scale={3.9}
          scale-y={4.6}
        >
          <iframe
            className="w-[1024px] h-[670px] border-none rounded-2xl"
            src="https://wontae99.vercel.app"
          />
        </Html>
      </primitive>
    </>
  );
};

export default Laptop;

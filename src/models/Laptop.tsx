import {
  Environment,
  Html,
  useGLTF,
} from "@react-three/drei";
import React from "react";

type Props = {};

const Laptop = (props: Props) => {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Environment preset="warehouse" />

      <primitive object={laptop.scene} position-y={-1.2}>
        <Html
          wrapperClass="laptop"
          position={[-0.25, 1.9, -1.5]}
          transform
          distanceFactor={4}
          rotation-x={-0.25}
          scale-y={1.2}
        >
          <iframe src="https://wontae99.vercel.app" />
        </Html>
      </primitive>
    </>
  );
};

export default Laptop;

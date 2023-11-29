"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import CameraModel from "@/models/CameraModel";

type Props = {};

const LightPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <h2 className="font-bold text-xl">Perspective Camera</h2>
      <div className="flex flex-col w-full h-1/2 bg-black">
        <Canvas camera={{ fov: 75, position: [7, 7, 0], near: 0.1, far: 20 }}>
          <CameraModel />
        </Canvas>
      </div>
      <h2 className="font-bold text-xl pt-8">Orthographic Camera</h2>
      <div className="flex flex-col w-full h-1/2 bg-black">
        <Canvas
          orthographic
          camera={{ zoom: 100, position: [7, 7, 0], near: 0.1, far: 20 }}
        >
          <CameraModel />
        </Canvas>
      </div>
    </main>
  );
};

export default LightPage;

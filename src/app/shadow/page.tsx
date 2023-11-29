"use client";

import ShadowModel from "@/models/ShadowModel";
import { Canvas } from "@react-three/fiber";
import React from "react";

type Props = {};

const ShadowPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <div className="flex flex-col w-full h-full bg-black">
        <Canvas
          shadows
          camera={{ fov: 75, position: [7, 7, 0], near: 1, far: 100, zoom: 1.5 }}
        >
          <ShadowModel />
        </Canvas>
      </div>
    </main>
  );
};

export default ShadowPage;

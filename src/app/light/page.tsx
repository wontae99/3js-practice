"use client";

import LightModel from "@/models/LightModel";
import { Canvas } from "@react-three/fiber";
import React from "react";

type Props = {};

const LightPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <h2 className="font-bold text-xl">Directional/Point Light</h2>
      <div className="flex flex-col w-full h-3/4 bg-black">
        <Canvas camera={{ fov: 75, position: [7, 7, 0] }}>
          <LightModel />
        </Canvas>
      </div>
    </main>
  );
};

export default LightPage;

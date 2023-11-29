"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import AnimationModel from "@/models/AnimationModel";

type Props = {};

const AnimationPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <div className="flex flex-col w-full h-full bg-black">
        <Canvas camera={{ fov: 100, position: [7, 7, 0], near: 1, far: 100 }}>
          <AnimationModel />
        </Canvas>
      </div>
    </main>
  );
};

export default AnimationPage;

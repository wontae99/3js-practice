"use client";

import { Canvas } from "@react-three/fiber";

import Laptop from "@/models/Laptop";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-[75vh] p-12">
      <Canvas
        camera={{ fov: 45, near: 1, far: 2000 }}
      >
        <Laptop />
      </Canvas>
    </main>
  );
}

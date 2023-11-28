"use client";

import { Canvas } from "@react-three/fiber";

import MyElement3D from "@/models/MyElement3D";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full justify-between p-12">
      <div className="w-full h-full bg-black">
        <Canvas camera={{ near: 0.1 }}>
          <MyElement3D />
        </Canvas>
      </div>
    </main>
  );
}

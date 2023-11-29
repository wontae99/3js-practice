"use client";

import { Canvas } from "@react-three/fiber";

import MyElement3D from "@/models/MyElement3D";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-[80vh] justify-between p-12">
      <div className="w-full h-2/3 bg-black">
        <Canvas camera={{ near: 0.1 }}>
          <MyElement3D />
        </Canvas>
      </div>
    </main>
  );
}

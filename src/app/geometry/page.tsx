"use client";

import { Canvas } from "@react-three/fiber";
import MyGeometry from "@/models/MyGeometry";
import SphereGeometry from "@/models/SphereGeometry";

type Props = {};

const geometryPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <h2 className="text-xl font-bold">BOX GEOMETRY</h2>
      <div className="flex flex-col h-2/3 bg-black">
        <Canvas camera={{ zoom: 3 }}>
          <MyGeometry />
        </Canvas>
      </div>
      <h2 className="text-xl font-bold pt-8">SPHERE GEOMETRY</h2>
      <div className="flex flex-col bg-black h-2/3">
        <Canvas camera={{ zoom: 3 }}>
          <SphereGeometry />
        </Canvas>
      </div>
    </main>
  );
};

export default geometryPage;

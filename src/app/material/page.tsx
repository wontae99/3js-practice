"use client";

import MyMaterial from "@/models/MyMaterial";
import PhysicalMaterial from "@/models/PhysicalMaterial";
import { Canvas } from "@react-three/fiber";

type Props = {};

const materialPage = (props: Props) => {
  return (
    <main className="w-full h-[80vh]">
      <h2 className="font-bold text-xl">Mesh Standard Material</h2>
      <div className="flex flex-col w-full h-2/3 bg-black">
        <Canvas
          camera={{
            near: 0.1,
            zoom: 4,
            rotation: [0, (45 * Math.PI) / 180, 0],
          }}
        >
          <MyMaterial />
        </Canvas>
      </div>
      <h2 className="font-bold text-xl pt-8">Mesh Physical Material</h2>
      <div className="flex flex-col w-full h-2/3 bg-black">
        <Canvas camera={{ near: 0.1, zoom: 4 }}>
          <PhysicalMaterial />
        </Canvas>
      </div>
    </main>
  );
};

export default materialPage;

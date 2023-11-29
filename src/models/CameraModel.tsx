import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type Props = {};

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 1.2,
});

const CameraModel = (props: Props) => {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot")!;
    // 그룹 객체의 이름으로 객체를 가져옴
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);

    const target = new THREE.Vector3();
    // 카메라 위치를 빨간 구 World 좌표계 좌표로 설정
    smallSpherePivot.children[0].getWorldPosition(target);
    state.camera.position.copy(target);

    // 카메라가 구의 앞(ghostSphere)를 바라보도록(lookAt) 설정
    const ghostSpherePivot = state.scene.getObjectByName("ghostSpherePivot")!;
    ghostSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50 + 30);
    ghostSpherePivot.children[0].getWorldPosition(target);
    state.camera.lookAt(target);
  }); // 매 프레임 마다 callback function 호출되어 실행

  const light = useRef<THREE.RectAreaLight>(null!);

  return (
    <>
      <OrbitControls />

      <rectAreaLight
        color="#ffffff"
        intensity={60}
        width={1}
        height={3}
        ref={light}
        position={[0, 5, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />

      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2c3e50"
          roughness={0.5}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* 8개의 고리(torus) 생성 */}
      {new Array(8).fill(null).map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh
              geometry={torusGeometry}
              material={torusMaterial}
              position={[3, 0.5, 0]}
            ></mesh>
          </group>
        );
      })}
      <group name="smallSpherePivot">
        <mesh position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="red" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>

      <group name="ghostSpherePivot">
        <object3D position={[3, 0.5, 0]} />
      </group>
    </>
  );
};

export default CameraModel;

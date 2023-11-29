import React, { useEffect, useRef } from "react";

import { OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";

type Props = {};

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

const LightModel = (props: Props) => {
  const { directionalLightIntensity, pointLightIntensity } = useControls({
    directionalLightIntensity: { value: 0, min: 0, max: 2, step: 0.5 },
    pointLightIntensity: { value: 0, min: 0, max: 2, step: 0.5 },
  });

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot")!;
    // 그룹 객체의 이름으로 객체를 가져옴
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);
    smallSpherePivot.children[0].getWorldPosition(
      light.current.target.position
    );
    smallSpherePivot.children[0].getWorldPosition(light2.current.position);
  }); // 매 프레임 마다 callback function 호출되어 실행

  const light = useRef<THREE.DirectionalLight>(null!);
  const light2 = useRef<THREE.PointLight>(null!);

  useHelper(light, THREE.DirectionalLightHelper);
  useHelper(light2, THREE.PointLightHelper, 0.5);
  // 광원의 방향 표시 helper

  // target을 장면에 추가
  const { scene } = useThree();
  useEffect(() => {
    let current = light.current;
    scene.add(current.target);
    return () => {
      scene.remove(current.target);
    };
  }, [light, scene]);

  return (
    <>
      <OrbitControls />

      {/* <ambientLight color="#ffffff" intensity={10} /> */}
      {/* <hemisphereLight args={["#00f", "#f00", 2]} /> */}
      <directionalLight
        ref={light}
        color={0xffffff}
        intensity={directionalLightIntensity}
        position={[0, 5, 0]}
        target-position={[1, 0, 0]}
      />
      <pointLight
        ref={light2}
        color="#ffffff"
        position={[0, 5, 0]}
        intensity={pointLightIntensity}
        distance={5}
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
    </>
  );
};

export default LightModel;

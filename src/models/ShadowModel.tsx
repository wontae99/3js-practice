import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

type Props = {};

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 1.2,
});

const ShadowModel = (props: Props) => {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot")!;
    // 그룹 객체의 이름으로 객체를 가져옴
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);
    smallSpherePivot.children[0].getWorldPosition(
      light.current.target.position
    );
  }); // 매 프레임 마다 callback function 호출되어 실행

  const light = useRef<THREE.DirectionalLight>(null!);
  const shadowCamera = useRef<THREE.CameraHelper>(null!);

  const { scene } = useThree();
  useEffect(() => {
    let current = light.current;
    scene.add(current.target);
    shadowCamera.current = new THREE.CameraHelper(light.current.shadow.camera);
    scene.add(shadowCamera.current);

    return () => {
      scene.remove(current.target);
      scene.remove(shadowCamera.current);
    };
  }, [light, scene]);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <directionalLight
        ref={light}
        castShadow
        color={0xffffff}
        intensity={1.5}
        position={[0, 5, 0]}
        target-position={[0, 0, 0]}
      />

      <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2c3e50"
          roughness={0.5}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh castShadow receiveShadow position-y={1.7}>
        <torusKnotGeometry args={[1, 0.2, 128, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* 8개의 고리(torus) 생성 */}
      {new Array(10).fill(null).map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh
              castShadow
              receiveShadow
              geometry={torusGeometry}
              material={torusMaterial}
              position={[3, 0.5, 0]}
            ></mesh>
          </group>
        );
      })}
      <group name="smallSpherePivot">
        <mesh castShadow receiveShadow position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="red" roughness={0.2} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
};

export default ShadowModel;

import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const AnimationModel = (props: Props) => {
  const group = useRef<THREE.Group>(null!);
  const model = useGLTF("./3d/animation/model.glb");
  const animation = useAnimations(model.animations, model.scene);
  const { actionName } = useControls({
    actionName: {
      value: animation.names[1],
      options: animation.names,
    },
  });
  console.log(animation);

  useEffect(() => {
    const action = animation.actions[actionName];
    // 새로운 action이 선택될시, 원래 실행되던 action 리셋 후
    // 0.5텀을 갖고 새로운 action 실행
    action?.reset().fadeIn(0.5).play();

    return () => {
      // clean-up function을 통해 이전 action이 0.5에 걸쳐 fade-out되도록 설정
      action?.fadeOut(0.5);
    };
  }, [actionName, animation.actions]);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const modelHeight = group.current.scale.y;
    setHeight(modelHeight);

    console.log("Model Height:", modelHeight);
  }, [model.scene]);

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />

      <group ref={group}>
        <primitive object={model.scene} scale={5} position-y={-height * 5} />
      </group>
    </>
  );
};

export default AnimationModel;

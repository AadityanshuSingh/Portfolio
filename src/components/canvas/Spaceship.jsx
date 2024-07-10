import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import Loader from "../CanvasLoader";

const Spaceship = () => {
  const spaceShip = useGLTF("./spaceship/scene.gltf");

  return (
    <>
      {/* <Spaceship /> */}
      <mesh>
        <ambientLight intensity={3} groundColor={"blue"} />
        <pointLight intensity={1} />
        <primitive object={spaceShip.scene} scale={0.5} position={[0, 0, 0]} />
      </mesh>
    </>
  );
};

const SpaceShipCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const handleContextMenu = (event) => {
      event.stopPropagation(); // Allow right-click context menu
    };

    if (canvasElement) {
      canvasElement.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []);
  return (
    <Box
      position="relative"
      height="500px"
      width="500px"
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
          color: "purple",
        },
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [10, 10, 10], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        ref={canvasRef}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 16}
          />
          <Spaceship />
        </Suspense>
        <Preload all />
      </Canvas>
    </Box>
  );
};

export default SpaceShipCanvas;

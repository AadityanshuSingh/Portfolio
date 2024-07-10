import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span style={{ color: "white", fontWeight: "800" }}>
        {progress.toFixed(2)} % loaded
      </span>
    </Html>
  );
};

export default CanvasLoader;

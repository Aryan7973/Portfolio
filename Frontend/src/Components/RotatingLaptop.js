import React, { Suspense } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import laptopModel from "../Assets/models/macbook2.glb";
import { useRef,useState, useEffect } from "react";

const LaptopModel = () => {
  const { scene } = useGLTF(laptopModel);
  const modelRef = useRef();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Apply wobble effect
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x = mousePosition.y * 0.1;
      modelRef.current.rotation.y = mousePosition.x * 0.1;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={30} position={[0, -2, 0]} />;
};

const RotatingLaptop = () => {
  return (
    <div className="laptop ">
      <div className="">
        <Canvas
          camera={{ position: [4, 1.5, 10], fov: 60 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <LaptopModel />
          </Suspense>
          
        </Canvas>
      </div>
    </div>
  );
};

export default RotatingLaptop;

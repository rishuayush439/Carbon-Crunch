
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useTexture, Environment } from "@react-three/drei";
import { Vector3 } from "three";
import { cn } from "@/lib/utils";

const CubeObject = ({ position = [0, 0, 0], color = "white" }) => {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      position={position as [number, number, number]} // Fixed here - explicitly casting to tuple
      ref={mesh}
      scale={clicked ? 1.2 : 1}
      onClick={() => setClick(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#ff8800" : color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

const FloatingElement = () => {
  const mesh = useRef(null);
  const positionRef = useRef(new Vector3(-4, 0, 0));
  const targetPositionRef = useRef(new Vector3(4, 0, 0));
  const speed = 0.005;
  
  useFrame(() => {
    if (mesh.current) {
      // Move towards target
      positionRef.current.lerp(targetPositionRef.current, speed);
      
      // If we reached the target, reverse direction
      if (positionRef.current.distanceTo(targetPositionRef.current) < 0.1) {
        targetPositionRef.current.x *= -1;
      }
      
      mesh.current.position.copy(positionRef.current);
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={[-4, 0, 0]}>
      <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
      <meshStandardMaterial color="#4ade80" metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

const ThreeDAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full h-[400px] md:h-[600px]", className)}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        
        <CubeObject position={[-2, 0, 0]} color="#4ade80" />
        <CubeObject position={[2, 0, 0]} color="#22c55e" />
        <FloatingElement />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDAnimation;

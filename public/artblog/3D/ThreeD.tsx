import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Component, ReactNode } from "react";
import { Group, Vector3 } from "three";
import { PerspectiveCamera } from "@react-three/drei";

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function LShape() {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.x += 0.003;
    groupRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={groupRef} position={new Vector3(0, 0, 0)}>
      <mesh position={new Vector3(0, -0.5, -0.5)}>
        <boxGeometry args={[0.4, 1, 1]} />
        <meshPhongMaterial color={0x969696} />
      </mesh>
      <mesh position={new Vector3(0, 0.5, -0.5)}>
        <boxGeometry args={[0.4, 1, 1]} />
        <meshPhongMaterial color={0x969696} />
      </mesh>
      <mesh position={new Vector3(0, 0.5, 0.5)}>
        <boxGeometry args={[0.4, 1, 1]} />
        <meshPhongMaterial color={0x969696} />
      </mesh>
      <mesh position={new Vector3(0, -0.5, 0.5)}>
        <boxGeometry args={[0.45, 0.85, 0.85]} />
        <meshPhongMaterial color={0x0078f9} />
      </mesh>
      {/* <mesh position={new Vector3(0, 0, 0)} scale={new Vector3(0.1, 0.1, 0.1)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={0xff0000} />
      </mesh> */}
    </group>
  );
}

export default function ThreeD() {
  return (
    <WebGLErrorBoundary fallback={<div style={{ width: "100%", height: "28vh" }} />}>
      <div style={{ width: "100%", height: "28vh" }}>
        <Canvas gl={{ failIfMajorPerformanceCaveat: false }}>
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 8]} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <LShape />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}

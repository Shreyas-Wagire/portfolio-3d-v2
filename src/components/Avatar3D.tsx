
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function BoyAvatar() {
    const { scene } = useGLTF('/robot.glb'); // Ensure the model is in the public folder

    // Adjust rotation and position to face the camera
    scene.rotation.y = Math.PI / 2; // Rotate 90 degrees along the Y-axis
    scene.position.set(0, -1, 0); // Adjust the model’s position if needed

    return <primitive object={scene} scale={2} />;
}

const Avatar3D = () => {
    return (
        <div className="h-[300px] w-full rounded-xl overflow-hidden">
            <Canvas camera={{ position: [20, 1, 3], fov: 8 }}>
                {/* Ambient light for overall lighting */}
                <ambientLight intensity={0.3} />

                {/* Directional light to create a spotlight effect */}
                <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />

                {/* Additional point lights for balanced highlights */}
                <pointLight position={[-5, -5, 5]} intensity={0.5} />
                <pointLight position={[0, 5, -5]} intensity={0.5} />

                <BoyAvatar />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Avatar3D;

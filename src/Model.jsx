import { useGLTF } from '@react-three/drei';

export default  function SpaceshipModel() {
  const { scene } = useGLTF('/spaceship.glb'); // Leading slash is important
  return <primitive object={scene} />;
}

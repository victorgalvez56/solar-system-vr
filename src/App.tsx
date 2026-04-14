import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore, XROrigin } from '@react-three/xr';
import { SolarSystem } from './components/SolarSystem';
import { Stars } from './components/Stars';
import './App.css';

const store = createXRStore();

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars />
      <SolarSystem />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={100}
      />
    </>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <button
        onClick={() => store.enterVR()}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 1000,
          padding: '15px 30px',
          fontSize: '18px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
        }}
      >
        Entrar en VR
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 1000,
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          background: 'rgba(0,0,0,0.7)',
          padding: '15px',
          borderRadius: '10px',
          maxWidth: '300px',
        }}
      >
        <h3 style={{ margin: '0 0 10px 0', color: '#667eea' }}>Sistema Solar VR</h3>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Click en un planeta para ver info
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Arrastra para rotar la vista
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          Scroll para hacer zoom
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#667eea' }}>
          En Quest: Presiona "Entrar en VR"
        </p>
      </div>

      <Canvas
        camera={{ position: [0, 20, 40], fov: 60 }}
        style={{ background: '#000000' }}
      >
        <XR store={store}>
          <XROrigin position={[0, 0, 30]} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  );
}

export default App;

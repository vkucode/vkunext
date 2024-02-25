"use client"
import React, {useRef, useEffect, useState} from 'react'
import Image from 'next/image'
import { useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { ChromaticAberration, Bloom, EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from './scss/like.module.scss'
import 'animate.css'
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const Like = () => {
  const model3d = "flash.gltf";
  const [rotation, setRotation] = useState([0, -0.2, 0]); // Rotație spre stânga
  const [scale, setScale] = useState(1);
  const likeBlockRef = useRef(null); // Ref pentru blocul întreg

  useEffect(() => {
    ScrollTrigger.create({
      trigger: likeBlockRef.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => setRotation([0, -0.2, 0]), // Resetare la valorile inițiale la intrare, dacă e necesar
      onLeave: () => setRotation([0, -0.2, 0]), // Resetare la valorile inițiale la ieșire, dacă e necesar
      onUpdate: (self) => {
        const progress = self.progress; // Valoarea progresului de la 0 la 1
        const rotationValue = progress * 2 * Math.PI; // Rotire completă (360 grade) în radiani
        // Aplicăm rotația doar pe axa X, menținând celelalte axe la valorile lor inițiale sau la 0
        setRotation([0, rotationValue, 0]); // Ajustează a doua valoare dacă vrei să modifici și axele Y sau Z
      }
    });
  }, []);

  const Model = ({ rotation, modelImport }) => {
    const model = useLoader(GLTFLoader, modelImport);
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.needsUpdate = true;
        child.material.metalness = 0.1;
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.roughness = 0.5;
      }
    });
    return <primitive object={model.scene} scale={scale} rotation={rotation} />;
  };
  const CustomOrbitControls = () => {
    const controls = useRef();
    const { camera } = useThree();

    useEffect(() => {
      if (controls.current) {
        controls.current.minDistance = 5.5;
        controls.current.maxDistance = 5.5;
        controls.current.minPolarAngle = Math.PI / 2;
        controls.current.maxPolarAngle = Math.PI / 2;
        controls.current.enablePan = false;
      }
    }, []);

    return <OrbitControls ref={controls} args={[camera]} />;

    /**----------------------------------------------------------------- */



  };
  return (
    <>
   <div ref={likeBlockRef} className={styles.likeMainBlock}>
    <div className='w-full flex justify-end items-center'>
      <span className={styles.likeFeel}>© Feel your dreams power with . . .</span>
    </div>
    <div className={styles.likeBlock}>
      <div className={styles.likeText}>
        <span className={`${styles.line1}`}>A passionate <span className='text-purple-400'>team</span> </span>
        <span className={`${styles.line2}`}>fully committed</span>
        <span className={`${styles.line3}`}>to <span className='text-purple-400'>your</span> brand's vision</span>
      </div>
      <div className={styles.modelLike}>
        <Canvas style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} castShadow />
          <Suspense fallback={null}>
            <Model rotation={rotation} scale={scale} modelImport={model3d} />
            <CustomOrbitControls />
            <EffectComposer>
              <Bloom luminanceThreshold={0.25} intensity={1} luminanceSmoothing={0.03} height={300} />
              <ChromaticAberration offset={[0.003, 0.003]} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </div>
    </div>
    
    </>

                    
  )
}

export default Like
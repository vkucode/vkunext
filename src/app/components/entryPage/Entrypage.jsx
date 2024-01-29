"use client"
import React, {useRef, useEffect, useState} from 'react'
import { useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { ChromaticAberration, Bloom, EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styles from './entryPage.module.css'

import 'animate.css'

const EntrypPageLoading = () => {
    const logoVku = "/logoNOBG.png";
    const model3d = "flash.gltf";
    const [entryPageState, setEntryPageState] = useState("");
    const [rotation, setRotation] = useState([0, -0.2, 0]); // Rotație spre stânga
    const [scale, setScale] = useState(1);
    const [textSpan, setTextSpan] = useState("energy");
    const [goBtn, setGoBTN] = useState("hidden");


    setTimeout(() => {
      setTextSpan("power");
      setGoBTN("animate__fadeInUp")
    }, 800);
    
    setTimeout(() => {
      setGoBTN("animate__fadeInUp")
    }, 1500);


    const handleStartClick = () => {
      const entryPageContainer = document.getElementById('entrypageContainer');
      // Aplică animația de fade out
      entryPageContainer.classList.add("animate__fadeOutUp")

      // Ascunde containerul după ce animația este completă
      setTimeout(() => {
          if (entryPageContainer) {
              entryPageContainer.style.display = 'none';
          }
      }, 1500); // Presupunem că durata animației este de 1000ms
  };
    

    const Model = ({ rotation, modelImport }) => {
        const model = useLoader(GLTFLoader, modelImport);
        model.scene.traverse(child => {
            if (child.isMesh) { 
            child.material.needsUpdate = true;
            child.material.metalness = 0.1; // Ajustează după necesitate
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.roughness = 0.5; // Ajustează după necesitate
          }
        });
        return <primitive object={model.scene} scale={scale} rotation={rotation} modelImport={modelImport} />;
      };

    const CustomOrbitControls = () => {
        const controls = useRef();
        const { camera } = useThree();
      
        useEffect(() => {
          if (controls.current) {
            // Setează limitele pentru zoom
            controls.current.minDistance = 5.5;
            controls.current.maxDistance = 5.5;
      
            // Limitarea rotației pe verticală (sus-jos)
            controls.current.minPolarAngle = Math.PI / 2; // Limită la orizontală
            controls.current.maxPolarAngle = Math.PI / 2; // Limită la orizontală
      
            // Dezactivează pan (mutarea în stânga/dreapta)
            controls.current.enablePan = false;
          }
        }, []);
      
        return <OrbitControls ref={controls} args={[camera]} />;
      };
  return (
    <>
    
    <div className={`${styles.containerObject} container-fluid animate__animated`} id='entrypageContainer'>
        <div className='row'>
            <div className='col-12'>
                <div>
                    <h1 className={`${styles.textEntry} animate__animated animate__fadeInUp`}>feel&nbsp;the&nbsp;<img src={logoVku} alt="" width={"40px"} />&nbsp;<span className={`${styles.textSpan}`}>{textSpan}</span></h1>
                </div>
                <div className={`${styles.thunderObject}`}>
                <Canvas style={{width: "100%" ,height: "400px;"}}>
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
              <div className='col-12 flex flex-col justify-center items-center h-10'>
                <button 
                        className={`${styles.goBTN} animate__animated ${goBtn}`} 
                        type='button' 
                        id='startBTN'
                        onClick={handleStartClick} // Adăugați handlerul de click aici
                    >
                        Let's go
                    </button>
              </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default EntrypPageLoading
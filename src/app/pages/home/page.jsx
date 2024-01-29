"use client"
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import styles from './home.module.scss'

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Funcția care încearcă să pornească redarea video
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error("Eroare la pornirea videoclipului", err);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <header className={styles.header}>
        <div className={styles.overlayVideo}></div>
       <video 
        ref={videoRef} 
        src="/vkucodeEntryVideo.mp4" 
        className={styles.videoHeader} 
        autoPlay 
        loop 
        muted 
        playsInline // Aceasta proprietate este importantă pentru dispozitivele mobile
        controls={false} // Dezactivează controalele
      ></video>
        <div className={styles.titleHeaderCenter}>

            {/* <Image src='/logoNOBG.png' width={200} height={200} /> */}
            <div><span>for</span>&nbsp;<Image src='/logoNOBG.png' width={50} height={50} alt=''/>&nbsp;<span>the&nbsp;sky&nbsp;is</span></div>
            <div><span>not&nbsp;the&nbsp;limit</span></div>
        </div>
        <div className={styles.subHeader}>
          <h1>VKU CODE</h1>
          <h2>Paris Based Digital Design Agency</h2>
        </div>
    </header>
  )
}
export default HomePage;
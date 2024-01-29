"use client"
import React from 'react'
import Image from 'next/image'
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <header className={styles.header}>
        <div className={styles.overlayVideo}></div>
        <video src="/vkucodeEntryVideo.mp4" className={styles.videoHeader} autoPlay loop muted></video>
        <div className={styles.titleHeaderCenter}>

            {/* <Image src='/logoNOBG.png' width={200} height={200} /> */}
            <h1>VKU CODE</h1>
            <span>for us the sky is not the limit</span>
        </div>
        <div className={styles.subHeader}>
          <h2>Paris based Digital Design Agency</h2>
        </div>
    </header>
  )
}
export default HomePage;
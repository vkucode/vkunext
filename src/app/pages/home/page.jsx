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
"use client"
import React from 'react'
import styles from './scss/footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/logoNOBG.png" width={150} height={150} alt='vkucode logo' />
      </div>
      <div></div>
    </div>
  )
}

export default Footer
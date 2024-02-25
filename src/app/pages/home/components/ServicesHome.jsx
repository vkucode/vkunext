"use client"
import React from 'react'
import styles from './scss/serviceshm.module.scss'
import { LinkHome } from './Links'
const ServicesHome = () => {
  return (
    <>
    <div className={styles.mainSection}>
        <div className={styles.headerSection}>
            <h1>Fast Shortcuts</h1>
            <div className={styles.line}></div>
        </div>
        <div>
            <LinkHome />
        </div>
    </div>
    </>
  )
}

export default ServicesHome
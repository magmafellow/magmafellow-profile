'use client'

import styles from './content.module.scss'
import { useEffect, useState } from 'react'

export default function Content({ markup }: { markup: string }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const blogContent = document.querySelector('#blog-content')
    blogContent!.innerHTML = markup
    setLoaded(true)
  }, [loaded])

  return loaded ? (
    <div id="blog-content"></div>
  ) : (
    <div>
      <div id="blog-content"></div>
      <div className={`${styles.skeleton_title} shim-carcass shim-effect animate`}></div>
      <div className={`${styles.skeleton_text} shim-carcass shim-effect animate`}></div>
      <div className={`${styles.skeleton_title} ${styles.skeleton_title_wide} shim-carcass shim-effect animate`}></div>
      <div className={`${styles.skeleton_text} ${styles.skeleton_text_high} shim-carcass shim-effect animate`}></div>
      <div className={`${styles.skeleton_title} ${styles.skeleton_title_mediumm} shim-carcass shim-effect animate`}></div>
      <div className={`${styles.skeleton_text} shim-carcass shim-effect animate`}></div>
    </div>
  )
}

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
      <div className={`${styles.skeleton} shim-carcass shim-effect animate`}></div>
    </div>
  )
}

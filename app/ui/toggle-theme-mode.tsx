'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMoonSharp } from 'react-icons/io5'
import { GiUbisoftSun } from 'react-icons/gi'

const ThemeToggle = ({ className }: { className: string }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className={className} type="button">
      {theme === 'light' ? (
        <IoMoonSharp className="" onClick={() => setTheme('dark')} />
      ) : (
        <GiUbisoftSun className="" onClick={() => setTheme('light')} />
      )}
    </button>
  )
}

export default ThemeToggle

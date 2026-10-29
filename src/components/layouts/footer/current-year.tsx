"use client"

import { useEffect, useState } from "react"

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setYear(new Date().getFullYear())
    }, 0)

    return () => clearTimeout(timeout)
  }, [])

  if (year === null) return null

  return <>{year}</>
}

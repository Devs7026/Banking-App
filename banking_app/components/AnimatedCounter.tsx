'use client'

import React, { useEffect, useRef } from 'react'
import { formatAmount } from '@/lib/utils'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter) return

    const target = amount
    const duration = 1000 
    const start = 0
    const increment = target / (duration / 16) // 60fps

    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = formatAmount(target)
        clearInterval(timer)
      } else {
        counter.textContent = formatAmount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [amount])

  return <span ref={counterRef}>{formatAmount(0)}</span>
}

export default AnimatedCounter


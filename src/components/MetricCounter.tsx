import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: string
  label: string
  sub: string
  index: number
}

export default function MetricCounter({ value, label, sub, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      // Animate numeric part
      const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
      const suffix = value.replace(/[0-9.]/g, '')
      if (isNaN(numeric)) { setDisplay(value); return }
      const duration = 1200
      const steps = 40
      const increment = numeric / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= numeric) {
          setDisplay(value)
          clearInterval(interval)
        } else {
          setDisplay(current.toFixed(numeric < 10 ? 1 : 0) + suffix)
        }
      }, duration / steps)
      return () => clearInterval(interval)
    }, index * 150)
    return () => clearTimeout(timeout)
  }, [isInView, value, index])

  return (
    <div
      ref={ref}
      className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center overflow-hidden group hover:border-cyan-500/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          {display}
        </div>
        <div className="text-white font-semibold text-sm mt-2">{label}</div>
        <div className="text-slate-500 text-xs mt-0.5 font-mono">{sub}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  )
}

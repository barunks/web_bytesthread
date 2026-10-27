import { useEffect, useState } from 'react'

const buckets = ['<100ns', '200ns', '500ns', '1μs', '2μs', '5μs', '>5μs']

function randomBuckets() {
  // Weighted toward fast buckets
  return [
    Math.floor(Math.random() * 40 + 60),
    Math.floor(Math.random() * 30 + 40),
    Math.floor(Math.random() * 20 + 20),
    Math.floor(Math.random() * 15 + 10),
    Math.floor(Math.random() * 8 + 4),
    Math.floor(Math.random() * 4 + 1),
    Math.floor(Math.random() * 2),
  ]
}

export default function LatencyHistogram() {
  const [values, setValues] = useState(randomBuckets())

  useEffect(() => {
    const id = setInterval(() => setValues(randomBuckets()), 1200)
    return () => clearInterval(id)
  }, [])

  const max = Math.max(...values)

  return (
    <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-400 uppercase tracking-widest text-[10px] font-mono">Latency Distribution</span>
        <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </span>
      </div>
      <div className="flex items-end gap-1.5 h-24">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t transition-all duration-700 ease-out"
              style={{
                height: `${(v / max) * 88}px`,
                background: i < 3
                  ? 'linear-gradient(to top, #10b981, #34d399)'
                  : i < 5
                  ? 'linear-gradient(to top, #0ea5e9, #38bdf8)'
                  : 'linear-gradient(to top, #f59e0b, #fbbf24)',
                opacity: 0.85,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1">
        {buckets.map((b, i) => (
          <div key={i} className="flex-1 text-center text-[8px] text-slate-600 font-mono truncate">{b}</div>
        ))}
      </div>
    </div>
  )
}

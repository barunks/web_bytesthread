import { useEffect, useState } from 'react'

interface Level {
  price: number
  size: number
  total: number
}

function randomLevel(base: number, side: 'bid' | 'ask', i: number): Level {
  const offset = side === 'ask' ? i * 0.25 + 0.1 : -(i * 0.25 + 0.1)
  const price = parseFloat((base + offset).toFixed(2))
  const size = parseFloat((Math.random() * 5 + 0.1).toFixed(3))
  return { price, size, total: size * (i + 1) }
}

export default function LiveOrderBook() {
  const [base, setBase] = useState(43250.5)
  const [asks, setAsks] = useState<Level[]>([])
  const [bids, setBids] = useState<Level[]>([])

  useEffect(() => {
    const update = () => {
      const newBase = base + (Math.random() - 0.5) * 2
      setBase(newBase)
      setAsks(Array.from({ length: 8 }, (_, i) => randomLevel(newBase, 'ask', i)))
      setBids(Array.from({ length: 8 }, (_, i) => randomLevel(newBase, 'bid', i)))
    }
    update()
    const id = setInterval(update, 800)
    return () => clearInterval(id)
  }, [])

  const maxTotal = Math.max(...asks.map(a => a.total), ...bids.map(b => b.total))

  return (
    <div className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 font-mono text-xs">
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-400 uppercase tracking-widest text-[10px]">BTC/USDT Order Book</span>
        <span className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-3 text-slate-600 text-[10px] mb-1 px-1">
        <span>Price</span><span className="text-center">Size</span><span className="text-right">Depth</span>
      </div>

      {/* Asks */}
      <div className="space-y-0.5 mb-1">
        {[...asks].reverse().map((a, i) => (
          <div key={i} className="relative grid grid-cols-3 px-1 py-0.5 rounded overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 bg-red-500/10"
              style={{ width: `${(a.total / maxTotal) * 100}%` }}
            />
            <span className="text-red-400 relative z-10">{a.price.toFixed(2)}</span>
            <span className="text-slate-300 text-center relative z-10">{a.size.toFixed(3)}</span>
            <span className="text-slate-500 text-right relative z-10">{a.total.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Spread */}
      <div className="text-center py-1 text-cyan-400 font-bold text-sm border-y border-cyan-500/20 my-1">
        {base.toFixed(2)}
        <span className="text-slate-600 text-[10px] ml-2">spread: {(asks[0]?.price - bids[0]?.price || 0).toFixed(2)}</span>
      </div>

      {/* Bids */}
      <div className="space-y-0.5 mt-1">
        {bids.map((b, i) => (
          <div key={i} className="relative grid grid-cols-3 px-1 py-0.5 rounded overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 bg-emerald-500/10"
              style={{ width: `${(b.total / maxTotal) * 100}%` }}
            />
            <span className="text-emerald-400 relative z-10">{b.price.toFixed(2)}</span>
            <span className="text-slate-300 text-center relative z-10">{b.size.toFixed(3)}</span>
            <span className="text-slate-500 text-right relative z-10">{b.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

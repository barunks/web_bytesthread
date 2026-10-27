import { tickerItems } from '../data/content'

export default function TickerTape() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="fixed top-16 left-0 right-0 bg-surface/80 backdrop-blur-sm border-b border-cyan-500/10 overflow-hidden py-2 z-40">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => {
          const parts = item.split('  ')
          const isUp = item.includes('+')
          return (
            <span key={i} className="inline-flex items-center gap-2 px-5 text-xs font-mono">
              <span className="text-cyan-400 font-semibold">{parts[0]}</span>
              <span className="text-white">{parts[1]}</span>
              <span className={isUp ? 'text-emerald-400' : 'text-red-400'}>{parts[2]}</span>
              <span className="text-slate-700 ml-3">│</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

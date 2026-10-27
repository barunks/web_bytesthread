import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-500/10 border border-brand-500/20 rounded-2xl overflow-hidden">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-card px-6 py-5 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold font-mono text-gradient">{s.value}</div>
          <div className="text-sm text-white font-medium mt-1">{s.label}</div>
          <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
        </motion.div>
      ))}
    </div>
  )
}

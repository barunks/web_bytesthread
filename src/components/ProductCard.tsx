import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  title: string
  subtitle: string
  category: string
  badge: string
  headline: string
  description: string
  bullets: string[]
  tech: string[]
  linkTo?: string
  index?: number
}

export default function ProductCard({
  title, subtitle, category, badge, headline,
  description, bullets, tech, linkTo, index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border-glow rounded-2xl p-6 lg:p-8 hover:border-brand-500/60 transition-all duration-300 group"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">{category}</span>
          <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono">
          {badge}
        </span>
      </div>

      <p className="text-brand-400 font-semibold text-sm mb-3">{headline}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2 mb-5">
        {bullets.slice(0, 4).map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-surface text-xs font-mono text-slate-400 border border-white/5">
            {t}
          </span>
        ))}
      </div>

      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium group-hover:gap-3 transition-all"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      )}
    </motion.div>
  )
}

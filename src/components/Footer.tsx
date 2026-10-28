import { Link } from 'react-router-dom'
import { Mail, Globe } from 'lucide-react'
import { navLinks, company } from '../data/content'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-cyan-500/10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.webp" alt="BytesThread" className="h-8 w-auto" />
              <span className="font-black text-white">BytesThread</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Ultra-low-latency trading infrastructure, quantitative strategies, and enterprise risk platforms.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-cyan-400">Systems Online</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={14} className="text-cyan-500" />
                <div>
                  <div className="text-xs text-slate-600 font-mono">General</div>
                  {company.email}
                </div>
              </a>
              <a href={`mailto:${company.salesEmail}`} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={14} className="text-cyan-500" />
                <div>
                  <div className="text-xs text-slate-600 font-mono">Sales</div>
                  {company.salesEmail}
                </div>
              </a>
              <a href={company.website} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Globe size={14} className="text-cyan-500" /> www.bytesthread.com
              </a>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} BytesThread. All rights reserved.</p>
          <p className="text-xs text-slate-700 font-mono">Latency is a feature, not a metric.</p>
        </div>
      </div>
    </footer>
  )
}

export const company = {
  name: 'BytesThread',
  tagline: 'Engineering the Speed of Markets',
  description:
    'We build ultra-low-latency trading infrastructure, quantitative strategies, and enterprise risk platforms for the world\'s most demanding financial environments.',
  email: 'info@bytesthread.com',
  salesEmail: 'sales@bytesthread.com',
  website: 'https://www.bytesthread.com',
}

export const stats = [
  { value: '<5μs', label: 'Tick-to-Trade Latency', sub: 'p50 target' },
  { value: '700ns', label: 'IPC Ring Transport', sub: 'p50 achieved' },
  { value: '100ns', label: 'OMS Risk Gate', sub: 'p50 achieved' },
  { value: '12/12', label: 'Test Suite', sub: '100% passing' },
]

export const products = [
  {
    id: 'ultrafasthft',
    title: 'UltraFastHFT',
    subtitle: 'Production-Grade Ultra-Low-Latency Trading Platform',
    category: 'HFT / Equities / Futures',
    badge: 'C++23',
    color: 'brand',
    icon: 'Zap',
    headline: 'Sub-5 Microsecond Tick-to-Trade. Zero Allocation Hot Paths.',
    description:
      'A deterministic, multi-asset electronic trading platform built in modern C++ for Linux x86-64. Microservices architecture with SPSC lock-free IPC, a state-machine OMS, 7-layer pre-trade risk controls, and a real-time operational dashboard — all on a single zero-copy data path.',
    bullets: [
      'p50 IPC latency: 700 ns — measured on production hardware',
      'p50 OMS risk gate: 100 ns with 7-layer pre-trade guardrails',
      'POSIX shared-memory SPSC ring buffers — cache-line aligned, lock-free',
      'Microservices: Market Data Gateway → Strategy → OMS → Execution',
      'Time-series archiving with nanosecond precision via ILP protocol',
      'Binary event journal with CRC32 torn-write protection',
      '100% deterministic replay — hash-equivalent to live execution',
    ],
    strategies: [
      'Cross-Venue Spatial Arbitrage',
      'Cash-and-Carry / Futures Basis Arb',
      'Triangular FX Arbitrage',
      'Statistical Pairs Trading',
      'Microprice Inventory-Skewed Market Making',
      'Order Flow Imbalance Trend Engine',
      'EMA Mean-Reversion Z-Score',
    ],
    tech: ['POSIX SHM', 'SPSC Queues', 'Aeron IPC', 'Microservices', 'WebSocket', 'Time-Series DB'],
  },
  {
    id: 'arbtrading',
    title: 'ArbTrading Engine',
    subtitle: 'Multi-Exchange Cryptocurrency Arbitrage System',
    category: 'Crypto / Arbitrage',
    badge: 'C++23',
    color: 'accent',
    icon: 'TrendingUp',
    headline: 'Microsecond Crypto Arbitrage. Any Exchange. Fully Configurable.',
    description:
      'An ultra-low-latency C++23 cryptocurrency arbitrage system with native WebSocket connectivity to any exchange. Lock-free SPSC queues, thread-local object pools, CPU affinity pinning, and ML-based predictive trend analysis — built to connect Coinbase, Binance, Bitfinex, Deribit, OKX, and beyond.',
    bullets: [
      'Native WebSocket connectivity — no third-party adapter, zero overhead',
      'Configurable multi-exchange: Coinbase, Binance, Bitfinex, Deribit, OKX & more',
      'Lock-free SPSC queues — zero heap allocation on the hot path',
      'Cache-line aligned structures — 64-byte boundary enforcement',
      'Futures Roll Arbitrage: market-make illiquid, hedge on liquid perp',
      'ML-based predictive trend analysis for pre-emptive positioning',
      'Time-series persistence with nanosecond precision for post-trade analytics',
    ],
    strategies: [
      'Cross-Exchange Spatial Arbitrage',
      'Futures Roll Arbitrage (Market Making)',
      'Ultra-Fast Predictive Arbitrage',
      'ML Trend Pre-positioning',
    ],
    tech: ['C++23', 'Native WebSocket', 'SPSC Queues', 'POSIX SHM', 'Aeron IPC', 'Time-Series DB'],
  },
  {
    id: 'fxtrading',
    title: 'FX Nexus Platform',
    subtitle: 'Institutional FX Trading — Protocol-Agnostic, Sub-20μs End-to-End',
    category: 'FX / HFT',
    badge: 'C++23 · FIX-Agnostic',
    color: 'brand',
    icon: 'Globe',
    headline: 'End-to-End p99 Latency Under 20 Microseconds. Any Protocol. Any Instrument.',
    description:
      'A complete institutional FX trading platform with a protocol-agnostic connectivity layer supporting FIX, proprietary binary, and REST/WebSocket adapters. Covers Spot, NDF, FX Swaps, and Options with full RFQ/RFS workflows, a pluggable IQ engine for CBBO, VWAP Slice, and TWAP Slice execution, and a shared-memory nexus bus for sub-microsecond internal IPC.',
    bullets: [
      'End-to-end p99 latency < 20 μs — quote receipt to order acknowledgment',
      'RFQ & RFS workflows — full request lifecycle with streaming quote support',
      'Pluggable IQ engine: CBBO, VWAP Slice, TWAP Slice, and custom rule sets',
      'Instrument coverage: Spot, NDF, FX Swaps, Vanilla Options',
      'Protocol-agnostic: FIX (any version), binary, REST/WebSocket adapters',
      'Shared-memory nexus bus — zero-copy SPSC IPC between all services',
      'Real-time Nexus Dashboard with live P&L, position, and latency telemetry',
    ],
    tech: ['FIX-Agnostic', 'SPSC / SHM', 'Aeron IPC', 'RFQ / RFS', 'CBBO / VWAP / TWAP', 'NDF / Spot / Swaps'],
  },
  {
    id: 'aitrading',
    title: 'Ultra Trading Platform',
    subtitle: 'AI-Driven Algorithmic Trading — IBKR, Alpaca & Any Broker',
    category: 'AI / Equities / Multi-Broker',
    badge: 'C++20 · Local AI',
    color: 'accent',
    icon: 'Brain',
    headline: 'Self-Improving AI Bots. Local LLM. Zero Cloud Dependency.',
    description:
      'A production-grade C++20 algorithmic trading platform with AI-driven bot management, connecting to Interactive Brokers, Alpaca, and any configurable broker. Local Ollama LLM (deepseek-r1, qwen3.5, llama3) analyses daily performance and autonomously tunes bot parameters — no cloud AI, no API fees, no data leaks. P99 OMS latency target under 100 microseconds.',
    bullets: [
      'Connects to IBKR TWS, Alpaca, Alpha Vantage, CSV replay, and synthetic feeds',
      'Local Ollama AI (deepseek-r1:14b) — zero cloud dependency, zero API fees',
      'Online ML predictor: self-improving logistic regression, updates on every fill',
      '8-layer pre-trade risk engine with hot-reload via SIGHUP — no restart needed',
      'EOD GenAI analyst auto-tunes bot parameters with guardrails and audit trail',
      'POSIX SHM SPSC rings — P99 OMS intent-to-route target under 100 microseconds',
      'React dashboard with 10 workspaces: Strategy, Predictor, Risk, Latency, Reports',
    ],
    strategies: [
      'Mean Reversion (Z-Score Entry/Exit, Quarter-Kelly Sizing)',
      'Momentum (EWM Direction Following)',
      'Opening Range Breakout (ORB)',
      'Gap Fade / Gap-and-Go',
      'VWAP Reversion (OFI-Confirmed)',
      'Market-on-Close Rebalance (MOC)',
      'Kalman Pair Trading (Cointegration-Gated)',
    ],
    tech: ['C++20', 'Ollama LLM', 'IBKR TWS', 'Alpaca', 'POSIX SHM', 'React Dashboard'],
  },
  {
    id: 'aitrading',
    title: 'Ultra Trading Platform',
    subtitle: 'AI-Driven Intraday Algorithmic Trading — IBKR, Alpaca & Any Broker',
    category: 'AI / Equities / Multi-Broker',
    badge: 'C++20 · Local AI',
    color: 'accent',
    icon: 'Brain',
    headline: 'Self-Improving AI Bots. Local LLM. Zero Cloud Dependency.',
    description:
      'A production-grade C++20 algorithmic trading platform with AI-driven bot management connecting to Interactive Brokers, Alpaca, and any configurable broker. Local Ollama LLM analyses daily performance and autonomously tunes bot parameters — no cloud AI, no API fees, no data leaks. P99 OMS latency target under 100 microseconds.',
    bullets: [
      'Connects to IBKR TWS, Alpaca, Alpha Vantage, CSV replay, and synthetic feeds',
      'Local Ollama AI (deepseek-r1:14b) — zero cloud dependency, zero API fees, data never leaves your server',
      'Online ML predictor: self-improving logistic regression, updates on every fill',
      '8-layer pre-trade risk engine with hot-reload via SIGHUP — no restart needed',
      'EOD GenAI analyst auto-tunes bot parameters with guardrails and full audit trail',
      'POSIX SHM SPSC rings — P99 OMS intent-to-route target under 100 microseconds',
      'React dashboard with 10 workspaces: Strategy, Predictor, Risk, Latency, Reports',
    ],
    strategies: [
      'Mean Reversion (Z-Score Entry/Exit, Quarter-Kelly Sizing)',
      'Momentum (EWM Direction Following)',
      'Opening Range Breakout (ORB)',
      'Gap Fade / Gap-and-Go',
      'VWAP Reversion (OFI-Confirmed)',
      'Market-on-Close Rebalance (MOC)',
      'Kalman Pair Trading (Cointegration-Gated)',
    ],
    tech: ['C++20', 'Ollama LLM', 'IBKR TWS', 'Alpaca', 'POSIX SHM', 'React Dashboard'],
  },
  {
    id: 'bytepulse',
    title: 'BytePulse Trading Suite',
    subtitle: 'Java Microservices for Equity Trading & Portfolio Management',
    category: 'Equities / Portfolio',
    badge: 'Java / Spring',
    color: 'accent',
    icon: 'BarChart2',
    headline: 'Enterprise-Grade Equity Trading Infrastructure in Java.',
    description:
      'A microservices-based equity trading platform covering market data ingestion, portfolio management, trade execution, and database management. Built with Spring Boot, designed for institutional-grade reliability and horizontal scalability.',
    bullets: [
      'Market data service with real-time feed normalization',
      'Portfolio service with P&L, exposure, and attribution',
      'Equity trading DB management with audit trail',
      'Shared trading-commons library for cross-service consistency',
      'React UI dashboard for portfolio visualization',
      'Designed for horizontal scaling on cloud infrastructure',
    ],
    tech: ['MySQL', 'React', 'Redux Toolkit', 'Docker'],
  },
  {
    id: 'unified-risk',
    title: 'Risk Management',
    subtitle: 'Enterprise Vendor & Financial Risk Platform',
    category: 'Risk / Compliance',
    badge: 'Java + Python / AWS',
    color: 'brand',
    icon: 'Shield',
    headline: 'BNM-Compliant Risk, Compliance & Payment Platform on AWS.',
    description:
      'A production-deployed microservices risk management platform on AWS. Features centralized database service via ElastiCache Redis message queue, multi-gateway payment processing (Razorpay, Stripe), PDF compliance certificate generation, and circuit-breaker fault tolerance.',
    bullets: [
      'Amazon RDS MySQL + ElastiCache Redis architecture',
      'Multi-gateway payments: Razorpay, Stripe, Bank Transfer',
      'BNM compliance certificate generation with PDF watermarks',
      'Circuit breaker pattern — automatic failover and recovery',
      'SQL injection prevention and full audit trail logging',
      'Risk dashboard reports with date-range analytics',
      'Docker Compose deployment with health monitoring',
    ],
    tech: ['Django', 'React', 'AWS RDS', 'ElastiCache', 'Docker'],
  },
]

export const capabilities = [
  {
    icon: 'Cpu',
    title: 'Kernel-Bypass & Zero-Syscall',
    desc: 'Hot paths make zero system calls. Kernel-bypass via DPDK and POSIX SHM eliminates OS scheduling jitter from the critical path entirely.',
  },
  {
    icon: 'Activity',
    title: 'CPU Affinity & NUMA Awareness',
    desc: 'Every hot-path thread is pinned to a dedicated core with NUMA-local memory allocation. No OS scheduler interference, no cross-socket memory latency.',
  },
  {
    icon: 'Database',
    title: 'Cache Optimisation & Coherence',
    desc: 'Structures are cache-line aligned to 64 bytes. False sharing eliminated by padding. Cache coherence traffic minimised via SPSC ownership — one writer, one reader.',
  },
  {
    icon: 'Shield',
    title: 'Branch Prediction & SIMD',
    desc: 'Hot-path conditionals are ordered by probability to maximise branch predictor hit rate. SIMD intrinsics accelerate price comparison, risk aggregation, and serialisation.',
  },
  {
    icon: 'Globe',
    title: 'Zero-Copy · Zero-Allocation · Zero-Syscall',
    desc: 'The three zeros of the hot path: no memcpy, no heap allocation, no kernel entry. Every byte from exchange feed to order submission stays in user-space.',
  },
  {
    icon: 'BarChart2',
    title: 'Multi-Transport Messaging',
    desc: 'Aeron Sequencer for pub/sub fanout, memory-mapped SPSC rings for point-to-point IPC, UDS for co-located services, TCP/FIX for exchange connectivity.',
  },
]

export const testimonials = [
  {
    quote:
      'The UltraFastHFT platform delivered exactly what we needed — deterministic sub-5μs latency with a risk framework that actually holds up under stress.',
    author: 'Head of Algorithmic Trading',
    firm: 'Proprietary Trading Firm',
  },
  {
    quote:
      'BytesThread\'s arbitrage engine connected our multi-exchange crypto desk in weeks, not months. The lock-free architecture is genuinely impressive.',
    author: 'CTO',
    firm: 'Digital Asset Fund',
  },
  {
    quote:
      'The risk management platform gave our compliance team the BNM reporting they needed while the dev team got clean APIs. Rare combination.',
    author: 'Chief Risk Officer',
    firm: 'Regional Bank',
  },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'HFT & FX', path: '/hft-fx' },
  { label: 'Crypto Trading', path: '/crypto' },
  { label: 'AI Trading', path: '/ai-trading' },
  { label: 'Portfolio & Risk', path: '/portfolio-risk' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const tickerItems = [
  'BTC/USDT  43,250.00  +2.3%',
  'ETH/USDT  2,680.50  +1.8%',
  'EUR/USD  1.08420  -0.12%',
  'GBP/USD  1.26780  +0.08%',
  'SPY  478.32  +0.45%',
  'NQ  17,842  +0.62%',
  'ES  4,782  +0.41%',
  'BTC-PERP  43,198  +2.1%',
  'SOL/USDT  98.45  +4.2%',
  'USD/JPY  149.82  +0.22%',
]

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Menu, X, Server, Shield, Zap, Globe, Rocket, Cpu, Cloud, CreditCard } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Features', href: '#features' },
  { name: 'Control Panel', href: '#panel' },
  { name: 'Support', href: '#support' }
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg neon-gradient glow" />
              <span className="text-lg font-bold tracking-tight">Plasma <span className="gradient-text">Node</span></span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} className="text-white/80 hover:text-white transition">{l.name}</a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#login" className="text-white/80 hover:text-white text-sm">Log in</a>
              <a href="#pricing" className="text-sm rounded-lg px-4 py-2 neon-gradient glow text-black font-semibold">Get Started</a>
            </div>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg bg-white/5"><Menu size={20} /></button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-white/5"><X size={18} /></button>
            </div>
            <div className="px-6 pb-4 grid gap-2">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} className="block rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10">{l.name}</a>
              ))}
              <a href="#pricing" className="block text-center rounded-lg px-4 py-3 neon-gradient glow text-black font-semibold">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-3xl py-24">
          <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:.6}} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Plasma Node
            <span className="block gradient-text">Fast, reliable Minecraft & VPS hosting.</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:.1, duration:.6}} className="mt-4 text-white/80 max-w-2xl">
            Power your worlds and workloads with next‑gen performance, DDoS protection, and instant setup. Built for gamers, creators, and teams.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:.2, duration:.6}} className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="pointer-events-auto text-black font-semibold rounded-xl px-5 py-3 neon-gradient glow">Get Started</a>
            <a href="#features" className="pointer-events-auto rounded-xl px-5 py-3 bg-white/10 hover:bg-white/20 transition">View Features</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const features = [
  { icon: <Shield className="text-brand-cyan" />, title: 'DDoS protection', desc: 'Always-on L3/L4 protection keeps your servers online.' },
  { icon: <Zap className="text-brand-accent" />, title: 'Instant setup', desc: 'Deploy in seconds with automated provisioning.' },
  { icon: <Server className="text-brand-purple" />, title: '1-click modpacks', desc: 'Spigot, Paper, Forge, and more, pre‑tuned and ready.' },
  { icon: <Cpu className="text-brand-accent" />, title: 'Full root access', desc: 'Complete control for power users and teams.' },
  { icon: <Globe className="text-brand-cyan" />, title: 'Global servers', desc: 'Low latency locations worldwide.' },
  { icon: <Cloud className="text-brand-purple" />, title: '99.9% uptime', desc: 'Redundant infrastructure for high availability.' },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why choose <span className="gradient-text">Plasma Node</span>?</h2>
          <p className="mt-3 text-white/70">Performance that scales with you, from Minecraft servers to full VPS workloads.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f,i) => (
            <motion.div key={f.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MC_PLANS = [
  { name: 'Starter', price_m: 3.99, price_y: 39.99, specs: ['2 GB RAM', 'NVMe SSD', 'DDoS Protected', '1-Click Modpacks'] },
  { name: 'Pro', price_m: 7.99, price_y: 79.99, specs: ['4 GB RAM', 'High Clock CPU', 'Backups', 'SFTP Access'] },
  { name: 'Elite', price_m: 12.99, price_y: 129.99, specs: ['8 GB RAM', 'Priority Support', 'Auto Scaling', 'Free Subdomain'] },
]

const VPS_PLANS = [
  { name: 'Nano', price_m: 5.99, price_y: 59.99, specs: ['1 vCPU', '1 GB RAM', '20 GB NVMe', '1 TB Transfer'] },
  { name: 'Core', price_m: 9.99, price_y: 99.99, specs: ['2 vCPU', '2 GB RAM', '40 GB NVMe', '2 TB Transfer'] },
  { name: 'Titan', price_m: 19.99, price_y: 199.99, specs: ['4 vCPU', '8 GB RAM', '120 GB NVMe', '5 TB Transfer'] },
]

function PricingTable({ title, plans, priceKey }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <CreditCard className="text-brand-accent" />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-[#0f1530] p-6 hover:shadow-xl hover:shadow-brand-purple/10 transition">
            <div className="flex items-baseline justify-between">
              <h4 className="font-semibold">{p.name}</h4>
              <span className="text-xs text-brand-accent">Popular</span>
            </div>
            <div className="mt-2 text-3xl font-extrabold">${p[priceKey].toFixed(2)}<span className="text-sm text-white/60">/{priceKey==='price_m'?'mo':'yr'}</span></div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {p.specs.map(s => <li key={s}>• {s}</li>)}
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center rounded-xl px-4 py-3 neon-gradient text-black font-semibold">Buy Now</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Transparent pricing</h2>
            <p className="text-white/70">Choose Minecraft or VPS. Scale anytime.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={!yearly? 'font-semibold' : 'text-white/70'}>Monthly</span>
            <button onClick={() => setYearly(y => !y)} className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10">
              <span className={`absolute h-6 w-6 rounded-full neon-gradient transition ${yearly? 'left-9':'left-1'}`} />
            </button>
            <span className={yearly? 'font-semibold' : 'text-white/70'}>Yearly</span>
          </div>
        </div>
        <div className="mt-10 grid gap-8">
          <PricingTable title="Minecraft Hosting" plans={MC_PLANS} priceKey={yearly? 'price_y':'price_m'} />
          <PricingTable title="VPS Hosting" plans={VPS_PLANS} priceKey={yearly? 'price_y':'price_m'} />
        </div>
      </div>
    </section>
  )
}

function PanelDemo() {
  return (
    <section id="panel" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-2 sticky top-0">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-white/60">Control Panel Demo</span>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Intuitive dashboard</h3>
              <p className="text-white/70 mt-2">Manage servers, deploy modpacks, view usage, and access backups with a clean, gamer‑grade UI.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>• Start/Stop/Reboot</li>
                <li>• Console & Live Logs</li>
                <li>• SFTP & Backups</li>
                <li>• Subusers & Permissions</li>
              </ul>
              <a href="#signup" className="mt-6 inline-block rounded-xl px-5 py-3 neon-gradient text-black font-semibold">Try It Free</a>
            </div>
            <div className="rounded-xl bg-black/40 h-64 md:h-80 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="support" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg neon-gradient" />
              <span className="font-bold">Plasma Node</span>
            </div>
            <p className="text-white/70 text-sm mt-2">Premium Minecraft & VPS hosting with a futuristic control panel.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">SLA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-white/50 text-xs">© {new Date().getFullYear()} Plasma Node. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <PanelDemo />
      <Footer />
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatCard from '../common/StatCard'
import Button from '../common/Button'

const stats = [
  { label: '10,000+ Users', value: 'Trusted by teams' },
  { label: '99.9% Accuracy', value: 'Reliable attendance' },
  { label: 'Secure System', value: 'Data protected' }
]

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden bg-transparent py-14 sm:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-amber-100/70 to-transparent opacity-80" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="flex flex-col justify-center gap-8">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
            Version 1.0 Now Live
          </span>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#1A1A1A] sm:text-6xl">
              Smart Attendance <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent">Tracking System</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#4B4B4B] sm:text-lg">
              Modern attendance management powered by face recognition, geofencing and intelligent workplace automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => navigate('/signup')}>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} title={stat.label} subtitle={stat.value} />
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute -right-10 top-10 hidden h-36 w-36 rounded-full bg-amber-300/25 blur-3xl lg:block" />
          <div className="pointer-events-none absolute right-8 bottom-8 hidden h-32 w-32 rounded-full bg-amber-200/40 blur-3xl lg:block" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative w-full max-w-3xl rounded-[40px] border border-amber-200/60 bg-gradient-to-br from-white via-[#FFF8E6] to-[#FFFDF7] p-6 shadow-[0_40px_120px_rgba(245,158,11,0.18)] ring-1 ring-amber-100 sm:p-8"
          >
            <div className="absolute -left-10 top-8 hidden h-20 w-20 rounded-full bg-amber-400/20 blur-3xl lg:block" />
            <div className="absolute right-8 top-10 hidden h-16 w-16 rounded-full bg-amber-500/15 blur-3xl lg:block" />
            <div className="absolute left-0 top-1/3 h-56 w-56 rounded-full border border-amber-300/30 bg-amber-50/40 blur-xl" />

            <div className="mb-6 flex items-center justify-between rounded-3xl bg-[#FFF8D9] px-4 py-3 shadow-[0_10px_30px_rgba(245,158,11,0.12)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(245,158,11,0.18)] hover:bg-[#FFF1B8]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-700 ring-1 ring-amber-300">
                  🏢
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Office Pulse</p>
                  <p className="text-xs text-[#6B5C3B]">Live attendance updates</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-800">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Live
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4 rounded-[32px] bg-white/90 p-5 shadow-[0_20px_50px_rgba(245,158,11,0.1)] ring-1 ring-amber-100 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(245,158,11,0.16)] hover:bg-[#FFFBEC]">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B5C3B]">Attendance Rate</p>
                    <p className="text-3xl font-semibold text-[#1A1A1A]">98.7%</p>
                  </div>
                  <div className="rounded-3xl bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-800">
                    +3.2%
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-3xl bg-[#FFF7D4] p-4 text-sm text-amber-900">Face recognition verified</div>
                  <div className="rounded-3xl bg-[#FFF7D4] p-4 text-sm text-amber-900">Geo-fence compliance active</div>
                </div>
              </div>

              <div className="space-y-4 rounded-[32px] bg-[#FFF7D4]/70 p-5 shadow-[0_20px_50px_rgba(245,158,11,0.08)] ring-1 ring-amber-100 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(245,158,11,0.14)] hover:bg-[#FFF5B9]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">Today’s Team</p>
                    <p className="text-xs text-[#6B5C3B]">5 late, 42 present</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-white/80 text-center leading-10 text-amber-700 shadow-sm">👩‍💼</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 text-sm text-[#4B4B4B] shadow-sm transition duration-300 ease-out hover:bg-amber-50">
                    <span>Team check-in</span>
                    <span className="font-semibold text-amber-800">09:15</span>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 text-sm text-[#4B4B4B] shadow-sm transition duration-300 ease-out hover:bg-amber-50">
                    <span>Meeting room</span>
                    <span className="font-semibold text-amber-800">10:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-amber-200/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(245,158,11,0.08)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(245,158,11,0.14)] hover:bg-[#FFFBEC]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#6B5C3B]">Next shift</p>
                <p className="mt-2 text-xl font-semibold text-[#1A1A1A]">09:00 AM</p>
              </div>
              <div className="rounded-[28px] border border-amber-200/70 bg-amber-50/90 p-4 shadow-[0_20px_60px_rgba(245,158,11,0.08)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(245,158,11,0.14)] hover:bg-[#FFEBA8]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#6B5C3B]">Meeting</p>
                <p className="mt-2 text-xl font-semibold text-[#1A1A1A]">Project Sync</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="absolute -bottom-12 left-8 hidden rounded-full border border-amber-300/40 bg-amber-100/40 px-4 py-3 text-sm font-semibold text-amber-700 shadow-[0_20px_60px_rgba(245,158,11,0.12)] lg:block"
            >
              Team collaboration is in motion
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

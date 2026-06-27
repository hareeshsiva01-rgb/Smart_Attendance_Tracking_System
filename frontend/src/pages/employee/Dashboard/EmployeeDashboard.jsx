import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  {
    label: 'Dashboard',
    path: '/employee/dashboard',
    icon: 'grid',
    active: true
  },
  {
    label: 'Attendance',
    path: '/employee/attendance',
    icon: 'calendar'
  },
  {
    label: 'Leave',
    path: '/employee/leave',
    icon: 'briefcase'
  },
  {
    label: 'Profile',
    path: '/employee/profile',
    icon: 'user'
  }
]

const summaryCards = [
  {
    label: 'Attendance Rate',
    value: '94%',
    note: '21 of 22 working days present',
    icon: 'calendar',
    accent: 'from-amber-400 to-amber-600'
  },
  {
    label: 'Leave Balance',
    value: '19',
    note: 'Total remaining leaves',
    icon: 'briefcase',
    accent: 'from-emerald-400 to-emerald-600'
  },
  {
    label: 'Work Hours',
    value: '176h',
    note: 'Total hours this month',
    icon: 'trend',
    accent: 'from-[#D4AF37] to-amber-600'
  }
]

const leaveBreakdown = [
  {
    title: 'Casual Leave',
    total: 10,
    remaining: 8,
    used: 2,
    accent: 'bg-amber-500'
  },
  {
    title: 'Sick Leave',
    total: 7,
    remaining: 6,
    used: 1,
    accent: 'bg-[#D4AF37]'
  },
  {
    title: 'Privilege Leave',
    total: 5,
    remaining: 5,
    used: 0,
    accent: 'bg-amber-600'
  }
]

const activityItems = [
  {
    title: 'Face ID verification',
    value: 'Required before clock in',
    status: 'Pending'
  },
  {
    title: 'Location check',
    value: 'Office perimeter detection',
    status: 'Ready'
  },
  {
    title: 'Shift schedule',
    value: '09:00 AM - 06:00 PM',
    status: 'Today'
  }
]

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    grid: (
      <>
        <path d="M4 4h6v6H4z" />
        <path d="M14 4h6v6h-6z" />
        <path d="M4 14h6v6H4z" />
        <path d="M14 14h6v6h-6z" />
      </>
    ),
    calendar: (
      <>
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M4 9h16" />
        <path d="M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      </>
    ),
    briefcase: (
      <>
        <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
        <path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M4 12h16" />
      </>
    ),
    user: (
      <>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    clock: (
      <>
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z" />
        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    trend: (
      <>
        <path d="M4 17 10 11l4 4 6-8" />
        <path d="M14 7h6v6" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17 15 12 10 7" />
        <path d="M15 12H3" />
        <path d="M21 4v16" />
      </>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function GearShape({ className = '', size = 180, opacity = 0.34 }) {
  const teeth = Array.from({ length: 40 }, (_, index) => index * 9)

  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        opacity
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 220 220" className="h-full w-full">
        <g transform="translate(110 110)">
          {teeth.map((angle) => (
            <rect
              key={angle}
              x="-3.2"
              y="-108"
              width="6.4"
              height="26"
              rx="2.2"
              fill="rgba(245,158,11,0.42)"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="88" fill="rgba(255,248,230,0.42)" stroke="rgba(245,158,11,0.42)" strokeWidth="6" />
          <circle r="68" fill="none" stroke="rgba(154,133,83,0.24)" strokeWidth="8" />
          <circle r="34" fill="rgba(255,253,247,0.72)" stroke="rgba(245,158,11,0.34)" strokeWidth="5" />
          <circle r="10" fill="rgba(245,158,11,0.28)" />
          <path d="M-54 0h108M0-54v108" stroke="rgba(154,133,83,0.22)" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

function TechIllustration({ type, className = '' }) {
  const common = 'absolute text-amber-600/45 drop-shadow-[0_18px_35px_rgba(245,158,11,0.14)]'

  if (type === 'face') {
    return (
      <svg viewBox="0 0 260 260" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="104" stroke="currentColor" strokeWidth="3" strokeDasharray="12 12" />
        <circle cx="130" cy="130" r="72" stroke="currentColor" strokeWidth="3" />
        <path d="M95 112v-16a20 20 0 0 1 20-20h30a20 20 0 0 1 20 20v16" stroke="currentColor" strokeWidth="3" />
        <path d="M84 92V68h24M176 68h24v24M84 168v24h24M176 192h24v-24" stroke="currentColor" strokeWidth="4" />
        <path d="M104 136h52M112 166c13 10 31 10 44 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'radar') {
    return (
      <svg viewBox="0 0 260 260" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="104" stroke="currentColor" strokeWidth="3" />
        <circle cx="130" cy="130" r="72" stroke="currentColor" strokeWidth="3" strokeDasharray="7 10" />
        <circle cx="130" cy="130" r="38" stroke="currentColor" strokeWidth="3" />
        <path d="M130 130 212 76" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M130 26v208M26 130h208" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" />
        <circle cx="184" cy="92" r="8" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'wireframe') {
    return (
      <svg viewBox="0 0 340 220" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="26" stroke="currentColor" strokeWidth="3" />
        <rect x="48" y="52" width="92" height="52" rx="14" stroke="currentColor" strokeWidth="3" />
        <rect x="156" y="52" width="136" height="18" rx="9" stroke="currentColor" strokeWidth="3" />
        <rect x="156" y="86" width="98" height="18" rx="9" stroke="currentColor" strokeWidth="3" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
      <svg viewBox="0 0 300 180" className={`${common} ${className}`} fill="none" aria-hidden="true">
      <rect x="24" y="28" width="252" height="124" rx="22" stroke="currentColor" strokeWidth="3" />
      <path d="M58 68h72M58 98h108M58 128h52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="226" cy="90" r="38" stroke="currentColor" strokeWidth="3" />
      <path d="M226 52v76M188 90h76" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

function EmployeeSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 shrink-0 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),radial-gradient(circle_at_85%_28%,rgba(212,175,55,0.18),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
      <GearShape className="pointer-events-none -left-24 top-28" size={210} opacity={0.36} />
      <TechIllustration type="face" className="pointer-events-none left-6 top-[47%] h-36 w-36 opacity-55" />
      <TechIllustration type="radar" className="pointer-events-none -right-16 top-64 h-40 w-40 opacity-45" />
      <TechIllustration type="wireframe" className="pointer-events-none -right-20 bottom-20 h-36 w-56 opacity-42" />
      <div className="pointer-events-none absolute -right-24 bottom-32 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.28),transparent_65%)]" />

      <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-xl font-bold text-white shadow-[0_18px_45px_rgba(245,158,11,0.35)]">
          P
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">Presentia</p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5C3B]">Employee Suite</p>
        </div>
      </div>

      <nav className="relative mt-10 space-y-2">
        <p className="px-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Menu</p>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className={`group flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition duration-300 ${
              location.pathname === item.path
                ? 'bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-white shadow-[0_16px_45px_rgba(245,158,11,0.32)]'
                : 'text-[#4B4B4B] hover:bg-white/85 hover:text-[#1A1A1A] hover:shadow-sm'
            }`}
          >
            <Icon name={item.icon} className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-base font-bold text-white">
            U
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[#1A1A1A]">User</p>
            <p className="text-xs text-[#6B5C3B]">Employee</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-white/85 text-[#9A8553] shadow-sm transition hover:bg-amber-500 hover:text-white"
            aria-label="Log out"
            title="Log out"
          >
            <Icon name="logout" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}

function DashboardHeader({ clockedIn }) {
  return (
    <header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/70 px-5 py-4 shadow-sm shadow-amber-100/40 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Employee Dashboard</p>
          <h1 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-[#4B4B4B] shadow-sm sm:flex">
            <span className={`h-2.5 w-2.5 rounded-full ${clockedIn ? 'bg-emerald-500' : 'bg-slate-300'}`} />
            {clockedIn ? 'Clocked In' : 'Not Clocked In'}
          </div>
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-[#4B4B4B] shadow-sm transition hover:bg-[#FFF8E6]"
            aria-label="Notifications"
          >
            <Icon name="bell" />
            <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
          </button>
        </div>
      </div>
    </header>
  )
}

function AttendanceTracker({ clockedIn, onToggleClock }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_32px_90px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_110px_rgba(212,175,55,0.22)] sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.16),transparent_32%),linear-gradient(135deg,rgba(255,248,230,0.9),rgba(255,255,255,0.6)_45%,rgba(255,253,247,0.92))]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 ring-1 ring-amber-200">
              <Icon name="clock" className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">Attendance Tracker</h2>
              <p className="mt-1 text-sm text-[#6B5C3B]">Track today&apos;s work session with secure verification.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-amber-200/70 bg-white/85 p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#6B5C3B]">Check In</p>
              <p className="mt-5 text-2xl font-semibold tracking-[0.08em] text-[#1A1A1A]">{clockedIn ? '09:04' : '--:--'}</p>
            </div>
            <div className="rounded-3xl border border-amber-200/70 bg-white/85 p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#6B5C3B]">Check Out</p>
              <p className="mt-5 text-2xl font-semibold tracking-[0.08em] text-[#1A1A1A]">--:--</p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4 rounded-3xl border border-amber-100 bg-white/80 p-5 shadow-[0_18px_55px_rgba(212,175,55,0.1)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8E6] text-[#9A8553]">
              <Icon name="location" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">{clockedIn ? 'Location Verified' : 'Location Pending'}</p>
              <p className="mt-1 text-sm text-[#6B5C3B]">{clockedIn ? 'Office perimeter confirmed' : 'Clock in to detect your workspace'}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border border-amber-100 bg-white shadow-[0_26px_80px_rgba(13,12,29,0.14)] ring-8 ring-white/60">
            <p className="text-4xl font-semibold tracking-[0.08em] text-[#1A1A1A]">{clockedIn ? '02:18:42' : '00:00:00'}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#6B5C3B]">Duration</p>
          </div>
          <button
            type="button"
            onClick={onToggleClock}
            className={`inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)] transition duration-300 hover:-translate-y-0.5 ${
              clockedIn
                ? 'bg-gradient-to-r from-[#1A1A1A] to-[#4B4B4B]'
                : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600'
            }`}
          >
            <Icon name="logout" />
            {clockedIn ? 'Clock Out' : 'Clock In Now'}
          </button>
          <p className="text-center text-sm text-[#6B5C3B]">Face ID verification required for attendance.</p>
        </div>
      </div>
    </motion.section>
  )
}

function SummaryCard({ card, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-[28px] border border-amber-200/70 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(212,175,55,0.18)]"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold text-[#6B5C3B]">{card.label}</p>
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-lg shadow-amber-200`}>
          <Icon name={card.icon} className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-10 text-4xl font-semibold text-[#1A1A1A]">{card.value}</p>
      <p className="mt-2 text-sm text-[#6B5C3B]">{card.note}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-amber-100">
        <div className={`h-full rounded-full bg-gradient-to-r ${card.accent}`} style={{ width: card.label === 'Attendance Rate' ? '94%' : '72%' }} />
      </div>
    </motion.article>
  )
}

function LeaveCard({ item }) {
  const usedPercent = Math.max(8, (item.used / item.total) * 100)
  const remainingPercent = (item.remaining / item.total) * 100

  return (
    <article className="rounded-[28px] border border-amber-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(212,175,55,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(212,175,55,0.16)]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-[#1A1A1A]">{item.title}</h3>
        <span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-xs font-semibold text-[#6B5C3B]">{item.total} Total</span>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <p className="text-4xl font-semibold text-[#1A1A1A]">
          {item.remaining}
          <span className="ml-2 text-sm font-medium text-[#6B5C3B]">remaining</span>
        </p>
        <p className="text-sm font-semibold text-[#6B5C3B]">{item.used} used</p>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-amber-100">
        <div className={`h-full rounded-full ${item.accent}`} style={{ width: `${remainingPercent}%` }} />
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-transparent">
        <div className="h-full rounded-full bg-[#1A1A1A]/10" style={{ width: `${usedPercent}%` }} />
      </div>
    </article>
  )
}

export default function EmployeeDashboard() {
  const [clockedIn, setClockedIn] = useState(false)
  const today = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date()),
    []
  )

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]">
      <div className="relative flex min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80px_80px,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(212,175,55,0.16),transparent_32%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.88)_45%,rgba(255,253,247,1))]" />
        <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-amber-300/18 blur-3xl" />
        <GearShape className="pointer-events-none left-[20rem] top-28 hidden rotate-12 lg:block" size={320} opacity={0.24} />
        <TechIllustration type="radar" className="pointer-events-none right-[8%] top-[18rem] hidden h-64 w-64 opacity-45 lg:block" />
        <TechIllustration type="face" className="pointer-events-none left-[22rem] bottom-[18rem] hidden h-72 w-72 opacity-36 lg:block" />
        <TechIllustration type="wireframe" className="pointer-events-none right-[22%] bottom-16 hidden h-52 w-80 opacity-38 lg:block" />
        <TechIllustration type="hud" className="pointer-events-none left-[42%] top-24 hidden h-40 w-64 opacity-38 lg:block" />
        <TechIllustration type="hud" className="pointer-events-none right-[3%] top-32 hidden h-36 w-56 opacity-32 lg:block" />
        <TechIllustration type="wireframe" className="pointer-events-none left-[48%] top-[22rem] hidden h-40 w-64 opacity-28 lg:block" />
        <div className="pointer-events-none absolute bottom-24 right-1/4 h-28 w-96 rounded-full bg-gradient-to-r from-amber-400/18 via-transparent to-amber-500/12" />
        <EmployeeSidebar />
        <div className="relative min-w-0 flex-1 lg:pl-72">
          <DashboardHeader clockedIn={clockedIn} />

          <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
            <section className="relative overflow-hidden rounded-[34px] border border-white/75 bg-white/80 p-6 shadow-[0_28px_90px_rgba(212,175,55,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.2)] sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_20%,rgba(245,158,11,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,248,230,0.7))]" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Today&apos;s Overview</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">
                  Good morning, <span className="text-amber-600">User</span>
                </h2>
                <p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">{today}</p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-[#4B4B4B] shadow-[0_16px_45px_rgba(212,175,55,0.12)]">
                <span className={`h-2.5 w-2.5 rounded-full ${clockedIn ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                {clockedIn ? 'Clocked In' : 'Not Clocked In'}
              </div>
              </div>
            </section>

            <div className="mt-9">
              <AttendanceTracker clockedIn={clockedIn} onToggleClock={() => setClockedIn((current) => !current)} />
            </div>

            <section className="mt-8 grid gap-5 lg:grid-cols-3">
              {summaryCards.map((card, index) => (
                <SummaryCard key={card.label} card={card} delay={0.1 + index * 0.08} />
              ))}
            </section>

            <section className="mt-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Leave Management</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">Leave Breakdown</h2>
                </div>
                <button
                  type="button"
                  className="w-fit rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] shadow-sm transition hover:bg-[#FFF8E6]"
                >
                  Request Leave
                </button>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {leaveBreakdown.map((item) => (
                  <LeaveCard key={item.title} item={item} />
                ))}
              </div>
            </section>

            <section className="mt-10 rounded-[30px] border border-amber-200/70 bg-white p-6 shadow-[0_20px_70px_rgba(212,175,55,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.18)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Verification Flow</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">Today&apos;s Checklist</h2>
                </div>
                <span className="rounded-full bg-[#FFF8E6] px-4 py-2 text-sm font-semibold text-[#6B5C3B]">3 items</span>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {activityItems.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-amber-100 bg-[#FFFDF7] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(212,175,55,0.14)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">{item.title}</p>
                        <p className="mt-2 text-sm text-[#6B5C3B]">{item.value}</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

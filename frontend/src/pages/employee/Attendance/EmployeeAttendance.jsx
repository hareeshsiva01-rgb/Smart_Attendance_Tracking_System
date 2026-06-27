import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/employee/dashboard', icon: 'grid' },
  { label: 'Attendance', path: '/employee/attendance', icon: 'calendar' },
  { label: 'Leave', path: '/employee/leave', icon: 'briefcase' },
  { label: 'Profile', path: '/employee/profile', icon: 'user' }
]

const stats = [
  { label: 'Present', value: '14', color: 'bg-emerald-500', tint: 'bg-emerald-100' },
  { label: 'Late', value: '1', color: 'bg-amber-500', tint: 'bg-amber-100' },
  { label: 'On Leave', value: '2', color: 'bg-blue-500', tint: 'bg-blue-100' },
  { label: 'Absent', value: '0', color: 'bg-rose-500', tint: 'bg-rose-100' }
]

const dayStatus = {
  1: 'holiday',
  2: 'present',
  3: 'leave',
  4: 'present',
  5: 'present',
  6: 'present',
  7: 'holiday',
  8: 'holiday',
  9: 'present',
  10: 'present',
  11: 'present',
  12: 'present',
  13: 'late',
  14: 'holiday',
  15: 'holiday',
  16: 'present',
  17: 'present',
  18: 'present',
  19: 'present',
  20: 'present',
  21: 'holiday',
  22: 'holiday',
  23: 'present',
  24: 'leave'
}

const statusStyles = {
  present: 'bg-emerald-500 shadow-emerald-200',
  late: 'bg-amber-500 shadow-amber-200',
  leave: 'bg-blue-500 shadow-blue-200',
  absent: 'bg-rose-500 shadow-rose-200',
  holiday: 'bg-slate-300 shadow-slate-200'
}

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
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17 15 12 10 7" />
        <path d="M15 12H3" />
        <path d="M21 4v16" />
      </>
    ),
    print: (
      <>
        <path d="M7 8V4h10v4" />
        <path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M7 14h10v6H7z" />
      </>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.22),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.24),transparent_28%),radial-gradient(circle_at_50%_58%,rgba(245,158,11,0.14),transparent_34%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
      <svg viewBox="0 0 260 260" className="absolute right-8 top-40 hidden h-72 w-72 text-amber-500/40 drop-shadow-[0_20px_45px_rgba(245,158,11,0.16)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 260 260" className="absolute left-[20rem] top-48 hidden h-56 w-56 text-amber-500/30 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M94 112v-15a21 21 0 0 1 21-21h30a21 21 0 0 1 21 21v15" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
        <path d="M104 136h52M112 166c13 10 31 10 44 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 340 220" className="absolute bottom-20 left-[28rem] hidden h-52 w-72 text-amber-500/35 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <rect x="48" y="52" width="92" height="52" rx="14" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 300 180" className="absolute right-[22%] top-[24rem] hidden h-40 w-64 text-amber-500/35 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <rect x="24" y="28" width="252" height="124" rx="24" stroke="currentColor" strokeWidth="4" />
        <path d="M58 68h72M58 98h108M58 128h52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <circle cx="226" cy="90" r="38" stroke="currentColor" strokeWidth="4" />
        <path d="M226 52v76M188 90h76" stroke="currentColor" strokeWidth="3" />
      </svg>
      <svg viewBox="0 0 280 280" className="absolute left-[38%] bottom-[18rem] hidden h-64 w-64 text-amber-500/30 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <path d="M140 32 220 62v68c0 58-32 94-80 118-48-24-80-60-80-118V62z" stroke="currentColor" strokeWidth="5" />
        <circle cx="140" cy="126" r="32" stroke="currentColor" strokeWidth="5" />
        <path d="M140 158v44M122 202h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M88 92h104M92 170h96" stroke="currentColor" strokeWidth="3" strokeDasharray="10 10" />
      </svg>
      <div className="absolute right-24 bottom-32 hidden h-60 w-60 rounded-full border-[10px] border-amber-300/30 shadow-[0_0_70px_rgba(245,158,11,0.16)] lg:block" />
    </div>
  )
}

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),radial-gradient(circle_at_86%_28%,rgba(212,175,55,0.2),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
      <svg viewBox="0 0 260 260" className="pointer-events-none absolute -left-20 top-28 h-52 w-52 text-amber-500/35 drop-shadow-[0_18px_35px_rgba(245,158,11,0.12)]" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
      </svg>
      <svg viewBox="0 0 260 260" className="pointer-events-none absolute -right-16 top-72 h-44 w-44 text-amber-500/30 drop-shadow-[0_18px_35px_rgba(245,158,11,0.12)]" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 340 220" className="pointer-events-none absolute -right-24 bottom-24 h-44 w-64 text-amber-500/30" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <rect x="48" y="52" width="92" height="52" rx="14" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-xl font-bold text-white shadow-[0_18px_45px_rgba(245,158,11,0.35)]">P</div>
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
            <Icon name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-base font-bold text-white">U</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[#1A1A1A]">User</p>
            <p className="text-xs text-[#6B5C3B]">Employee</p>
          </div>
          <button type="button" onClick={() => navigate('/login')} className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white/85 text-[#9A8553] shadow-sm transition hover:bg-amber-500 hover:text-white" aria-label="Log out">
            <Icon name="logout" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/70 px-5 py-4 shadow-sm shadow-amber-100/40 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Employee Attendance</p>
          <h1 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Attendance</h1>
        </div>
        <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-[#4B4B4B] shadow-sm transition hover:bg-[#FFF8E6]" aria-label="Notifications">
          <Icon name="bell" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}

function CalendarGrid({ selectedDay, onSelectDay }) {
  const days = useMemo(() => Array.from({ length: 28 }, (_, index) => index + 1), [])
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="rounded-[34px] border border-amber-200/70 bg-white/90 shadow-[0_28px_90px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
      <div className="flex flex-col gap-4 border-b border-amber-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <Icon name="calendar" />
          </div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">February 2026</h2>
        </div>
        <div className="flex w-full max-w-xs items-center justify-between rounded-2xl bg-[#FFF8E6] px-5 py-3 text-[#1A1A1A]">
          <button type="button" className="text-xl leading-none">‹</button>
          <button type="button" className="text-xl leading-none">›</button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-7 gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#6B5C3B]">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-7 gap-3">
          {days.map((day) => {
            const status = dayStatus[day]
            const isSelected = selectedDay === day

            return (
              <button
                key={day}
                type="button"
                onClick={() => onSelectDay(day)}
                className={`flex aspect-square min-h-16 flex-col items-center justify-center rounded-3xl border text-sm font-semibold transition duration-300 ${
                  isSelected
                    ? 'border-amber-400 bg-[#FFF8E6] text-amber-800 shadow-[0_16px_45px_rgba(245,158,11,0.18)]'
                    : 'border-transparent text-[#1A1A1A] hover:border-amber-200 hover:bg-white'
                }`}
              >
                <span>{day}</span>
                <span className={`mt-2 h-2.5 w-2.5 rounded-full shadow-md ${statusStyles[status]}`} />
              </button>
            )
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-amber-100 pt-6 text-sm font-medium text-[#6B5C3B]">
          {[
            ['Present', 'bg-emerald-500'],
            ['Late', 'bg-amber-500'],
            ['Leave', 'bg-blue-500'],
            ['Absent', 'bg-rose-500'],
            ['Holiday', 'bg-slate-300']
          ].map(([label, color]) => (
            <span key={label} className="inline-flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${color}`} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DailyInsight({ selectedDay }) {
  const status = dayStatus[selectedDay]
  const labels = {
    present: 'Present',
    late: 'Late Arrival',
    leave: 'Approved Leave',
    absent: 'Absent',
    holiday: 'Holiday'
  }

  return (
    <aside className="rounded-[34px] border border-amber-200/70 bg-white/90 p-7 shadow-[0_28px_90px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Daily Insight</p>
      {selectedDay ? (
        <div className="mt-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFF8E6] text-amber-600">
            <Icon name="calendar" className="h-9 w-9" />
          </div>
          <h2 className="mt-8 text-3xl font-semibold text-[#1A1A1A]">Feb {selectedDay}, 2026</h2>
          <p className="mt-3 text-lg font-semibold text-amber-700">{labels[status]}</p>
          <div className="mt-8 space-y-4 text-sm text-[#6B5C3B]">
            <div className="rounded-3xl border border-amber-100 bg-[#FFFDF7] p-4">
              <p className="font-semibold text-[#1A1A1A]">Check In</p>
              <p className="mt-1">{status === 'present' ? '09:04 AM' : status === 'late' ? '09:42 AM' : '--'}</p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-[#FFFDF7] p-4">
              <p className="font-semibold text-[#1A1A1A]">Work Mode</p>
              <p className="mt-1">{status === 'holiday' ? 'Weekend' : status === 'leave' ? 'Leave approved' : 'Office verified'}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFF8E6] text-amber-600">
            <Icon name="calendar" className="h-9 w-9" />
          </div>
          <h2 className="mt-8 text-2xl font-semibold text-[#1A1A1A]">No Date Selected</h2>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#6B5C3B]">Select a date on the calendar to view detailed attendance records.</p>
        </div>
      )}
    </aside>
  )
}

export default function EmployeeAttendance() {
  const [selectedDay, setSelectedDay] = useState(null)

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]">
      <div className="relative min-h-screen overflow-hidden">
        <TechBackground />
        <Sidebar />
        <div className="relative min-w-0 lg:pl-72">
          <Header />
          <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
            <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Monthly Records</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">Attendance Calendar</h2>
                <p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Overview of your monthly attendance.</p>
              </div>
              <button type="button" className="inline-flex w-fit items-center gap-3 rounded-2xl border border-amber-200 bg-white px-6 py-4 text-sm font-semibold text-[#1A1A1A] shadow-[0_16px_45px_rgba(212,175,55,0.12)] transition hover:bg-[#FFF8E6]">
                <Icon name="print" />
                Print Report
              </button>
            </section>

            <section className="mt-8 grid gap-5 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[28px] border border-amber-200/70 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-[#6B5C3B]">{item.label}</p>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${item.tint}`}>
                      <span className={`h-3 w-3 rounded-full ${item.color}`} />
                    </span>
                  </div>
                  <p className="mt-6 text-4xl font-semibold text-[#1A1A1A]">{item.value}</p>
                </motion.article>
              ))}
            </section>

            <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.48fr]">
              <CalendarGrid selectedDay={selectedDay} onSelectDay={setSelectedDay} />
              <DailyInsight selectedDay={selectedDay} />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

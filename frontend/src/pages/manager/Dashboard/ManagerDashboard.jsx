import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/manager/dashboard', icon: 'grid' },
  { label: 'My Attendance', path: '/manager/attendance', icon: 'calendar' },
  { label: 'My Team', path: '/manager/team', icon: 'users' },
  { label: 'Approvals', path: '/manager/approvals', icon: 'briefcase' },
  { label: 'My Leave', path: '/manager/leave', icon: 'briefcase' },
  { label: 'Settings', path: '/manager/settings', icon: 'settings' }
]

const metrics = [
  { label: 'Total Team', value: '12', note: 'Active members', icon: 'users', tone: 'bg-blue-100 text-blue-600' },
  { label: 'Present Today', value: '10', note: '83% attendance', icon: 'userCheck', tone: 'bg-emerald-100 text-emerald-600' },
  { label: 'On Leave', value: '1', note: 'Scheduled leave', icon: 'briefcase', tone: 'bg-amber-100 text-amber-600' },
  { label: 'Pending Requests', value: '3', note: 'Requires attention', icon: 'alert', tone: 'bg-rose-100 text-rose-600' }
]

const requests = [
  { name: 'Sarah Johnson', initials: 'SJ', type: 'Casual Leave', reason: 'Family function', status: 'Pending' },
  { name: 'Michael Chen', initials: 'MC', type: 'Sick Leave', reason: 'Not feeling well', status: 'Pending' },
  { name: 'Emily Davis', initials: 'ED', type: 'Work From Home', reason: 'Car breakdown', status: 'Approved' }
]

const team = [
  { name: 'Sarah Johnson', initials: 'SJ', rate: 96, status: 'Online' },
  { name: 'Michael Chen', initials: 'MC', rate: 94, status: 'Away' },
  { name: 'James Wilson', initials: 'JW', rate: 92, status: 'Online' },
  { name: 'Lisa Anderson', initials: 'LA', rate: 95, status: 'Online' }
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
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    userCheck: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
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
    alert: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v6" />
        <path d="M12 17h.01" />
      </>
    ),
    settings: (
      <>
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06A2 2 0 1 1 7.07 4.2l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.25.6.83 1 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z" />
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
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z" />
        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.2),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.22),transparent_28%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
      <svg viewBox="0 0 260 260" className="absolute right-10 top-36 hidden h-72 w-72 text-amber-500/40 drop-shadow-[0_20px_45px_rgba(245,158,11,0.16)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 340 220" className="absolute bottom-24 left-[30rem] hidden h-52 w-72 text-amber-500/35 lg:block" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 260 260" className="absolute left-[20rem] top-48 hidden h-60 w-60 text-amber-500/30 drop-shadow-[0_18px_40px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
        <path d="M104 136h52M112 166c13 10 31 10 44 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 280 280" className="absolute bottom-[18rem] right-[18%] hidden h-64 w-64 text-amber-500/30 lg:block" fill="none" aria-hidden="true">
        <path d="M140 32 220 62v68c0 58-32 94-80 118-48-24-80-60-80-118V62z" stroke="currentColor" strokeWidth="5" />
        <circle cx="140" cy="126" r="32" stroke="currentColor" strokeWidth="5" />
        <path d="M140 158v44M122 202h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),radial-gradient(circle_at_86%_28%,rgba(212,175,55,0.2),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
      <svg viewBox="0 0 260 260" className="pointer-events-none absolute -left-20 top-28 h-52 w-52 text-amber-500/35" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
      </svg>
      <svg viewBox="0 0 260 260" className="pointer-events-none absolute -right-16 top-72 h-44 w-44 text-amber-500/30" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" />
      </svg>
      <svg viewBox="0 0 340 220" className="pointer-events-none absolute -right-24 bottom-24 h-44 w-64 text-amber-500/30" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" />
      </svg>

      <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/85">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-xl font-bold text-white shadow-[0_18px_45px_rgba(245,158,11,0.35)]">P</div>
        <div>
          <p className="text-lg font-semibold text-[#1A1A1A]">Presentia</p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5C3B]">Manager Suite</p>
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

      <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/85">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-base font-bold text-white">M</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[#1A1A1A]">Manager</p>
            <p className="text-xs text-[#6B5C3B]">Team Lead</p>
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Manager Dashboard</p>
          <h1 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Dashboard</h1>
        </div>
        <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-[#4B4B4B] shadow-sm transition hover:bg-[#FFF8E6]" aria-label="Notifications">
          <Icon name="bell" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}

function AttendanceTracker({ clockedIn, onToggleClock }) {
  return (
    <section className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_28px_90px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
          <Icon name="clock" className="h-7 w-7" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Attendance Tracker</h2>
          <p className="mt-1 text-sm text-[#6B5C3B]">Track your daily work hours.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-amber-200 bg-[#FFFDF7] p-5">
          <p className="text-sm font-semibold text-[#6B5C3B]">Check In</p>
          <p className="mt-5 text-2xl font-semibold tracking-[0.08em]">{clockedIn ? '09:12' : '--:--'}</p>
        </div>
        <div className="rounded-3xl border border-amber-200 bg-[#FFFDF7] p-5">
          <p className="text-sm font-semibold text-[#6B5C3B]">Check Out</p>
          <p className="mt-5 text-2xl font-semibold tracking-[0.08em]">--:--</p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-4 rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_18px_55px_rgba(212,175,55,0.1)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF8E6] text-[#9A8553]">
          <Icon name="location" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1A1A1A]">{clockedIn ? 'Location Verified' : 'Location Pending'}</p>
          <p className="mt-1 text-sm text-[#6B5C3B]">{clockedIn ? 'Office perimeter confirmed' : 'Clock in to detect'}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-5">
        <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full border border-amber-100 bg-white shadow-[0_26px_80px_rgba(13,12,29,0.14)] ring-8 ring-white/60">
          <p className="text-3xl font-semibold tracking-[0.08em]">{clockedIn ? '01:24:12' : '00:00:00'}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#6B5C3B]">Duration</p>
        </div>
        <button onClick={onToggleClock} className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)] transition hover:-translate-y-0.5">
          {clockedIn ? 'Clock Out' : 'Clock In Now'}
        </button>
      </div>
    </section>
  )
}

export default function ManagerDashboard() {
  const [clockedIn, setClockedIn] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]">
      <div className="relative min-h-screen overflow-hidden">
        <TechBackground />
        <Sidebar />
        <div className="relative min-w-0 lg:pl-72">
          <Header />
          <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
            <section className="relative overflow-hidden rounded-[34px] border border-white/75 bg-white/80 p-6 shadow-[0_28px_90px_rgba(212,175,55,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.2)] sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_20%,rgba(245,158,11,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,248,230,0.7))]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Team Overview</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">
                  Good morning, <span className="text-amber-600">Manager</span>
                </h2>
                <p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Manage your team&apos;s performance and attendance overview.</p>
              </div>
            </section>

            <section className="mt-8 grid gap-5 lg:grid-cols-4">
              {metrics.map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[30px] border border-amber-200/70 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                      <Icon name={item.icon} />
                    </div>
                    <span className="text-amber-600">↗</span>
                  </div>
                  <p className="mt-8 text-sm font-semibold text-[#6B5C3B]">{item.label}</p>
                  <p className="mt-4 text-4xl font-semibold">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B5C3B]">{item.note}</p>
                </motion.article>
              ))}
            </section>

            <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.42fr]">
              <div className="space-y-6">
                <section className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-[#1A1A1A]">Recent Requests</h2>
                    <button className="text-sm font-semibold text-amber-700">View All</button>
                  </div>
                  <div className="mt-6 space-y-4">
                    {requests.map((request) => (
                      <article key={request.name} className="flex flex-col gap-4 rounded-3xl border border-amber-100 bg-[#FFFDF7] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(212,175,55,0.14)] sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8E6] text-sm font-semibold text-amber-700">{request.initials}</div>
                          <div>
                            <h3 className="font-semibold">{request.name}</h3>
                            <p className="text-sm text-[#6B5C3B]">{request.type} · {request.reason}</p>
                          </div>
                        </div>
                        {request.status === 'Pending' ? (
                          <div className="flex gap-3">
                            <button className="h-10 rounded-xl border border-rose-200 bg-white px-5 text-sm font-semibold text-rose-600 transition hover:bg-rose-50">Reject</button>
                            <button className="h-10 rounded-xl bg-amber-500 px-5 text-sm font-semibold text-white transition hover:bg-amber-600">Approve</button>
                          </div>
                        ) : (
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Approved</span>
                        )}
                      </article>
                    ))}
                  </div>
                </section>

                <section className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
                  <h2 className="text-2xl font-semibold text-[#1A1A1A]">Team Status</h2>
                  <div className="mt-6 space-y-5">
                    {team.map((member) => (
                      <div key={member.name} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF8E6] text-xs font-semibold text-amber-700">{member.initials}</div>
                          <div>
                            <p className="font-semibold">{member.name}</p>
                            <div className="mt-2 flex items-center gap-2">
                              <div className="h-2 w-24 overflow-hidden rounded-full bg-amber-100">
                                <div className="h-full rounded-full bg-emerald-500" style={{ width: `${member.rate}%` }} />
                              </div>
                              <span className="text-xs text-[#6B5C3B]">{member.rate}%</span>
                            </div>
                          </div>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${member.status === 'Online' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{member.status}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <AttendanceTracker clockedIn={clockedIn} onToggleClock={() => setClockedIn((current) => !current)} />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

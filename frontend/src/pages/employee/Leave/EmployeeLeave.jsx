import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/employee/dashboard', icon: 'grid' },
  { label: 'Attendance', path: '/employee/attendance', icon: 'calendar' },
  { label: 'Leave', path: '/employee/leave', icon: 'briefcase' },
  { label: 'Profile', path: '/employee/profile', icon: 'user' }
]

const leaveBalances = [
  { title: 'Casual Leave', available: 8, total: 10, color: 'from-amber-400 to-amber-600', tint: 'bg-amber-100', note: 'Available Casual Leave' },
  { title: 'Sick Leave', available: 6, total: 7, color: 'from-[#D4AF37] to-amber-600', tint: 'bg-[#FFF8E6]', note: 'Available Sick Leave' },
  { title: 'Privilege Leave', available: 5, total: 5, color: 'from-amber-500 to-orange-500', tint: 'bg-orange-100', note: 'Available Privilege Leave' }
]

const requests = [
  { type: 'Casual Leave', status: 'Approved', date: 'Jan 15, 2026 - Jan 16, 2026', applied: 'Jan 10, 2026', days: 2 },
  { type: 'Sick Leave', status: 'Approved', date: 'Jan 5, 2026 - Jan 5, 2026', applied: 'Jan 4, 2026', days: 1 },
  { type: 'Casual Leave', status: 'Pending', date: 'Jan 25, 2026 - Jan 26, 2026', applied: 'Jan 20, 2026', days: 2 }
]

const managers = ['Aarav Mehta - Engineering Manager', 'Priya Sharma - HR Manager', 'Daniel Joseph - Operations Lead']

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
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="M7 9l5-5 5 5" />
        <path d="M5 20h14" />
      </>
    ),
    chevron: <path d="M9 18l6-6-6-6" />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.2),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.22),transparent_28%),radial-gradient(circle_at_48%_62%,rgba(245,158,11,0.13),transparent_34%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
      <svg viewBox="0 0 260 260" className="absolute right-8 top-36 hidden h-72 w-72 text-amber-500/40 drop-shadow-[0_20px_45px_rgba(245,158,11,0.16)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 340 220" className="absolute bottom-20 left-[28rem] hidden h-52 w-72 text-amber-500/35 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <rect x="48" y="52" width="92" height="52" rx="14" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 280 280" className="absolute left-[21rem] top-44 hidden h-56 w-56 text-amber-500/30 drop-shadow-[0_20px_45px_rgba(245,158,11,0.12)] lg:block" fill="none" aria-hidden="true">
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
      <svg viewBox="0 0 340 220" className="pointer-events-none absolute -right-24 bottom-24 h-44 w-64 text-amber-500/30" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Employee Leave</p>
          <h1 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Leave</h1>
        </div>
        <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-[#4B4B4B] shadow-sm transition hover:bg-[#FFF8E6]" aria-label="Notifications">
          <Icon name="bell" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}

function RequestForm({ onClose }) {
  const [fileName, setFileName] = useState('')

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_28px_90px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Leave Request</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">New Request Form</h2>
        </div>
        <button type="button" onClick={onClose} className="w-fit rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]">
          Close
        </button>
      </div>

      <form className="mt-6 grid gap-5 lg:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#1A1A1A]">Leave Type</span>
          <select className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40">
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Privilege Leave</option>
            <option>Emergency Leave</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#1A1A1A]">Send Request To</span>
          <select className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40">
            {managers.map((manager) => (
              <option key={manager}>{manager}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#1A1A1A]">Start Date</span>
          <input type="date" className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#1A1A1A]">End Date</span>
          <input type="date" className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" />
        </label>
        <label className="space-y-2 lg:col-span-2">
          <span className="text-sm font-semibold text-[#1A1A1A]">Reason</span>
          <textarea rows="4" className="w-full resize-none rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" placeholder="Explain why you need leave." />
        </label>
        <label className="lg:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-[#1A1A1A]">Upload Certificate or Document</span>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-amber-300 bg-[#FFF8E6]/70 px-6 py-8 text-center transition hover:bg-[#FFF4D0]">
            <Icon name="upload" className="h-8 w-8 text-amber-600" />
            <p className="mt-3 text-sm font-semibold text-[#1A1A1A]">{fileName || 'Choose certificate, medical proof, or supporting document'}</p>
            <p className="mt-1 text-xs text-[#6B5C3B]">PDF, JPG, or PNG supported</p>
            <input type="file" className="hidden" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} />
          </div>
        </label>
        <div className="flex flex-wrap gap-3 lg:col-span-2">
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)] transition hover:-translate-y-0.5">
            Submit Request
          </button>
          <button type="button" onClick={onClose} className="rounded-2xl border border-amber-200 bg-white px-6 py-4 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]">
            Cancel
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default function EmployeeLeave() {
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('All')
  const filteredRequests = filter === 'All' ? requests : requests.filter((request) => request.status === filter)

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
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Time Off</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">Leave Management</h2>
                <p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Keep track of your time off and requests.</p>
              </div>
              <button type="button" onClick={() => setShowForm(true)} className="inline-flex w-fit items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)] transition hover:-translate-y-0.5">
                <Icon name="plus" />
                New Request
              </button>
            </section>

            {showForm && (
              <div className="mt-8">
                <RequestForm onClose={() => setShowForm(false)} />
              </div>
            )}

            <section className="mt-8 grid gap-5 lg:grid-cols-3">
              {leaveBalances.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[30px] border border-amber-200/70 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-white text-amber-600 shadow-sm">
                      <Icon name="briefcase" />
                    </div>
                    <span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-xs font-semibold text-[#6B5C3B]">{item.total} Total</span>
                  </div>
                  <p className="mt-9 text-4xl font-semibold text-[#1A1A1A]">{item.available}</p>
                  <p className="mt-3 text-sm text-[#6B5C3B]">{item.note}</p>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-amber-100">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${(item.available / item.total) * 100}%` }} />
                  </div>
                </motion.article>
              ))}
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">Request History</h2>
              <div className="mt-5 grid w-full gap-2 rounded-[24px] border border-amber-100 bg-white/80 p-1 shadow-sm sm:grid-cols-4">
                {['All', 'Pending', 'Approved', 'Rejected'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      filter === item ? 'bg-amber-500 text-white shadow-md shadow-amber-200' : 'text-[#1A1A1A] hover:bg-[#FFF8E6]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                {filteredRequests.map((request) => (
                  <article key={`${request.type}-${request.date}`} className="flex flex-col gap-5 rounded-[28px] border border-amber-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(212,175,55,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(212,175,55,0.18)] sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-[#1A1A1A]">{request.type}</h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          request.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[#6B5C3B]">{request.date} · Applied: {request.applied}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <p className="text-3xl font-semibold text-[#1A1A1A]">{request.days}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B5C3B]">{request.days === 1 ? 'Day' : 'Days'}</p>
                      </div>
                      <Icon name="chevron" className="h-6 w-6 text-[#9A8553]" />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

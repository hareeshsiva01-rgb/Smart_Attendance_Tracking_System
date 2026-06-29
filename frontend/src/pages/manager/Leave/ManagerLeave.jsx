import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/manager/dashboard', icon: 'grid' },
  { label: 'My Attendance', path: '/manager/attendance', icon: 'calendar' },
  { label: 'My Team', path: '/manager/team', icon: 'users' },
  { label: 'Approvals', path: '/manager/approvals', icon: 'clipboard' },
  { label: 'My Leave', path: '/manager/leave', icon: 'briefcase' },
  { label: 'Settings', path: '/manager/settings', icon: 'settings' }
]

const balances = [
  { title: 'Casual Leave', available: 8, total: 10, accent: 'from-amber-400 to-amber-600' },
  { title: 'Sick Leave', available: 6, total: 7, accent: 'from-[#D4AF37] to-amber-600' },
  { title: 'Privilege Leave', available: 5, total: 5, accent: 'from-amber-500 to-orange-500' }
]

const history = [
  { type: 'Casual Leave', status: 'Approved', dates: 'Jan 15, 2026 - Jan 16, 2026', applied: 'Jan 10, 2026', days: 2 },
  { type: 'Sick Leave', status: 'Approved', dates: 'Jan 5, 2026', applied: 'Jan 4, 2026', days: 1 },
  { type: 'Casual Leave', status: 'Pending', dates: 'Jan 25, 2026 - Jan 26, 2026', applied: 'Jan 20, 2026', days: 2 }
]

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    grid: <><path d="M4 4h6v6H4z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6H4z" /><path d="M14 14h6v6h-6z" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></>,
    calendar: <><path d="M7 3v4" /><path d="M17 3v4" /><path d="M4 9h16" /><path d="M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /></>,
    briefcase: <><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" /><path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M4 12h16" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2M9 11l2 2 4-4" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-2.88 1.21V21h-4v-.09a1.7 1.7 0 0 0-2.88-1.21l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 3.09 14H3v-4h.09a1.7 1.7 0 0 0 1.21-2.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 10 3.09V3h4v.09a1.7 1.7 0 0 0 2.88 1.21l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 20.91 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    logout: <><path d="M10 17 15 12 10 7" /><path d="M15 12H3" /><path d="M21 4v16" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    upload: <><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M5 20h14" /></>,
    chevron: <path d="m9 18 6-6-6-6" />
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name]}</svg>
}

function TechBackground() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.2),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.22),transparent_28%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
    <svg viewBox="0 0 300 220" className="absolute right-10 top-40 hidden h-60 w-72 text-amber-500/40 lg:block" fill="none"><rect x="30" y="28" width="240" height="164" rx="26" stroke="currentColor" strokeWidth="4" /><path d="M30 72h240M82 28v44M218 28v44" stroke="currentColor" strokeWidth="4" /><path d="M66 104h28M126 104h28M186 104h28M66 142h28M126 142h28M186 142h28" stroke="currentColor" strokeWidth="7" strokeLinecap="round" /></svg>
    <svg viewBox="0 0 280 240" className="absolute left-[20rem] top-52 hidden h-56 w-64 text-amber-500/30 lg:block" fill="none"><path d="M62 76h156v118H62z" stroke="currentColor" strokeWidth="5" /><path d="M104 76V54a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v22M62 126h156" stroke="currentColor" strokeWidth="5" /><circle cx="140" cy="126" r="14" fill="currentColor" /></svg>
    <svg viewBox="0 0 320 220" className="absolute bottom-20 right-[18%] hidden h-52 w-72 text-amber-500/35 lg:block" fill="none"><path d="M56 34h208v152H56z" stroke="currentColor" strokeWidth="4" /><path d="M88 72h144M88 108h112M88 144h132" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /><path d="m224 108 20 20 38-44" stroke="currentColor" strokeWidth="5" /></svg>
  </div>
}

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  return <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
    <svg viewBox="0 0 280 240" className="pointer-events-none absolute -left-20 top-28 h-48 w-56 text-amber-500/35" fill="none"><path d="M62 76h156v118H62z" stroke="currentColor" strokeWidth="5" /><path d="M104 76V54a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v22M62 126h156" stroke="currentColor" strokeWidth="5" /></svg>
    <svg viewBox="0 0 300 220" className="pointer-events-none absolute -right-24 top-[45%] h-44 w-64 text-amber-500/30" fill="none"><rect x="30" y="28" width="240" height="164" rx="26" stroke="currentColor" strokeWidth="4" /><path d="M30 72h240M82 28v44M218 28v44" stroke="currentColor" strokeWidth="4" /><path d="M66 104h28M126 104h28M186 104h28M66 142h28M126 142h28" stroke="currentColor" strokeWidth="7" /></svg>
    <svg viewBox="0 0 320 220" className="pointer-events-none absolute -left-20 bottom-14 h-40 w-60 text-amber-500/30" fill="none"><path d="M56 34h208v152H56z" stroke="currentColor" strokeWidth="4" /><path d="M88 72h144M88 108h112M88 144h132" stroke="currentColor" strokeWidth="6" /></svg>
    <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-bold text-white">P</div><div><p className="text-lg font-semibold">Presentia</p><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5C3B]">Manager Suite</p></div></div>
    <nav className="relative mt-10 space-y-2"><p className="px-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Menu</p>{navItems.map(item => <a key={item.label} href={item.path} className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition duration-300 ${location.pathname === item.path ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-[0_16px_45px_rgba(245,158,11,0.32)]' : 'text-[#4B4B4B] hover:bg-white/85'}`}><Icon name={item.icon} />{item.label}</a>)}</nav>
    <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-bold text-white">M</div><div className="min-w-0 flex-1"><p className="text-sm font-semibold">Manager</p><p className="text-xs text-[#6B5C3B]">Team Lead</p></div><button onClick={() => navigate('/login')} className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-[#9A8553] hover:bg-amber-500 hover:text-white"><Icon name="logout" className="h-4 w-4" /></button></div></div>
  </aside>
}

function RequestForm({ onClose }) {
  const [fileName, setFileName] = useState('')
  return <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[34px] border border-amber-200 bg-white p-6 shadow-[0_28px_90px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
    <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Manager Leave Request</p><h2 className="mt-2 text-2xl font-semibold">New Request</h2></div><button onClick={onClose} className="h-11 rounded-xl border border-amber-200 bg-white px-4 text-sm font-semibold hover:bg-[#FFF8E6]">Close</button></div>
    <form className="mt-6 grid gap-5 md:grid-cols-2"><label className="space-y-2"><span className="text-sm font-semibold">Leave Type</span><select className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none"><option>Casual Leave</option><option>Sick Leave</option><option>Privilege Leave</option><option>Emergency Leave</option></select></label><label className="space-y-2"><span className="text-sm font-semibold">Send Request To</span><select className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none"><option>Operations Director</option><option>Human Resources</option><option>Organization Admin</option></select></label><label className="space-y-2"><span className="text-sm font-semibold">Start Date</span><input type="date" className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none" /></label><label className="space-y-2"><span className="text-sm font-semibold">End Date</span><input type="date" className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none" /></label><label className="space-y-2 md:col-span-2"><span className="text-sm font-semibold">Reason</span><textarea rows="4" placeholder="Explain why you need leave." className="w-full resize-none rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none" /></label><label className="md:col-span-2"><span className="mb-2 block text-sm font-semibold">Supporting Document</span><div className="flex cursor-pointer flex-col items-center rounded-[26px] border border-dashed border-amber-300 bg-[#FFF8E6] p-7 text-center"><Icon name="upload" className="h-8 w-8 text-amber-600" /><p className="mt-3 text-sm font-semibold">{fileName || 'Upload certificate or supporting document'}</p><p className="mt-1 text-xs text-[#6B5C3B]">PDF, JPG, or PNG</p><input type="file" className="hidden" onChange={event => setFileName(event.target.files?.[0]?.name || '')} /></div></label><button type="submit" className="h-12 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(245,158,11,0.22)]">Submit Request</button></form>
  </motion.section>
}

export default function ManagerLeave() {
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? history : history.filter(item => item.status === filter)
  return <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]"><div className="relative min-h-screen overflow-hidden"><TechBackground /><Sidebar /><div className="relative min-w-0 lg:pl-72"><header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/70 px-5 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Manager Leave</p><h1 className="mt-1 text-xl font-semibold">My Leave</h1></div><button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white"><Icon name="bell" /><span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" /></button></div></header>
    <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12"><section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Time Off</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Leave Management</h2><p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Keep track of your time off and requests.</p></div><button onClick={() => setShowForm(true)} className="inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(245,158,11,0.22)]"><Icon name="plus" className="h-4 w-4" />New Request</button></section>
      {showForm && <div className="mt-8"><RequestForm onClose={() => setShowForm(false)} /></div>}
      <section className="mt-8 grid gap-5 lg:grid-cols-3">{balances.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} className="rounded-[30px] border border-amber-200 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.2)]"><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-white text-amber-600"><Icon name="briefcase" /></div><span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-xs font-semibold text-[#6B5C3B]">{item.total} Total</span></div><p className="mt-8 text-4xl font-semibold">{item.available}</p><p className="mt-2 text-sm text-[#6B5C3B]">Available {item.title}</p><div className="mt-6 h-2 overflow-hidden rounded-full bg-amber-100"><div className={`h-full rounded-full bg-gradient-to-r ${item.accent}`} style={{ width: `${item.available / item.total * 100}%` }} /></div></motion.article>)}</section>
      <section className="mt-10"><h2 className="text-2xl font-semibold">Request History</h2><div className="mt-5 grid w-full gap-2 rounded-[24px] border border-amber-100 bg-white/85 p-1 shadow-sm sm:grid-cols-4">{['All', 'Pending', 'Approved', 'Rejected'].map(item => <button key={item} onClick={() => setFilter(item)} className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${filter === item ? 'bg-amber-500 text-white shadow-md shadow-amber-200' : 'hover:bg-[#FFF8E6]'}`}>{item}</button>)}</div><div className="mt-6 space-y-4">{filtered.map(item => <article key={`${item.type}-${item.dates}`} className="flex flex-col gap-5 rounded-[28px] border border-amber-200 bg-white p-6 shadow-[0_18px_60px_rgba(212,175,55,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(212,175,55,0.18)] sm:flex-row sm:items-center sm:justify-between"><div><div className="flex flex-wrap items-center gap-3"><h3 className="text-lg font-semibold">{item.type}</h3><span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{item.status}</span></div><p className="mt-3 text-sm text-[#6B5C3B]">{item.dates} · Applied: {item.applied}</p></div><div className="flex items-center gap-5"><div className="text-right"><p className="text-3xl font-semibold">{item.days}</p><p className="text-xs uppercase tracking-[0.18em] text-[#6B5C3B]">{item.days === 1 ? 'Day' : 'Days'}</p></div><Icon name="chevron" className="text-[#9A8553]" /></div></article>)}</div></section>
    </main></div></div></div>
}

import { useMemo, useState } from 'react'
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

const initialRequests = [
  { id: 1, name: 'Sarah Johnson', role: 'Senior Developer', category: 'Leaves', type: 'Casual Leave', date: 'Jan 25, 2026 - Jan 26, 2026', duration: '2 days', reason: 'Family function', applied: 'Jan 20, 2026', icon: 'briefcase' },
  { id: 2, name: 'Michael Chen', role: 'Frontend Developer', category: 'Leaves', type: 'Sick Leave', date: 'Jan 22, 2026', duration: '1 day', reason: 'Medical appointment', applied: 'Jan 19, 2026', icon: 'briefcase' },
  { id: 3, name: 'Emily Davis', role: 'UI/UX Designer', category: 'Face ID', type: 'Face ID Setup', date: 'Verification required', duration: '', reason: 'Initial biometric setup for attendance', applied: 'Jan 18, 2026', icon: 'fingerprint' },
  { id: 4, name: 'James Wilson', role: 'Backend Developer', category: 'Attendance', type: 'Attendance Correction', date: 'Jan 15, 2026', duration: '', reason: 'Forgot to clock in, was present at office', applied: 'Jan 16, 2026', icon: 'clock' },
  { id: 5, name: 'Lisa Anderson', role: 'QA Engineer', category: 'Leaves', type: 'Privilege Leave', date: 'Feb 5, 2026 - Feb 7, 2026', duration: '3 days', reason: 'Vacation', applied: 'Jan 20, 2026', icon: 'briefcase' }
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
    fingerprint: <><path d="M6 12a6 6 0 0 1 12 0" /><path d="M8.5 14.5c.4-3.4 6.6-3.4 7 0" /><path d="M9 19c1-1.6 1.5-3.1 1.5-5M14 20c1.2-2 1.8-4 1.5-6" /><path d="M4 15.5V12a8 8 0 0 1 16 0v2" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name]}</svg>
}

function TechBackground() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.2),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.22),transparent_28%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
    <svg viewBox="0 0 300 240" className="absolute right-10 top-40 hidden h-64 w-72 text-amber-500/40 lg:block" fill="none"><rect x="52" y="38" width="196" height="168" rx="28" stroke="currentColor" strokeWidth="5" /><path d="M104 38V22h92v16M92 92l24 24 48-52M92 154h116" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <svg viewBox="0 0 260 260" className="absolute left-[20rem] top-56 hidden h-56 w-56 text-amber-500/30 lg:block" fill="none"><circle cx="130" cy="130" r="104" stroke="currentColor" strokeWidth="4" strokeDasharray="12 10" /><path d="M82 130l32 32 68-74" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <svg viewBox="0 0 340 220" className="absolute bottom-20 right-[20%] hidden h-52 w-72 text-amber-500/35 lg:block" fill="none"><rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" /><path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" /></svg>
  </div>
}

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  return <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
    <svg viewBox="0 0 300 240" className="pointer-events-none absolute -left-20 top-28 h-48 w-60 text-amber-500/35" fill="none"><rect x="52" y="38" width="196" height="168" rx="28" stroke="currentColor" strokeWidth="5" /><path d="M104 38V22h92v16M92 92l24 24 48-52M92 154h116" stroke="currentColor" strokeWidth="6" /></svg>
    <svg viewBox="0 0 260 260" className="pointer-events-none absolute -right-16 top-[45%] h-44 w-44 text-amber-500/30" fill="none"><circle cx="130" cy="130" r="104" stroke="currentColor" strokeWidth="4" strokeDasharray="12 10" /><path d="M82 130l32 32 68-74" stroke="currentColor" strokeWidth="7" /></svg>
    <svg viewBox="0 0 340 220" className="pointer-events-none absolute -right-24 bottom-16 h-40 w-60 text-amber-500/30" fill="none"><rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" /><path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" /></svg>
    <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-bold text-white">P</div><div><p className="text-lg font-semibold">Presentia</p><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5C3B]">Manager Suite</p></div></div>
    <nav className="relative mt-10 space-y-2"><p className="px-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Menu</p>{navItems.map(item => <a key={item.label} href={item.path} className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition duration-300 ${location.pathname === item.path ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-[0_16px_45px_rgba(245,158,11,0.32)]' : 'text-[#4B4B4B] hover:bg-white/85'}`}><Icon name={item.icon} />{item.label}</a>)}</nav>
    <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-bold text-white">M</div><div className="min-w-0 flex-1"><p className="text-sm font-semibold">Manager</p><p className="text-xs text-[#6B5C3B]">Team Lead</p></div><button onClick={() => navigate('/login')} className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-[#9A8553] hover:bg-amber-500 hover:text-white"><Icon name="logout" className="h-4 w-4" /></button></div></div>
  </aside>
}

function RequestCard({ request, onDecision }) {
  return <motion.article layout className="rounded-[30px] border border-amber-200 bg-white p-6 shadow-[0_20px_65px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_rgba(212,175,55,0.22)]">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF8E6] text-amber-600"><Icon name={request.icon} /></div><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-semibold">{request.name}</h3><span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-[#6B5C3B]">{request.role}</span></div><p className="mt-2 text-sm text-[#6B5C3B]">Applied on {request.applied}</p></div></div><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Reviewing</span></div>
    <div className="mt-6 grid gap-5 rounded-[24px] border border-amber-100 bg-[#FFFDF7] p-5 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A8553]">Request Type</p><p className="mt-2 font-semibold">{request.type}</p><p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9A8553]">Reason</p><p className="mt-2 text-sm italic text-[#4B4B4B]">“{request.reason}”</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A8553]">Date(s)</p><p className="mt-2 text-sm font-semibold">{request.date} {request.duration && <span className="font-normal text-[#6B5C3B]">({request.duration})</span>}</p></div></div>
    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end"><button onClick={() => onDecision(request.id, 'rejected')} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white px-6 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"><Icon name="close" className="h-4 w-4" />Reject</button><button onClick={() => onDecision(request.id, 'approved')} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(245,158,11,0.22)] transition hover:-translate-y-0.5"><Icon name="check" className="h-4 w-4" />Approve Request</button></div>
  </motion.article>
}

export default function ManagerApprovals() {
  const [requests, setRequests] = useState(initialRequests)
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => filter === 'All' ? requests : requests.filter(request => request.category === filter), [filter, requests])
  const decide = id => setRequests(current => current.filter(request => request.id !== id))
  const counts = { Leaves: requests.filter(r => r.category === 'Leaves').length, Attendance: requests.filter(r => r.category === 'Attendance').length, 'Face ID': requests.filter(r => r.category === 'Face ID').length }

  return <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]"><div className="relative min-h-screen overflow-hidden"><TechBackground /><Sidebar /><div className="relative min-w-0 lg:pl-72"><header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/70 px-5 py-4 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Manager Workflow</p><h1 className="mt-1 text-xl font-semibold">Approvals</h1></div><button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white"><Icon name="bell" /><span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" /></button></div></header>
    <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12"><section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Review Queue</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Request Approvals</h2><p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Review and take action on team requests.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" />{requests.length} Pending</span></section>
      <section className="mt-8 grid gap-5 lg:grid-cols-4">{[['Pending Total', requests.length, 'clipboard'], ['Leave Requests', counts.Leaves, 'briefcase'], ['Attendance Fixes', counts.Attendance, 'clock'], ['Biometric Setup', counts['Face ID'], 'fingerprint']].map(([label, value, icon], index) => <motion.article key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} className="rounded-[28px] border border-amber-200 bg-white p-6 shadow-[0_22px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,175,55,0.2)]"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-[#6B5C3B]">{label}</p><p className="mt-5 text-4xl font-semibold">{value}</p></div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF8E6] text-amber-600"><Icon name={icon} /></div></div></motion.article>)}</section>
      <div className="mt-8 grid w-full gap-2 rounded-[24px] border border-amber-100 bg-white/85 p-1 shadow-sm sm:grid-cols-4">{['All', 'Leaves', 'Attendance', 'Face ID'].map(item => <button key={item} onClick={() => setFilter(item)} className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${filter === item ? 'bg-amber-500 text-white shadow-md shadow-amber-200' : 'hover:bg-[#FFF8E6]'}`}>{item}</button>)}</div>
      <section className="mt-6 space-y-5">{filtered.map(request => <RequestCard key={request.id} request={request} onDecision={decide} />)}{filtered.length === 0 && <div className="rounded-[30px] border border-amber-200 bg-white p-12 text-center shadow-sm"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><Icon name="check" className="h-8 w-8" /></div><h3 className="mt-5 text-xl font-semibold">Queue is clear</h3><p className="mt-2 text-sm text-[#6B5C3B]">No pending requests in this category.</p></div>}</section>
    </main></div></div></div>
}

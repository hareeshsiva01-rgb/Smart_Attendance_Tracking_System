import { useLocation, useNavigate } from 'react-router-dom'

export const organizerNavItems = [
  { label: 'Dashboard', path: '/organizer/dashboard', icon: 'grid' },
  { label: 'My Attendance', path: '/organizer/attendance', icon: 'calendar' },
  { label: 'Employees', path: '/organizer/employees', icon: 'users' },
  { label: 'Managers', path: '/organizer/managers', icon: 'userCheck' },
  { label: 'Attendance Monitoring', path: '/organizer/monitoring', icon: 'activity' },
  { label: 'Reports', path: '/organizer/reports', icon: 'document' },
  { label: 'Settings', path: '/organizer/settings', icon: 'settings' }
]

export function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    grid: <><path d="M4 4h6v6H4z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6H4z" /><path d="M14 14h6v6h-6z" /></>,
    calendar: <><path d="M7 3v4" /><path d="M17 3v4" /><path d="M4 9h16" /><path d="M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    userCheck: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m16 11 2 2 4-4" /></>,
    activity: <path d="M3 12h4l2-7 4 14 2-7h6" />,
    document: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 13h6M9 17h6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-2.88 1.21V21h-4v-.09a1.7 1.7 0 0 0-2.88-1.21l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 3.09 14H3v-4h.09a1.7 1.7 0 0 0 1.21-2.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 10 3.09V3h4v.09a1.7 1.7 0 0 0 2.88 1.21l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 20.91 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    logout: <><path d="M10 17 15 12 10 7" /><path d="M15 12H3" /><path d="M21 4v16" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    location: <><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    trend: <><path d="M4 17 10 11l4 4 6-8" /><path d="M14 7h6v6" /></>,
    alert: <><path d="M12 3 2 21h20z" /><path d="M12 9v5M12 18h.01" /></>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name]}</svg>
}

function OrganizerBackground({ variant }) {
  const attendance = variant === 'attendance'
  return <div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.2),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(212,175,55,0.22),transparent_28%),linear-gradient(135deg,rgba(255,253,247,1),rgba(248,246,240,0.86)_48%,rgba(255,253,247,1))]" />
    {attendance ? <>
      <svg viewBox="0 0 280 280" className="absolute right-8 top-40 hidden h-72 w-72 text-amber-500/40 lg:block" fill="none"><circle cx="140" cy="120" r="84" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" /><circle cx="140" cy="120" r="52" stroke="currentColor" strokeWidth="4" /><path d="M140 204s58-43 58-92a58 58 0 0 0-116 0c0 49 58 92 58 92z" stroke="currentColor" strokeWidth="5" /><circle cx="140" cy="112" r="18" stroke="currentColor" strokeWidth="5" /></svg>
      <svg viewBox="0 0 300 220" className="absolute left-[20rem] top-52 hidden h-56 w-72 text-amber-500/30 lg:block" fill="none"><rect x="30" y="28" width="240" height="164" rx="26" stroke="currentColor" strokeWidth="4" /><path d="M30 72h240M82 28v44M218 28v44" stroke="currentColor" strokeWidth="4" /><path d="M66 104h28M126 104h28M186 104h28M66 142h28M126 142h28" stroke="currentColor" strokeWidth="7" /></svg>
      <svg viewBox="0 0 260 260" className="absolute bottom-20 right-[22%] hidden h-60 w-60 text-amber-500/35 lg:block" fill="none"><circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" /><circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" /><path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" /></svg>
    </> : <>
      <svg viewBox="0 0 320 240" className="absolute right-8 top-36 hidden h-64 w-80 text-amber-500/40 lg:block" fill="none"><rect x="34" y="30" width="252" height="180" rx="30" stroke="currentColor" strokeWidth="4" /><path d="M74 160V98M126 160V70M178 160v-40M230 160V52" stroke="currentColor" strokeWidth="13" strokeLinecap="round" /><path d="M66 184h174" stroke="currentColor" strokeWidth="4" /></svg>
      <svg viewBox="0 0 300 260" className="absolute left-[20rem] top-52 hidden h-60 w-72 text-amber-500/30 lg:block" fill="none"><circle cx="150" cy="72" r="26" stroke="currentColor" strokeWidth="5" /><circle cx="72" cy="182" r="24" stroke="currentColor" strokeWidth="5" /><circle cx="228" cy="182" r="24" stroke="currentColor" strokeWidth="5" /><path d="M136 94 88 160M164 94l48 66M98 182h104" stroke="currentColor" strokeWidth="4" strokeDasharray="10 8" /></svg>
      <svg viewBox="0 0 340 220" className="absolute bottom-20 right-[20%] hidden h-52 w-72 text-amber-500/35 lg:block" fill="none"><rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" /><path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" /></svg>
    </>}
  </div>
}

function Sidebar({ variant }) {
  const navigate = useNavigate(); const location = useLocation(); const attendance = variant === 'attendance'
  return <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 overflow-hidden border-r border-amber-200/70 bg-[#FFF7DF] px-5 py-7 shadow-[22px_0_90px_rgba(212,175,55,0.16)] lg:flex lg:flex-col"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,248,230,0.82)_48%,rgba(255,253,247,0.96))]" />
    {attendance ? <><svg viewBox="0 0 280 280" className="pointer-events-none absolute -left-20 top-28 h-48 w-48 text-amber-500/35" fill="none"><path d="M140 204s58-43 58-92a58 58 0 0 0-116 0c0 49 58 92 58 92z" stroke="currentColor" strokeWidth="5" /><circle cx="140" cy="112" r="18" stroke="currentColor" strokeWidth="5" /></svg><svg viewBox="0 0 300 220" className="pointer-events-none absolute -right-24 top-[45%] h-44 w-64 text-amber-500/30" fill="none"><rect x="30" y="28" width="240" height="164" rx="26" stroke="currentColor" strokeWidth="4" /><path d="M30 72h240M82 28v44M218 28v44" stroke="currentColor" strokeWidth="4" /><path d="M66 104h28M126 104h28M186 104h28M66 142h28" stroke="currentColor" strokeWidth="7" /></svg></> : <><svg viewBox="0 0 320 240" className="pointer-events-none absolute -left-24 top-28 h-48 w-60 text-amber-500/35" fill="none"><rect x="34" y="30" width="252" height="180" rx="30" stroke="currentColor" strokeWidth="4" /><path d="M74 160V98M126 160V70M178 160v-40M230 160V52" stroke="currentColor" strokeWidth="13" /></svg><svg viewBox="0 0 300 260" className="pointer-events-none absolute -right-24 top-[44%] h-44 w-56 text-amber-500/30" fill="none"><circle cx="150" cy="72" r="26" stroke="currentColor" strokeWidth="5" /><circle cx="72" cy="182" r="24" stroke="currentColor" strokeWidth="5" /><circle cx="228" cy="182" r="24" stroke="currentColor" strokeWidth="5" /><path d="M136 94 88 160M164 94l48 66" stroke="currentColor" strokeWidth="4" /></svg></>}
    <svg viewBox="0 0 340 220" className="pointer-events-none absolute -left-20 bottom-14 h-40 w-60 text-amber-500/30" fill="none"><rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" /><path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" /></svg>
    <div className="relative flex items-center gap-4 rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_70px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-bold text-white">P</div><div><p className="text-lg font-semibold">Presentia</p><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5C3B]">Organizer Suite</p></div></div>
    <nav className="relative mt-10 space-y-2"><p className="px-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Menu</p>{organizerNavItems.map(item => <a key={item.label} href={item.path} className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition duration-300 ${location.pathname === item.path ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-[0_16px_45px_rgba(245,158,11,0.32)]' : 'text-[#4B4B4B] hover:bg-white/85'}`}><Icon name={item.icon} />{item.label}</a>)}</nav>
    <div className="relative mt-auto rounded-[32px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(212,175,55,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-white/85"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-bold text-white">O</div><div className="min-w-0 flex-1"><p className="text-sm font-semibold">Organizer</p><p className="text-xs text-[#6B5C3B]">Organization Lead</p></div><button onClick={() => navigate('/login')} className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-[#9A8553] hover:bg-amber-500 hover:text-white"><Icon name="logout" className="h-4 w-4" /></button></div></div>
  </aside>
}

export default function OrganizerShell({ children, title, variant = 'dashboard' }) {
  return <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]"><div className="relative min-h-screen overflow-hidden"><OrganizerBackground variant={variant} /><Sidebar variant={variant} /><div className="relative min-w-0 lg:pl-72"><header className="sticky top-0 z-20 border-b border-amber-200/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Organizer</p><h1 className="mt-1 text-xl font-semibold">{title}</h1></div><button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white"><Icon name="bell" /><span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" /></button></div></header>{children}</div></div></div>
}

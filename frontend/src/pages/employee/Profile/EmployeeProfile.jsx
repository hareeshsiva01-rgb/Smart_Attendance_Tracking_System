import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/employee/dashboard', icon: 'grid' },
  { label: 'Attendance', path: '/employee/attendance', icon: 'calendar' },
  { label: 'Leave', path: '/employee/leave', icon: 'briefcase' },
  { label: 'Profile', path: '/employee/profile', icon: 'user' }
]

const tabs = [
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'security', label: 'Security & Face ID', icon: 'shield' },
  { id: 'preferences', label: 'Preferences', icon: 'bell' }
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
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
      </>
    ),
    fingerprint: (
      <>
        <path d="M6 12a6 6 0 0 1 12 0" />
        <path d="M8.5 14.5c.4-3.4 6.6-3.4 7 0" />
        <path d="M9 19c1-1.6 1.5-3.1 1.5-5" />
        <path d="M14 20c1.2-2 1.8-4 1.5-6" />
        <path d="M4 15.5V12a8 8 0 0 1 16 0v2" />
      </>
    ),
    mail: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
      </>
    ),
    map: (
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
      <svg viewBox="0 0 260 260" className="absolute right-10 top-40 hidden h-72 w-72 text-amber-500/40 drop-shadow-[0_20px_45px_rgba(245,158,11,0.16)] lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <path d="M130 130 216 74M130 22v216M22 130h216" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 260 260" className="absolute left-[20rem] top-52 hidden h-60 w-60 text-amber-500/30 lg:block" fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
      </svg>
      <svg viewBox="0 0 340 220" className="absolute bottom-16 left-[32rem] hidden h-52 w-72 text-amber-500/35 lg:block" fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Employee Profile</p>
          <h1 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Profile</h1>
        </div>
        <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-[#4B4B4B] shadow-sm transition hover:bg-[#FFF8E6]" aria-label="Notifications">
          <Icon name="bell" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}

function Field({ label, icon, value }) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-semibold text-[#1A1A1A]">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm text-[#6B5C3B] shadow-sm">
        <Icon name={icon} className="h-4 w-4 text-[#9A8553]" />
        <span>{value}</span>
      </div>
    </label>
  )
}

function ProfileTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.42fr_0.58fr]">
      <motion.aside className="overflow-hidden rounded-[34px] border border-amber-200/70 bg-white shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
        <div className="h-36 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600" />
        <div className="-mt-16 px-8 pb-8 text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-[#FFF8E6] text-4xl font-semibold text-amber-700 shadow-[0_18px_60px_rgba(212,175,55,0.18)]">U</div>
          <h2 className="mt-6 text-3xl font-semibold text-[#1A1A1A]">User</h2>
          <p className="mt-2 text-sm font-medium text-[#6B5C3B]">Software Engineer</p>
          <div className="mt-5 flex justify-center gap-2">
            <span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-xs font-semibold text-[#6B5C3B]">Engineering</span>
            <span className="rounded-full bg-[#FFF8E6] px-3 py-1 text-xs font-semibold text-[#6B5C3B]">EMP438</span>
          </div>
        </div>
      </motion.aside>

      <motion.section className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)] sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Personal Details</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">Profile Information</h2>
          </div>
          <button type="button" className="w-fit rounded-full border border-amber-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]">Edit Profile</button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Field label="Full Name" icon="user" value="User" />
          <Field label="Email Address" icon="mail" value="user@company.com" />
          <Field label="Phone Number" icon="phone" value="+1 (555) 123-4567" />
          <Field label="Language" icon="map" value="English (US)" />
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-[#1A1A1A]">Theme Preference</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <button className="rounded-2xl border border-amber-300 bg-[#FFF8E6] px-5 py-4 text-sm font-semibold text-amber-800">Light Mode</button>
            <button className="rounded-2xl border border-amber-100 bg-white px-5 py-4 text-sm font-semibold text-[#6B5C3B] transition hover:bg-[#FFF8E6]">Dark Mode</button>
          </div>
        </div>
      </motion.section>

      <motion.section className="rounded-[34px] border border-amber-200/70 bg-white p-6 shadow-[0_20px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(212,175,55,0.2)] xl:col-start-2">
        <h2 className="text-2xl font-semibold text-[#1A1A1A]">Change Password</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {['Current Password', 'New Password', 'Confirm Password'].map((label) => (
            <label key={label} className="space-y-2">
              <span className="text-sm font-semibold text-[#1A1A1A]">{label}</span>
              <input type="password" value="password" readOnly className="w-full rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 text-sm outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" />
            </label>
          ))}
        </div>
        <button className="mt-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)] transition hover:-translate-y-0.5">Update Password</button>
      </motion.section>
    </div>
  )
}

function SecurityTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.45fr]">
      <motion.section className="rounded-[34px] border border-amber-200/70 bg-white shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
        <div className="rounded-t-[34px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-8 text-white">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">
              <Icon name="fingerprint" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Face ID Security</h2>
              <p className="mt-2 text-sm text-white/85">Manage biometric data used for attendance verification.</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-col gap-5 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">✓</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">Face ID is Active</h3>
                <p className="mt-1 text-sm text-[#6B5C3B]">Your biometric data is secure and up to date.</p>
              </div>
            </div>
            <button className="rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(245,158,11,0.22)]">Request Update</button>
          </div>
        </div>
      </motion.section>

      <motion.aside className="rounded-[34px] border border-amber-200/70 bg-white p-8 shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
        <Icon name="shield" className="h-12 w-12 text-amber-600" />
        <h2 className="mt-8 text-2xl font-semibold text-[#1A1A1A]">Security Tips</h2>
        <div className="mt-6 space-y-4 text-sm text-[#6B5C3B]">
          <p>✓ Update face data every 3 months.</p>
          <p>✓ Scan with clear lighting.</p>
          <p>✓ Keep location services enabled.</p>
        </div>
      </motion.aside>

      <motion.section className="rounded-[34px] border border-amber-200/70 bg-white p-8 shadow-[0_20px_70px_rgba(212,175,55,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(212,175,55,0.2)]">
        <div className="flex items-center gap-3">
          <Icon name="map" className="h-6 w-6 text-amber-600" />
          <h2 className="text-2xl font-semibold text-[#1A1A1A]">Location Settings</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <input placeholder="New location name" className="rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" />
          <input placeholder="Reason for change" className="rounded-2xl border border-amber-200 bg-[#FFFDF7] px-4 py-4 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-200/40" />
        </div>
        <button className="mt-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(245,158,11,0.28)]">Submit Location Change Request</button>
      </motion.section>
    </div>
  )
}

function ToggleRow({ title, description, icon }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-amber-100 py-7 last:border-b-0">
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF8E6] text-amber-600">
          <Icon name={icon} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
          <p className="mt-1 text-sm text-[#6B5C3B]">{description}</p>
        </div>
      </div>
      <button className="relative h-7 w-12 rounded-full bg-amber-500 shadow-inner">
        <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm" />
      </button>
    </div>
  )
}

function PreferencesTab() {
  return (
    <motion.section className="mx-auto max-w-4xl rounded-[34px] border border-amber-200/70 bg-white p-8 shadow-[0_24px_80px_rgba(212,175,55,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_105px_rgba(212,175,55,0.22)]">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9A8553]">Alerts</p>
      <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">Notification Preferences</h2>
      <p className="mt-3 text-sm text-[#6B5C3B]">Manage how you receive attendance alerts and reports.</p>
      <div className="mt-6">
        <ToggleRow title="Email Notifications" description="Receive daily attendance reports via email." icon="mail" />
        <ToggleRow title="Push Notifications" description="Instant alerts for check-in and check-out success." icon="bell" />
        <ToggleRow title="System Updates" description="Get notified about new features and maintenance." icon="shield" />
      </div>
    </motion.section>
  )
}

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]">
      <div className="relative min-h-screen overflow-hidden">
        <TechBackground />
        <Sidebar />
        <div className="relative min-w-0 lg:pl-72">
          <Header />
          <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
            <section>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9A8553]">Employee Settings</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl">Profile Settings</h2>
              <p className="mt-3 text-base text-[#6B5C3B] sm:text-lg">Manage your profile, security, and notification preferences.</p>
            </section>

            <div className="mt-8 grid w-full gap-2 rounded-[24px] border border-amber-100 bg-white/85 p-1 shadow-sm sm:grid-cols-3 lg:max-w-3xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activeTab === tab.id ? 'bg-amber-500 text-white shadow-md shadow-amber-200' : 'text-[#1A1A1A] hover:bg-[#FFF8E6]'
                  }`}
                >
                  <Icon name={tab.icon} className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {activeTab === 'profile' && <ProfileTab />}
              {activeTab === 'security' && <SecurityTab />}
              {activeTab === 'preferences' && <PreferencesTab />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

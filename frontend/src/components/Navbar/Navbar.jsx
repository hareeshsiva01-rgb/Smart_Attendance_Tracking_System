import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navItems = ['Home', 'Features', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 bg-[#FFFDF7]/95 backdrop-blur-xl border-b border-amber-200/70 shadow-sm shadow-amber-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-200/70">
            <span className="text-xl font-bold">S</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A1A1A]">Presentia</p>
            <p className="text-xs text-[#6B5C3B]">Smart Attendance</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[#4B4B4B] transition hover:text-[#1A1A1A]">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button 
            onClick={() => navigate('/login')}
            className="rounded-full border border-amber-200 bg-white/80 px-5 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:border-amber-300 hover:bg-[#FFF8E6]">
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-300/30 transition hover:from-amber-500 hover:to-amber-700">
            Get Started
          </button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-3 px-4 py-5">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                navigate('/login')
                setOpen(false)
              }}
              className="w-full rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-[#1A1A1A]">
              Login
            </button>
            <button
              onClick={() => {
                navigate('/signup')
                setOpen(false)
              }}
              className="w-full rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-300/30">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

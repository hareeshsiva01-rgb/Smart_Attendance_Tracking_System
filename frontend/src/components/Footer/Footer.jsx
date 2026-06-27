const footerLinks = {
  Product: ['Features', 'Pricing', 'Download', 'Integrations'],
  Company: ['About Us', 'Careers', 'Contact', 'Blog'],
  Support: ['Help Center', 'Documentation', 'Privacy Policy', 'Terms of Service']
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white py-12 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-950">Presentia</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Smart Attendance Tracking System with Face Recognition and Geofencing Technology.
          </p>
          <div className="mt-6 flex items-center gap-4 text-slate-500">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">F</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">T</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">L</span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">{title}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © 2026 Presentia. All rights reserved.
      </div>
    </footer>
  )
}

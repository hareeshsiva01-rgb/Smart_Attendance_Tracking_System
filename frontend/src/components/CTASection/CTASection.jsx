import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import qrPlaceholder from '../../assets/images/home/qr-placeholder.svg'

export default function CTASection() {
  const navigate = useNavigate()
  return (
    <section className="py-16" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-12 text-[#1A1A1A] shadow-[0_30px_80px_rgba(245,158,11,0.25)] sm:px-10 lg:grid-cols-[1.7fr_1fr] lg:items-center lg:px-14">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FFF8E6]">Experience the Future</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience the Future of <span className="bg-white/20 px-2 text-white">Attendance Management</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/90">
            Join thousands of organizations already using our smart attendance solution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="secondary" onClick={() => navigate('/signup')}>Get Started Now</Button>
            <Button variant="secondaryWhite" onClick={() => navigate('/login')}>Download App</Button>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-amber-500/20 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(245,158,11,0.22)]">
          <div className="rounded-3xl border border-white/30 bg-white/95 p-6 text-center transition duration-200 ease-out hover:shadow-[0_24px_70px_rgba(245,158,11,0.16)]">
            <img src={qrPlaceholder} alt="QR Code" className="mx-auto h-48 w-48" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">Scan to Download App</p>
          </div>
        </div>
      </div>
    </section>
  )
}

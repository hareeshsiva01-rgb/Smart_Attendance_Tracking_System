import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import WhyChooseUs from '../../components/WhyChooseUs'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

function TechIllustration({ type, className = '' }) {
  const common = 'absolute text-amber-600/50 drop-shadow-[0_20px_45px_rgba(245,158,11,0.18)]'

  if (type === 'face') {
    return (
      <svg viewBox="0 0 260 260" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="106" stroke="currentColor" strokeWidth="4" strokeDasharray="14 10" />
        <circle cx="130" cy="130" r="74" stroke="currentColor" strokeWidth="4" />
        <path d="M94 112v-15a21 21 0 0 1 21-21h30a21 21 0 0 1 21 21v15" stroke="currentColor" strokeWidth="4" />
        <path d="M82 92V66h26M178 66h26v26M82 168v26h26M178 194h26v-26" stroke="currentColor" strokeWidth="5" />
        <path d="M104 136h52M112 166c13 10 31 10 44 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'radar') {
    return (
      <svg viewBox="0 0 260 260" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <circle cx="130" cy="130" r="108" stroke="currentColor" strokeWidth="4" />
        <circle cx="130" cy="130" r="76" stroke="currentColor" strokeWidth="4" strokeDasharray="8 10" />
        <circle cx="130" cy="130" r="40" stroke="currentColor" strokeWidth="4" />
        <path d="M130 130 216 74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M130 22v216M22 130h216" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.65" />
        <circle cx="184" cy="92" r="9" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'wireframe') {
    return (
      <svg viewBox="0 0 340 220" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <rect x="24" y="24" width="292" height="172" rx="28" stroke="currentColor" strokeWidth="4" />
        <rect x="48" y="52" width="92" height="52" rx="14" stroke="currentColor" strokeWidth="4" />
        <rect x="156" y="52" width="136" height="18" rx="9" stroke="currentColor" strokeWidth="4" />
        <rect x="156" y="86" width="98" height="18" rx="9" stroke="currentColor" strokeWidth="4" />
        <path d="M50 142h64l22-32 34 54 26-32h92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'security') {
    return (
      <svg viewBox="0 0 280 280" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <path d="M140 32 220 62v68c0 58-32 94-80 118-48-24-80-60-80-118V62z" stroke="currentColor" strokeWidth="5" />
        <circle cx="140" cy="126" r="32" stroke="currentColor" strokeWidth="5" />
        <path d="M140 158v44M122 202h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M88 92h104M92 170h96" stroke="currentColor" strokeWidth="3" strokeDasharray="10 10" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 300 180" className={`${common} ${className}`} fill="none" aria-hidden="true">
      <rect x="24" y="28" width="252" height="124" rx="24" stroke="currentColor" strokeWidth="4" />
      <path d="M58 68h72M58 98h108M58 128h52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="226" cy="90" r="38" stroke="currentColor" strokeWidth="4" />
      <path d="M226 52v76M188 90h76" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

function HomeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(245,158,11,0.2),transparent_28%),radial-gradient(circle_at_92%_16%,rgba(212,175,55,0.24),transparent_30%),radial-gradient(circle_at_42%_58%,rgba(245,158,11,0.13),transparent_35%)]" />
      <TechIllustration type="face" className="left-[-42px] top-28 h-72 w-72 opacity-45" />
      <TechIllustration type="radar" className="right-[-28px] top-44 hidden h-80 w-80 opacity-50 lg:block" />
      <TechIllustration type="wireframe" className="left-[46%] top-[30rem] hidden h-40 w-64 opacity-34 lg:block" />
      <TechIllustration type="hud" className="right-[8%] top-[52rem] hidden h-48 w-80 opacity-48 lg:block" />
      <TechIllustration type="security" className="left-[4%] top-[68rem] hidden h-72 w-72 opacity-38 lg:block" />
      <TechIllustration type="wireframe" className="right-[8%] bottom-[28rem] hidden h-40 w-64 opacity-28 lg:block" />
      <TechIllustration type="radar" className="left-[8%] bottom-[18rem] hidden h-56 w-56 opacity-34 lg:block" />
      <div className="absolute right-24 top-[38rem] hidden h-60 w-60 rounded-full border-[10px] border-amber-300/28 shadow-[0_0_70px_rgba(245,158,11,0.16)] lg:block" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#FFFDF7] text-[#1A1A1A]">
      <HomeBackground />
      <Navbar />
      <main className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

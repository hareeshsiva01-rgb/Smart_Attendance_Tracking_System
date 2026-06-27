import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'

const cards = [
  { title: 'Accuracy', description: 'AI-driven face recognition and geofencing accuracy.' },
  { title: 'Speed', description: 'Fast attendance marking with instant verification.' },
  { title: 'Security', description: 'Encrypted user data and secure session handling.' },
  { title: 'Scalability', description: 'Built to support growing teams and large organizations.' }
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-10 shadow-[0_30px_80px_rgba(245,158,11,0.12)] sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Attendance intelligence built for modern teams.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4B4B4B]">
              Deliver secure, fast, and reliable attendance experiences with advanced validation and analytics.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-[520px]">
            {cards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-amber-200 bg-[#FFFDF7] p-6 shadow-[0_18px_50px_rgba(245,158,11,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(245,158,11,0.14)]">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4B4B4B]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

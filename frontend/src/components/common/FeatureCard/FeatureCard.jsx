const icons = {
  face: '📷',
  location: '📍',
  clock: '⏱️',
  chart: '📈',
  shield: '🛡️',
  document: '📄'
}

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-[32px] border border-amber-200 bg-white p-6 shadow-[0_20px_70px_rgba(245,158,11,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(245,158,11,0.14)]">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
        {icons[icon]}
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#4B4B4B]">{description}</p>
    </div>
  )
}

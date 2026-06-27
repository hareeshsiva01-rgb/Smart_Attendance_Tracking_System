export default function SectionHeader({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">Features</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  )
}

export default function StatCard({ title, subtitle }) {
  return (
    <div className="rounded-[28px] border border-amber-200 bg-white px-6 py-5 shadow-[0_18px_40px_rgba(245,158,11,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(245,158,11,0.12)]">
      <p className="text-lg font-semibold text-[#1A1A1A]">{title}</p>
      <p className="mt-2 text-sm text-[#6B5C3B]">{subtitle}</p>
    </div>
  )
}

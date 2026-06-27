export default function AttendanceTestimonials({ testimonial }) {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[rgba(212,175,55,0.25)] bg-[#FFFDF7]/90 p-6 shadow-[0_30px_80px_rgba(212,175,55,0.14)]">
        <div className="text-6xl leading-none text-[#D4AF37]/80">“</div>
        <p className="mt-4 text-lg font-semibold text-[#1A1A1A] leading-8">{testimonial.message}</p>
        <div className="mt-6 grid gap-3 border-t border-[#E8D9A8]/40 pt-5 text-sm text-[#4B4B4B] sm:grid-cols-[1fr_auto] sm:items-center">
          <span className="font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]">{testimonial.author}</span>
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(212,175,55,0.25)] bg-[#F8F6F0] px-3 py-1 uppercase tracking-[0.24em] text-[11px] text-[#1A1A1A]">
            Attendance Intelligence
          </span>
        </div>
      </div>
    </div>
  );
}

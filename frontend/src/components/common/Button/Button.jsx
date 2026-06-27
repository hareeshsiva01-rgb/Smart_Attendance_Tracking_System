const variants = {
  primary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]',
  secondary: 'border border-amber-200 bg-white text-[#1A1A1A] hover:bg-[#FFF8E6]',
  secondaryWhite: 'bg-white text-amber-600 shadow-sm hover:bg-slate-50',
  light: 'bg-white/90 text-[#1A1A1A] shadow-sm hover:bg-white'
}

export default function Button({ variant = 'primary', children, onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

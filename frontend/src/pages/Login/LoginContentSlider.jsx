import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import testimonials from './loginData';
import AttendanceTestimonials from '../../components/AttendanceTestimonials/AttendanceTestimonials';

export default function LoginContentSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-[32px] border border-[rgba(212,175,55,0.25)] bg-white/95 p-6 shadow-[0_40px_80px_rgba(212,175,55,0.14)] backdrop-blur-xl">
      <div className="absolute inset-x-6 top-0 h-px bg-[#E8D9A8]/30" />
      <div className="relative pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <AttendanceTestimonials testimonial={testimonials[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex gap-2">
        {testimonials.map((item, index) => (
          <span
            key={item.author}
            className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

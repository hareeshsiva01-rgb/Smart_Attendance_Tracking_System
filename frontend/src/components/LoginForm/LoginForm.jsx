import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ formStep, values, onInputChange, onSubmit, onForgotPassword, onBackToLogin, formError }) {
  const navigate = useNavigate();

  const renderLoginStep = () => (
    <>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A]">
          Email Address
        </label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onInputChange('email')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="name@company.com"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#A38524]">✓</span>
        </motion.div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="password" className="text-sm font-semibold text-[#1A1A1A]">
            Password
          </label>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm font-medium text-[#D4AF37] hover:text-[#A38524]"
          >
            Forgot Password?
          </button>
        </div>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={onInputChange('password')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Enter your password"
          />
        </motion.div>
      </div>

      <div className="flex items-center justify-between gap-4 text-sm text-[#4B4B4B]">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-[#E8D9A8] text-amber-600 focus:ring-[#D4AF37]" />
          Remember Me
        </label>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] transition duration-300 ease-out hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]"
      >
        Log in
      </motion.button>
    </>
  );

  const renderForgotStep = () => (
    <>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A]">
          Email Address
        </label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onInputChange('email')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="name@company.com"
          />
        </motion.div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] transition duration-300 ease-out hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]"
      >
        Send Code
      </motion.button>
      <button
        type="button"
        onClick={onBackToLogin}
        className="w-full rounded-2xl border border-[#E8D9A8] bg-white px-5 py-4 text-base font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]"
      >
        Back to Login
      </button>
    </>
  );

  const renderCodeStep = () => (
    <>
      <div className="space-y-2">
        <label htmlFor="code" className="block text-sm font-semibold text-[#1A1A1A]">
          6-digit Code
        </label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="code"
            name="code"
            type="text"
            value={values.code}
            onChange={onInputChange('code')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Enter 6-digit code"
          />
        </motion.div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] transition duration-300 ease-out hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]"
      >
        Verify Code
      </motion.button>
      <button
        type="button"
        onClick={onBackToLogin}
        className="w-full rounded-2xl border border-[#E8D9A8] bg-white px-5 py-4 text-base font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]"
      >
        Back to Login
      </button>
    </>
  );

  const renderResetStep = () => (
    <>
      <div className="space-y-2">
        <label htmlFor="newPassword" className="block text-sm font-semibold text-[#1A1A1A]">
          New Password
        </label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            value={values.newPassword}
            onChange={onInputChange('newPassword')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Create a new password"
          />
        </motion.div>
      </div>
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#1A1A1A]">
          Confirm Password
        </label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={onInputChange('confirmPassword')}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Confirm new password"
          />
        </motion.div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] transition duration-300 ease-out hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]"
      >
        Reset Password
      </motion.button>
      <button
        type="button"
        onClick={onBackToLogin}
        className="w-full rounded-2xl border border-[#E8D9A8] bg-white px-5 py-4 text-base font-semibold text-[#1A1A1A] transition hover:bg-[#FFF8E6]"
      >
        Back to Login
      </button>
    </>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {formError && (
        <div className="rounded-3xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-900 shadow-sm">
          {formError}
        </div>
      )}
      {formStep === 'login' && renderLoginStep()}
      {formStep === 'forgot' && renderForgotStep()}
      {formStep === 'code' && renderCodeStep()}
      {formStep === 'reset' && renderResetStep()}
      {formStep === 'login' && (
        <p className="text-center text-sm text-[#4B4B4B]">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="font-semibold text-[#D4AF37] transition hover:text-[#A38524]"
          >
            Sign up
          </button>
        </p>
      )}
    </form>
  );
}

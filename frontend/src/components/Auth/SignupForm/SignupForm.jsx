import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('College');
  const [organizationName, setOrganizationName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !organizationName || !phone || !password || !confirmPassword) {
      setError('Please complete all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess('Account created successfully! Please sign in.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{error}</div>}
      {success && <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">{success}</div>}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A]">Full Name</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Your full name"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A]">Email Address</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="name@company.com"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="organization" className="block text-sm font-semibold text-[#1A1A1A]">Organization Type</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <select
            id="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
          >
            <option>College</option>
            <option>University</option>
            <option>Company</option>
            <option>Institution</option>
          </select>
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="organizationName" className="block text-sm font-semibold text-[#1A1A1A]">Organization Name</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="organizationName"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="College, University, Company, Institution"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A]">Phone Number</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Enter your phone number"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-semibold text-[#1A1A1A]">Password</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B5C3B] hover:text-[#1A1A1A]"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </motion.div>
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#1A1A1A]">Confirm Password</label>
        <motion.div whileHover={{ y: -2 }} className="relative">
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-2xl border border-[#E8D9A8] bg-[#FFFDF7] px-4 py-4 text-[#1A1A1A] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#F5D76E]/25"
            placeholder="Confirm your password"
          />
        </motion.div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-5 py-4 text-base font-semibold text-white shadow-[0_22px_70px_rgba(234,179,8,0.28)] transition duration-300 ease-out hover:shadow-[0_28px_90px_rgba(234,179,8,0.35)]"
      >
        Create Account
      </motion.button>

      <p className="text-center text-sm text-[#4B4B4B]">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="font-semibold text-[#D4AF37] transition hover:text-[#A38524]"
        >
          Log in
        </button>
      </p>
    </form>
  );
}

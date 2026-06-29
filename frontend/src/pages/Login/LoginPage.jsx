import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginContentSlider from './LoginContentSlider';
import attendanceIllustration from '../../assets/images/login/attendance-illustration.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState('login');
  const [formValues, setFormValues] = useState({
    email: 'user@company.com',
    password: '••••••••',
    code: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (field) => (event) => {
    setFormValues((current) => ({ ...current, [field]: event.target.value }));
    setFormError('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formStep === 'login') {
      if (!formValues.email || !formValues.password) {
        setFormError('Please enter both email and password.');
        return;
      }

      const normalizedEmail = formValues.email.trim().toLowerCase();

      if (normalizedEmail === 'user@company.com') {
        navigate('/employee/dashboard');
        return;
      }

      if (normalizedEmail === 'manager@company.com') {
        navigate('/manager/dashboard');
        return;
      }

      if (normalizedEmail === 'organizer@company.com') {
        navigate('/organizer/dashboard');
        return;
      }

      setFormError('No dashboard is assigned to this email yet.');
      return;
    }

    if (formStep === 'forgot') {
      if (!formValues.email) {
        setFormError('Please enter your email address.');
        return;
      }
      setFormStep('code');
      setFormError('A 6-digit code has been sent to your inbox.');
      return;
    }

    if (formStep === 'code') {
      if (!/^[0-9]{6}$/.test(formValues.code)) {
        setFormError('Enter the 6-digit verification code.');
        return;
      }
      setFormStep('reset');
      setFormError('Code verified. Create your new password.');
      return;
    }

    if (formStep === 'reset') {
      if (!formValues.newPassword || !formValues.confirmPassword) {
        setFormError('Please complete both password fields.');
        return;
      }
      if (formValues.newPassword !== formValues.confirmPassword) {
        setFormError('Passwords do not match.');
        return;
      }
      setFormError('Password reset successfully. You can now sign in.');
      setFormStep('login');
      setFormValues((current) => ({
        ...current,
        password: '',
        code: '',
        newPassword: '',
        confirmPassword: ''
      }));
    }
  };

  const handleForgotPassword = () => {
    setFormStep('forgot');
    setFormError('');
  };

  const handleBackToLogin = () => {
    setFormStep('login');
    setFormError('');
  };

  const headingText = {
    login: 'Sign in to access your attendance dashboard',
    forgot: 'Recover your password',
    code: 'Enter your verification code',
    reset: 'Create a new password'
  };

  const subText = {
    login: 'Secure check-ins, face recognition and location compliance in one premium platform.',
    forgot: 'Enter your email and we will send you a verification code.',
    code: 'Enter the 6-digit code sent to your email to continue.',
    reset: 'Choose a strong password and confirm it for your secure account.'
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1A1A1A]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">
        <section className="relative overflow-hidden bg-[#FFFDF7] lg:h-screen">
          <img
            src={attendanceIllustration}
            alt="Smart attendance environment"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF7] via-[#F8F6F0] to-[#FFFDF7]" />
          <div className="absolute top-10 right-10 h-36 w-36 rounded-full bg-gradient-to-br from-amber-400/50 via-amber-500/35 to-amber-600/15 blur-3xl" />
          <div className="absolute bottom-16 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/35 via-amber-500/28 to-amber-600/12 blur-3xl" />
          <div className="absolute inset-y-0 left-[18%] h-96 w-[2px] bg-gradient-to-b from-amber-500/90 to-transparent opacity-95" />
          <div className="pointer-events-none absolute inset-x-0 top-20 hidden h-32 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.3),_transparent_60%)] lg:block" />
          <div className="pointer-events-none absolute left-12 top-24 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-16 top-16 h-52 w-52 rounded-full bg-amber-500/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-24 left-14 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-amber-400/30 via-amber-500/18 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute right-24 top-32 h-[360px] w-[360px] rounded-[120px] border border-amber-500/30 bg-gradient-to-br from-transparent via-amber-400/20 to-transparent shadow-[0_0_120px_rgba(245,158,11,0.18)]" />
          <div className="pointer-events-none absolute left-[8%] top-[55%] hidden h-72 w-72 rounded-full border border-amber-500/25 lg:block" />
          <div className="pointer-events-none absolute bottom-20 right-1/3 h-28 w-96 rounded-full bg-gradient-to-r from-amber-400/25 via-transparent to-amber-500/15 opacity-95" />
          <div className="pointer-events-none absolute inset-x-0 top-[18%] h-full w-full opacity-100">
            <svg viewBox="0 0 960 960" className="h-full w-full">
              <defs>
                <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.55" />
                  <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.35" />
                </linearGradient>
                <linearGradient id="goldFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.18" />
                  <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.08" />
                </linearGradient>
              </defs>
              <circle cx="240" cy="260" r="140" fill="url(#goldFill)" stroke="url(#goldLine)" stroke-width="3" />
              <circle cx="740" cy="180" r="98" fill="none" stroke="url(#goldLine)" stroke-width="3" />
              <circle cx="520" cy="580" r="80" fill="none" stroke="url(#goldLine)" stroke-width="2.5" />
              <rect x="250" y="500" width="240" height="140" rx="28" fill="url(#goldFill)" stroke="url(#goldLine)" stroke-width="2.5" />
              <path d="M240 470h220" stroke="url(#goldLine)" stroke-width="2.2" fill="none" />
              <path d="M280 520h140" stroke="url(#goldLine)" stroke-width="2.2" fill="none" />
              <circle cx="740" cy="180" r="24" fill="none" stroke="url(#goldLine)" stroke-width="2.5" />
              <rect x="590" y="280" width="240" height="100" rx="18" fill="none" stroke="url(#goldLine)" stroke-width="2.2" />
              <path d="M620 310h160" stroke="url(#goldLine)" stroke-width="2.2" fill="none" />
              <path d="M620 345h120" stroke="url(#goldLine)" stroke-width="2.2" fill="none" />
              <circle cx="420" cy="720" r="40" fill="none" stroke="url(#goldLine)" stroke-width="2" />
              <path d="M410 720h20" stroke="url(#goldLine)" stroke-width="2" fill="none" />
            </svg>
          </div>

          <div className="relative mx-auto flex min-h-[720px] max-w-6xl flex-col justify-between px-6 py-8 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[rgba(212,175,55,0.25)] bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#1A1A1A]">
                Smart Attendance Suite
              </span>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-[#1A1A1A] sm:text-6xl">
                Enterprise attendance visibility with biometric trust.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4B4B4B] sm:text-lg">
                Secure check-ins, face recognition and location compliance in one premium platform.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute bottom-8 left-6 right-6 z-20 mx-auto w-auto max-w-sm lg:relative lg:max-w-md lg:left-0 lg:right-auto"
            >
              <LoginContentSlider />
            </motion.div>
          </div>
        </section>

        <section className="relative flex items-center justify-center bg-[#F8F6F0] px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-0 h-full w-[140%] -skew-x-12 bg-[#FFFDF7] shadow-[0_80px_120px_rgba(212,175,55,0.12)]" />
            <div className="absolute top-10 right-10 h-28 w-28 rounded-full bg-[#D4AF37]/15 blur-2xl" />
            <div className="absolute bottom-10 left-12 h-24 w-24 rounded-full bg-[#C9A227]/12 blur-2xl" />
            <div className="absolute left-8 top-1/3 h-24 w-24 rounded-full border border-[rgba(212,175,55,0.25)]" />
            <div className="absolute right-12 bottom-24 h-20 w-20 rounded-full border border-[rgba(212,175,55,0.18)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md rounded-[42px] bg-white px-8 py-10 shadow-[0_48px_120px_rgba(212,175,55,0.18)] ring-1 ring-[rgba(212,175,55,0.25)]"
          >
            <div className="mb-8 space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.26em] text-[#6B5C3B]">Welcome Back</p>
              <h2 className="text-3xl font-semibold text-[#1A1A1A] sm:text-4xl">{headingText[formStep]}</h2>
              <p className="mx-auto max-w-xl text-base leading-8 text-[#4B4B4B] sm:text-lg">{subText[formStep]}</p>
            </div>

            <LoginForm
              formStep={formStep}
              values={formValues}
              onInputChange={handleInputChange}
              onSubmit={handleFormSubmit}
              onForgotPassword={handleForgotPassword}
              onBackToLogin={handleBackToLogin}
              formError={formError}
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

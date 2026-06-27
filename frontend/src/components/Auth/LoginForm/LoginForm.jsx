import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('admin@company.com');
  const [password, setPassword] = useState('••••');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Presentia Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">P</span>
        </div>
        <span className="text-xl font-bold text-slate-900">Presentia</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back</h1>
      <p className="text-slate-500 mb-8">Sign in to your account</p>

      {/* Login Form */}
      <form onSubmit={handleSignIn} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
              placeholder="Enter your email"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-500">
              ✓
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-slate-900">
              Password
            </label>
            <button
              type="button"
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition duration-200"
        >
          Sign in →
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="text-center mt-10 text-slate-600">
        Don't have an account?{' '}
        <button
          onClick={handleSignUp}
          className="text-orange-500 hover:text-orange-600 font-semibold"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

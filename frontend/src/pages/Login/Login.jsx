import { useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import TestimonialSection from '../../components/Auth/TestimonialSection/TestimonialSection';

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Login Form */}
        <LoginForm />

        {/* Right Side - Testimonial Section */}
        <TestimonialSection />
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className="relative hidden lg:flex items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 min-h-[600px] p-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white">Live System</span>
          </div>
          <h3 className="text-4xl font-bold text-white leading-tight">
            Smart Attendance<br />
            <span className="bg-gradient-to-r from-cyan-200 to-blue-100 bg-clip-text text-transparent">Tracking in Action</span>
          </h3>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Face Recognition Card */}
          <div className="group p-4 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-xl hover:bg-white/12 transition-all duration-300">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 mb-3">
              <span className="text-lg">👤</span>
            </div>
            <p className="text-sm font-semibold text-white">Face Recognition</p>
            <p className="text-xs text-white/70 mt-1">AI-powered scanning</p>
            <div className="mt-3 h-1 w-full bg-white/10 rounded-full">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            </div>
          </div>

          {/* Geofencing Card */}
          <div className="group p-4 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-xl hover:bg-white/12 transition-all duration-300">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 mb-3">
              <span className="text-lg">📍</span>
            </div>
            <p className="text-sm font-semibold text-white">Geofencing</p>
            <p className="text-xs text-white/70 mt-1">Location verified</p>
            <div className="mt-3 h-1 w-full bg-white/10 rounded-full">
              <div className="h-full w-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
            </div>
          </div>

          {/* Live Dashboard Card */}
          <div className="group p-4 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-xl hover:bg-white/12 transition-all duration-300">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 mb-3">
              <span className="text-lg">📊</span>
            </div>
            <p className="text-sm font-semibold text-white">Live Dashboard</p>
            <p className="text-xs text-white/70 mt-1">Real-time analytics</p>
            <div className="mt-3 h-1 w-full bg-white/10 rounded-full">
              <div className="h-full w-2/3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
            </div>
          </div>

          {/* Check-in Tracking Card */}
          <div className="group p-4 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-xl hover:bg-white/12 transition-all duration-300">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 mb-3">
              <span className="text-lg">✓</span>
            </div>
            <p className="text-sm font-semibold text-white">Check-in Tracking</p>
            <p className="text-xs text-white/70 mt-1">Employee presence</p>
            <div className="mt-3 h-1 w-full bg-white/10 rounded-full">
              <div className="h-full w-5/6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="flex justify-between pt-4 border-t border-white/10">
          <div>
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-xs text-white/70">Active Users</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-xs text-white/70">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-xs text-white/70">Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  )
}

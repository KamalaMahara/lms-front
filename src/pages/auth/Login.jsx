import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,.15)]">
        <div className="grid lg:grid-cols-2">

          {/* ================= LEFT SECTION ================= */}

          <div className="relative hidden lg:flex overflow-hidden  bg-white  text-black">

            <div className="absolute -top-40 -left-28 h-[420px] w-[400px] rounded-full bg-[#BC002D]/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-70 rounded-full bg-pink-500/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col justify-between p-16">

              <div>
                <h1 className="text-5xl font-black tracking-tight">
                  <span>Nihon </span>
                  <span className="text-[#BC002D]">Path</span>
                </h1>

                <p className="mt-6 max-w-md text-lg leading-8 text-black">
                  Welcome back! Continue your Japanese learning journey and
                  achieve your JLPT goals one lesson at a time.
                </p>
              </div>

              <div className="space-y-5">

                <img src="../src/assets/login.jpg" alt="Description" className="m-6 " />

              </div>

            </div>

          </div>

          {/* ================= RIGHT SECTION ================= */}

          <div className="flex items-center justify-center px-8 py-12 lg:px-14 lg:py-16">

            <div className="w-full max-w-sm">

              {/* Mobile Logo */}

              <div className="mb-10 text-center lg:hidden">
                <h1 className="text-4xl font-black tracking-tight">
                  <span className="text-[#1F1F1F]">Nihon </span>
                  <span className="text-[#BC002D]">Path</span>
                </h1>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-[#1F1F1F]">
                Welcome Back
              </h2>

              <p className="mt-3 text-gray-500 leading-7">
                Login to continue learning Japanese and keep your progress
                synced.
              </p>

              {/* ================= FORM ================= */}

              <form className="mt-10 space-y-6">

                {/* Email */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-sm transition-all duration-300 focus:border-[#BC002D] focus:ring-4 focus:ring-[#BC002D]/10 focus:outline-none"
                    />

                  </div>

                </div>

                {/* Password */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold text-gray-700">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm font-medium text-[#BC002D] hover:underline"
                    >
                      Forgot Password?
                    </button>

                  </div>

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-12 shadow-sm transition-all duration-300 focus:border-[#BC002D] focus:ring-4 focus:ring-[#BC002D]/10 focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#BC002D]"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Login Button */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BC002D] to-[#D61F4D] py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  Login

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Divider */}

              <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-gray-200" />

                <span className="mx-4 text-sm text-gray-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-200" />

              </div>

              {/* Google Login */}

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />

                Continue with Google
              </button>

              {/* Footer */}

              <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="font-semibold text-[#BC002D] hover:underline"
                >
                  Create Account
                </button>
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
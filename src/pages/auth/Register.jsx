import { useState } from "react";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/register", data)
      if (response.status == 200 || 201) {
        console.log("user registered successfully")
        navigate('/login')
      }
      else console.log("something went wrong while  user registering")
    } catch (error) {
      alert(error.response.data.message)
    }

  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,.15)]">
          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT SECTION ================= */}

            <div className="relative   hidden lg:flex overflow-hidden text-">

              {/* Glow Effects */}

              <div className="absolute -top-40 -left-28 h-[420px] w-[420px] rounded-full bg-[#BC002D]/20 blur-[120px]" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-600/10 blur-[120px]" />

              <div className="relative z-10 flex flex-col justify-between p-16">

                <div>

                  <h1 className="text-5xl font-black tracking-tight">
                    <span>Nihon </span>
                    <span className="text-[#BC002D]">Path</span>
                  </h1>

                  <p className="mt-6 max-w-md text-lg leading-8 text-black">
                    Master Japanese through structured lessons, interactive
                    quizzes, vocabulary flashcards and personalized JLPT
                    preparation.
                  </p>

                </div>

                <div className="space-y-5">

                  <img src="../src/assets/main1.png" alt="Description" className="mb-6" />

                </div>

              </div>

            </div>

            {/* ================= RIGHT SECTION ================= */}

            <div className="flex items-center justify-center px-8 py-12 lg:px-14 lg:py-16">

              <div className="w-full max-w-md">

                {/* Mobile Logo */}

                <div className="mb-10 text-center lg:hidden">

                  <h1 className="text-4xl font-black tracking-tight">
                    <span className="text-[#1F1F1F]">Nihon </span>
                    <span className="text-[#BC002D]">Path</span>
                  </h1>

                </div>

                <h2 className="text-4xl font-black tracking-tight text-[#1F1F1F]">
                  Create Account
                </h2>

                <p className="mt-3 leading-7 text-gray-800">
                  Join thousands of learners and start your Japanese learning
                  journey today.
                </p>

                {/* FORM */}

                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

                  {/* Username */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-black">
                      Username
                    </label>

                    <div className="relative">

                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="enter username" name="username"
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-sm transition-all duration-300 focus:border-[#BC002D] focus:ring-4 focus:ring-[#BC002D]/10 focus:outline-none" required onChange={handleChange}
                      />

                    </div>

                  </div>

                  {/* Email */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-black">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        placeholder="example@email.com" name="email"
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-sm transition-all duration-300 focus:border-[#BC002D] focus:ring-4 focus:ring-[#BC002D]/10 focus:outline-none" required onChange={handleChange}
                      />

                    </div>

                  </div>

                  {/* Password */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-black">
                      Password
                    </label>

                    <div className="relative">

                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password" name="password"
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-12 shadow-sm transition-all duration-300 focus:border-[#BC002D] focus:ring-4 focus:ring-[#BC002D]/10 focus:outline-none" onChange={handleChange}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#BC002D]"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>

                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      Use at least 8 characters with letters and numbers.
                    </p>

                  </div>

                  {/* Button */}

                  <button
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BC002D] to-[#D61F4D] py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                  >
                    Create Account

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

                {/* Google */}

                <button
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="h-5 w-5"
                    alt="Google"
                  />

                  Continue with Google

                </button>

                {/* Footer */}

                <p className="mt-8 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#BC002D] transition hover:underline"
                  >
                    Sign In
                  </button>
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
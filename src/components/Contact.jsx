import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#F9F2EE] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#BC002D]">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-black text-gray-900 lg:text-5xl">
            Let's Start Your
            <span className="text-[#BC002D]"> Japanese Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you're planning to study, work, or build a future in Japan,
            our team is here to guide you. Send us a message or reach out
            directly—we'd love to hear from you.
          </p>

        </div>

        {/* Main Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2 items-start">

          {/* Left Side */}

          <div className="rounded-2xl bg-[#BC002D] p-10 text-white">

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-4 leading-8 text-red-100">
              Have questions about our Japanese language courses,
              counseling services, or admissions? Contact us anytime.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-white/10 p-3">
                  <Phone size={22} />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="mt-1 text-red-100">
                    +977 9867452310
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-white/10 p-3">
                  <Mail size={22} />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="mt-1 text-red-100">
                    info@nihonpath.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-white/10 p-3">
                  <FaWhatsapp size={22} />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Whatsapp
                  </h4>

                  <p className="mt-1 text-red-100">
                    9876543210
                  </p>

                </div>

              </div>



            </div>



          </div>


          {/* Right Side */}

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-gray-900">
              Send us a Message
            </h3>

            <p className="mt-3 text-gray-500">
              Fill out the form below and our team will contact you as soon as possible.
            </p>

            <form className="mt-8 space-y-5">

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#BC002D]"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#BC002D]"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#BC002D]"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#BC002D]"
                ></textarea>

              </div>

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#BC002D] py-4 font-semibold text-white transition hover:bg-[#981F1F]"
              >

                <Send size={18} />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
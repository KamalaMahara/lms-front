import {
  Mail,
  Phone,

  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">

      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black">
              Nihon
              <span className="text-[#BC002D]"> Path</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Nihon Path is a trusted Japanese language learning platform
              helping Nepalese students, professionals, and aspiring
              migrants achieve their dreams in Japan through quality
              education and personalized counseling.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-[#BC002D]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-[#BC002D]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-[#BC002D]"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-[#BC002D]"
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {[
                "Home",
                "Courses",
                "About Us",
                "Mentors",
                "Book Counseling",
                "Contact",
              ].map((item) => (
                <li key={item}>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-white"
                  >
                    <ArrowUpRight size={15} />
                    {item}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Courses */}

          <div>

            <h3 className="text-xl font-bold">
              Popular Courses
            </h3>

            <ul className="mt-6 space-y-4">

              {[
                "JLPT N5 Course",
                "JLPT N4 Course",
                "JLPT N3 Course",
                "JLPT N2 Course",
                "JLPT N1 Course",
                "Japanese Conversation",
              ].map((course) => (
                <li key={course}>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-white"
                  >
                    <ArrowUpRight size={15} />
                    {course}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact Information
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-4">

                <div className="rounded-lg bg-[#BC002D] p-2">
                  <Phone size={18} />
                </div>

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="text-gray-300">
                    +977 98XXXXXXXX
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-lg bg-[#BC002D] p-2">
                  <Mail size={18} />
                </div>

                <div>

                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-gray-300">
                    info@nihonpath.com
                  </p>

                </div>

              </div>



            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Nihon Path
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white transition">
              Refund Policy
            </a>

          </div>

          <p>
            Made with ❤️ in Nepal
          </p>

        </div>

      </div>

    </footer>
  );
}
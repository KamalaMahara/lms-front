import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaTiktok as Tiktok,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "About", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="hidden md:block bg-[#1F1F1F] text-gray-200">
        <div className="mx-auto flex max-w-7xl  h-16 items-center justify-between px-6 py-2 text-sm">

          {/* Left */}

          <div className="flex items-center gap-50">

            <div className="flex items-center gap-2">
              <Phone size={20} className="text-[#BC002D]" />
              <span className="font-medium text-lg"> +977-9800000000</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={20} className="text-[#BC002D]" />
              <span className="font-medium text-lg">info@nihonpath.com</span>
            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-8">

            <a
              href="#"
              className="transition hover:text-[#BC002D] font-medium text-lg"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="transition hover:text-[#BC002D] font-medium text-lg"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="transition hover:text-[#BC002D] font-medium text-lg"
            >
              <Youtube size={20} />
            </a>

            {/* TikTok SVG */}

            <a
              href="#"
              className="transition hover:text-[#BC002D] font-medium text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25h-3.13v12.4a2.71 2.71 0 11-2.71-2.71c.29 0 .57.04.83.13V9.1a5.86 5.86 0 00-.83-.06A5.87 5.87 0 1015.85 15V8.78a7.95 7.95 0 004.65 1.49V6.69h-.91z" />
              </svg>
            </a>

          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-red-200 bg-[#F9F2EE]/95 backdrop-blur-lg shadow-sm rounded-b-2 transition-all duration-300">

        <div className="mx-auto flex h-20 max-w-7xl items-center gap-24 px-6 ">

          {/* Logo */}

          <a href="#" className="flex items-center gap-3 my-10">

            <img src="../public/navLogo1.png" className="h-22 mt-4" />


            <div>

              <h1 className="text-3xl font-black tracking-tight">
                <span className="text-[#1F1F1F]">Nihon </span>
                <span className="text-[#BC002D]">Path</span>
              </h1>

              <p className="-mt-1 text-md text-gray-600 uppercase font-semibold sm: display-none">
                Learn Japanese
              </p>

            </div>

          </a>

          {/* Desktop Nav */}

          <nav className="hidden lg:flex items-center gap-9">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-lg text-black transition hover:text-[#BC002D]"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="rounded-xl border border-[#BC002D] px-5 py-2.5 font-semibold text-[#BC002D] transition hover:bg-[#BC002D] hover:text-white">
              Login
            </button>

            <button className="rounded-xl bg-gradient-to-r from-[#BC002D] to-[#D61F4D] px-6 py-2.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              Book Counseling
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t bg-white lg:hidden">

            <div className="space-y-2 px-6 py-6">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              ))}

              <button className="mt-4 w-full rounded-xl border border-[#BC002D] py-3 font-semibold text-[#BC002D]">
                Login
              </button>

              <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#BC002D] to-[#D61F4D] py-3 font-semibold text-white">
                Book Counseling
              </button>

            </div>

          </div>
        )}

      </header>
    </>
  );
}
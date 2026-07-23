import React from 'react';
// Assuming lucide-react is installed for icons. 
import { BookOpen, GraduationCap, Headphones, Globe, ArrowRight, Calendar, Star } from 'lucide-react';

export default function HeroComponent() {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F2EE] overflow-hidden flex items-center justify-center font-sans">

      {/* Background/Right Graphic Container for Large Screens */}
      <div className="absolute right-0  top-0 bottom-0 w-full lg:w-[55%] h-full hidden lg:block select-none pointer-events-none">
        <img
          src="/hero1.png"
          alt="Japanese Landscape and Student Composition"
          className="w-full h-full object-contain "
        />
      </div>

      {/* Main Content Wrap */}
      <div className="max-w-7xl w-full   py-8 md:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-centerm ">

        {/* Left Side: Content Form */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 ">

          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-50/70 border border-red-100/50 px-4  rounded-full shadow-sm ">

            <span className="text-sm font-semibold text-red-800 tracking-wide  ">

              <img src='../download.gif' className=' flext object-fit ' />
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-[54px] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Learn <span className="text-[#A72323]">Japanese.</span>
            </h1>
            <h2 className="text-4xl md:text-[54px] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Build Your Future in <span className="text-[#A72323]">Japan.</span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-slate-600 text-lg md:text-xl font-normal max-w-xl leading-relaxed">
            From N5 to N1 – expert Japanese language classes and counseling for study, work, business, and life in Japan. Affordable. Flexible. 100% Online.
          </p>

          {/* Feature Grid Card */}


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            {/* Explore Courses Button */}
            <button className="flex items-center justify-center space-x-3 bg-[#9E2222] hover:bg-[#851C1C] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-900/10 transition-colors group">
              <BookOpen size={18} />
              <span>Explore Courses</span>
              <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </button>

            {/* Book Counseling Button */}
            <button className="flex items-center justify-center space-x-3 bg-white border-2 border-[#9E2222] hover:bg-red-50/50 text-[#9E2222] font-semibold px-8 py-4 rounded-xl transition-all group">
              <Calendar size={18} />
              <span>Book Counseling</span>
              <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Review / Social Proof Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            {/* Avatar Stack Placeholder boxes */}
            <div className="flex -space-x-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/33/b2/41/33b241ae56c0a480e84ca08e200eddcc.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/c5/3e/63/c53e6398557160b6edf5bd641cad52de.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/d8/ad/99/d8ad9924113c326472a8bb2190391427.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/c1/bc/63/c1bc6342198054dc3e6697b162afd6a8.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Ratings Summary */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-0.5 text-amber-400 mb-0.5">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm text-slate-600 font-medium leading-normal">
                <span className="font-bold text-slate-900">4.9/5</span> from 1,500+ students
              </p>
              <p className="text-xs text-slate-400 font-medium">
                from Nepal and around the world
              </p>
            </div>
          </div>

        </div>

        {/* Right Side Image Viewport Flow for Mobile and Tablets */}
        <div className="lg:col-span-5 w-full block lg:hidden mt-4">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="/hero1.png"
              alt="Japanese Landscape and Student Composition"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
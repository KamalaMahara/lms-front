import {
  BadgeCheck,
  GraduationCap,
  Globe,
  Languages,
  BookOpen,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function MentorSection() {
  return (
    <section className="bg-[#F9F2EE] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#BC002D]">
            Meet Your Mentor
          </span>

          <h2 className="mt-5 text-4xl font-black text-gray-900 lg:text-5xl">
            Learn Japanese From An
            <span className="text-[#BC002D]">
              {" "}Experienced N1 Instructor
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Your success depends on the guidance you receive. Learn from an
            experienced mentor who has helped hundreds of Nepalese students
            prepare for higher studies, jobs, business opportunities, and life
            in Japan.
          </p>

        </div>

        {/* Main Card */}

        <div className="grid items-center gap-14 rounded-[35px] bg-white p-8 shadow-xl lg:grid-cols-2 lg:p-14">

          {/* Left */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-[#BC002D]/10 blur-3xl"></div>

            <img
              src="/mentor.png"
              alt="Japanese Mentor"
              className="relative z-10 w-full max-w-md rounded-3xl object-cover shadow-2xl"
            />

          </div>

          {/* Right */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#BC002D]">

              <BadgeCheck size={18} />

              Certified Japanese Language Instructor

            </div>

            <h3 className="mt-6 text-4xl font-black text-gray-900">
              Mr. Satoshi Tanaka
            </h3>

            <p className="mt-2 text-xl font-semibold text-[#BC002D]">
              JLPT N1 Certified • Japanese Language Mentor
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              With years of teaching experience and a passion for helping
              Nepalese students achieve their dreams, our mentor provides
              structured learning, practical conversation practice, JLPT
              preparation, and personalized guidance for studying, working,
              and living in Japan.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">

                <GraduationCap className="text-[#BC002D]" />

                <div>

                  <h4 className="font-bold">
                    N1 Certified
                  </h4>

                  <p className="text-sm text-gray-500">
                    Highest JLPT Level
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">

                <Languages className="text-[#BC002D]" />

                <div>

                  <h4 className="font-bold">
                    7+ Years
                  </h4>

                  <p className="text-sm text-gray-500">
                    Teaching Experience
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">

                <BookOpen className="text-[#BC002D]" />

                <div>

                  <h4 className="font-bold">
                    1500+ Students
                  </h4>

                  <p className="text-sm text-gray-500">
                    Successfully Trained
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">

                <Globe className="text-[#BC002D]" />

                <div>

                  <h4 className="font-bold">
                    Online & Offline
                  </h4>

                  <p className="text-sm text-gray-500">
                    Learn From Anywhere
                  </p>

                </div>

              </div>

            </div>

            {/* Quote */}

            <div className="mt-10 rounded-2xl border-l-4 border-[#BC002D] bg-red-50 p-6">

              <p className="text-lg italic leading-8 text-gray-700">
                "Learning Japanese is not only about passing JLPT exams—
                it's about opening doors to education, career opportunities,
                and a better future in Japan."
              </p>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-3 rounded-xl bg-[#BC002D] px-7 py-4 font-semibold text-white transition hover:bg-[#980024]">

                <CalendarDays size={20} />

                Book Free Counseling

              </button>

              <button className="flex items-center gap-3 rounded-xl border-2 border-[#BC002D] px-7 py-4 font-semibold text-[#BC002D] transition hover:bg-red-50">

                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
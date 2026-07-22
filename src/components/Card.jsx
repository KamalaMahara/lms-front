import {
  Clock3,
  Users,
  Star,
  ArrowRight,
  MonitorPlay,
} from "lucide-react";

export default function CourseCard() {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src="/course-n5.jpg"
          alt="JLPT N5 Course"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Level Badge */}

        <div className="absolute left-5 top-5 rounded-full bg-[#BC002D] px-4 py-1 text-sm font-semibold text-white shadow-lg">
          JLPT N5
        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        {/* Title */}

        <div>

          <h3 className="text-2xl font-bold text-gray-900">
            Complete JLPT N5 Course
          </h3>

          <p className="mt-2 text-gray-500 leading-7">
            Start your Japanese learning journey from scratch with
            Hiragana, Katakana, basic grammar, vocabulary, speaking,
            listening and exam preparation.
          </p>

        </div>

        {/* Course Info */}



        {/* Price */}

        <div className="flex items-end justify-between border-t pt-5">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-black text-[#BC002D]">
              Rs. 12,999
            </h2>

          </div>

          <button className="group flex items-center gap-2 rounded-xl bg-[#BC002D] px-6 py-3 font-semibold text-white transition hover:bg-[#9a0025]">

            Enroll Now

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </div>
  );
}
import React from 'react'
import CourseCard from "../../components/Card";

const Courses = () => {
  return (
    <>


      <section className="bg-[#F9F2EE] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#BC002D]">
              Our Courses
            </span>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Learn Japanese with Confidence
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
              Structured Japanese language courses designed for beginners,
              students, professionals, and everyone preparing for their
              journey to Japan.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <CourseCard />
            <CourseCard />
            <CourseCard />

          </div>

        </div>
      </section>
    </>
  )
}

export default Courses
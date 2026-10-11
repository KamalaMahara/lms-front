import React from 'react'
import CourseCard from "../../components/Card";

import Footer from '../../components/Footer';


const courses = [
  {
    id: 1,
    name: "Complete JLPT N5 Course",
    description: "Start your Japanese learning journey from scratch. Learn Hiragana, Katakana, basic grammar, everyday vocabulary, beginner kanji, speaking, listening, reading, writing, and complete JLPT N5 exam preparation.",
    fee: 5000,
    image: "../images/course.png",
    box: "JLPT N5"
  },
  {
    id: 2,
    name: "Complete JLPT N4 Course",
    description: "Strengthen your foundation with more grammar, vocabulary, kanji, conversation practice, reading comprehension, listening skills, and full JLPT N4 exam preparation.",
    fee: 6999,
    image: "../images/n4.png",
    box: "JLPT N4"
  },
  {
    id: 3,
    name: "Complete JLPT N3 Course",
    description: "Transition to intermediate Japanese with advanced grammar patterns, 600+ kanji, real-world conversations, newspaper passages, listening practice, and comprehensive JLPT N3 preparation.",
    fee: 9999,
    image: "../images/n3.png",
    box: "JLPT N3"
  },
  {
    id: 4,
    name: "Complete JLPT N2 Course",
    description: "Master upper-intermediate Japanese through business communication, complex grammar, advanced reading, extensive vocabulary, listening comprehension, and JLPT N2 exam strategies.",
    fee: 12000,
    image: "../images/n2.png",
    box: "JLPT N2"
  },
  {
    id: 5,
    name: "Complete JLPT N1 Course",
    description: "Achieve advanced Japanese proficiency with sophisticated grammar, academic and professional reading, high-level listening, advanced vocabulary, and complete JLPT N1 preparation.",
    fee: 1699,
    image: "../images/n1.png",
    box: "JLPT N1"
  },
  {
    id: 6,
    name: "Japanese Writing & Speaking",
    description:
      "Learn to write Hiragana, Katakana, and essential beginner Kanji with proper stroke order, handwriting practice, vocabulary building, and reading exercises.",
    fee: 20000,
    image: "../images/speak.png",


  }
];

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
            {
              courses.map((e) => {
                return <CourseCard key={e.id} courseName={e.name} description={e.description} fee={e.fee} image={e.image} box={e.box} />
              })
            }



          </div>

        </div>
      </section>

    </>
  )
}

export default Courses
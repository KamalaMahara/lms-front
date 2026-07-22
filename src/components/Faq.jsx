import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "I'm a complete beginner. Can I join?",
      answer:
        "Absolutely. Our beginner course starts from the very basics, including Hiragana, Katakana, pronunciation, and everyday Japanese. No previous knowledge is required.",
    },
    {
      question: "Which JLPT levels do you teach?",
      answer:
        "We provide structured courses from JLPT N5 all the way to N1. As you progress, you'll build stronger grammar, vocabulary, reading, listening, and speaking skills step by step.",
    },
    {
      question: "Are the classes online or physical?",
      answer:
        "Most of our classes are conducted online, so you can learn from anywhere in Nepal. We also organize special offline sessions, workshops, and events whenever needed.",
    },
    {
      question: "Do you provide counseling for Japan?",
      answer:
        "Yes. Besides language training, we guide students and professionals who are planning to study, work, start a business, or build a long-term career in Japan.",
    },
    {
      question: "How long does it take to complete one level?",
      answer:
        "The duration depends on the level and batch schedule, but most JLPT levels are completed within 3 to 4 months with regular classes and practice.",
    },
    {
      question: "What if I miss a live class?",
      answer:
        "No worries. Class recordings and study materials are available, allowing you to catch up whenever it fits your schedule.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Yes. We support flexible payment options for selected courses. You can also pay securely using eSewa, Khalti, Fonepay, Stripe, or PayPal.",
    },
    {
      question: "Will this course help me get ready for Japan?",
      answer:
        "Our goal is not only to help you pass JLPT exams but also to prepare you for real conversations, interviews, university life, workplaces, and everyday communication in Japan.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F9F2EE] py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="text-center">



          <h2 className="mt-5 text-4xl font-black text-gray-900 lg:text-6xl">
            Frequently Asked <span className="text-[#980024] ">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Choosing the right Japanese language institute is an important
            decision. Here are answers to some of the questions students ask us
            before joining Nihon Path.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const open = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >

                <button
                  onClick={() =>
                    setActiveIndex(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${open
                      ? "rotate-180 text-[#BC002D]"
                      : "text-gray-400"
                      }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${open
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                    }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-7 pb-6 leading-8 text-gray-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl bg-[#BC002D] p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Still have questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            We'd be happy to help. Talk to our team and get guidance on the
            right course, JLPT preparation, or your journey to Japan.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-[#BC002D] transition hover:bg-gray-100">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}
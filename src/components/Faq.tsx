import React, { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    setSelected(selected !== id ? id : null);
  };

  return (
    <>
      <section className="bg-slate-100">
        <div className="min-h-screen mx-auto max-w-6xl bg-slate-100 flex flex-col md:flex-row items-center justify-center">
          {/* FAQ Section */}
          <div className="w-full md:w-1/2 flex justify-center pt-10">
            <div className="px-4 flex flex-col justify-center">
              <h2 className="font-semibold text-3xl mb-10 text-center md:text-left">
                Frequently Asked Questions
              </h2>
              <div className="bg-white max-w-full mx-auto border border-gray-200">
                <ul className="shadow-box">
                  {[
                    {
                      id: 1,
                      question: "Is there a refund policy?",
                      answer:
                        "DreamSeat Enterprise Xperience Partners shall issue a full refund to any member who wishes to cancel their enrolment within 45 days prior to the start of the season. Stadium seat memberships are not refundable after the first home event of the football season.",
                    },
                    {
                      id: 2,
                      question: "Why can't I log in?",
                      answer:
                        "If you are unable to log in, please make sure you have created a new account first. This ordering portal is different than the one where you purchase your Texas A&M game tickets.",
                    },
                    {
                      id: 3,
                      question: "Why can't I log in?",
                      answer:
                        "If you are unable to log in, please make sure you have created a new account first. This ordering portal is different than the one where you purchase your Texas A&M game tickets.",
                    },
                    {
                      id: 4,
                      question: "Why can't I log in?",
                      answer:
                        "If you are unable to log in, please make sure you have created a new account first. This ordering portal is different than the one where you purchase your Texas A&M game tickets.",
                    },
                  ].map((item) => (
                    <li key={item.id} className="relative border-b border-gray-200">
                      <button
                        type="button"
                        className="w-full px-6 py-6 text-left"
                        onClick={() => toggle(item.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 ${
                              selected === item.id ? "transform rotate-180" : ""
                            }`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`relative overflow-hidden transition-all duration-700 ${
                          selected === item.id ? "max-h-screen" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0">
            <div className="relative z-10 mt-10">
              {/* Front Box */}
              <div className="w-64 h-80 mt-40 bg-white border-2 border-blue-500 rounded-lg relative">
                <img
                  src="/img/orang-kerja2.jpg"
                  alt="Front Box"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Back Box */}
              <div className="w-64 h-80 ml-24 border-2 border-blue-500 rounded-lg absolute top-4 left-4 -z-10">
                <img
                  src="/img/orang-kerja1.jpg"
                  alt="Back Box"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

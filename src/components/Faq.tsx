import React, { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    setSelected(selected !== id ? id : null);
  };

  return (
    <>
      <section className="bg-slate-100 dark:bg-gray-900">
        <div className="min-h-screen mx-auto max-w-6xl bg-slate-100 flex flex-col md:flex-row items-center justify-center dark:bg-gray-900">
          {/* FAQ Section */}
          <div className="w-full md:w-1/2 flex justify-center pt-10" data-aos="fade-right">
            <div className="px-4 flex flex-col justify-center">
              <h2 className="font-semibold text-zinc-950 text-3xl mb-10 text-center md:text-left dark:text-slate-200">
                Frequently Asked Questions
              </h2>
              <div className="bg-white max-w-full mx-auto rounded-sm dark:bg-slate-800 dark:text-slate-200">
                <ul className="shadow-box text-sm">
                  {[
                    {
                      id: 1,
                      question: "Bagaimana cara memesan layanan?",
                      answer:
                        "Cukup cari layanan berdasarkan kategori atau lokasi, lihat profil penyedia, dan gunakan sistem pemesanan untuk mengamankan slot waktu.",
                    },
                    {
                      id: 2,
                      question: "Apakah pembayaran online aman?",
                      answer:
                        "Ya, kami menggunakan gateway pembayaran tepercaya untuk memastikan semua transaksi aman dan terjamin.",
                    },
                    {
                      id: 3,
                      question:
                        "Bisakah saya memberikan ulasan setelah menggunakan layanan?",
                      answer:
                        "Sangat! Kami mendorong pengguna untuk memberikan umpan balik yang jujur ​​untuk membantu orang lain membuat keputusan yang tepat.",
                    },
                    {
                      id: 4,
                      question:
                        "Bagaimana jika saya tidak dapat menemukan penyedia di wilayah saya?",
                      answer:
                        "Anda dapat meminta layanan tertentu, dan kami akan memberi tahu Anda ketika penyedia tersedia di sekitar",
                    },
                  ].map((item) => (
                    <li
                      key={item.id}
                      className="relative border-b border-gray-200"
                    >
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
          <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative z-10 mt-10">
              {/* Front Box */}
              <div className="w-64 h-80 mt-40 bg-white rounded-lg relative">
                <img
                  src="/img/card-5.jpg"
                  alt="Front Box"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Back Box */}
              <div className="w-64 h-80 ml-24 rounded-lg absolute top-4 left-4 -z-10">
                <img
                  src="/img/card-7.jpg"
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

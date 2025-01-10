import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const WhyChoose: React.FC = () => {
  return (
    <>
      <section className="bg-blue-950">
        <div className="max-w-6xl mx-auto py-20 items-center flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 ">
            <div className="mt-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Me:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="me-5 p-2 bg-blue-800 rounded-full">
                    <FaCheck className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Akses pembelajaran interaktif melalui video, materi bacaan,
                    dan studi kasus nyata.
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="me-5 p-2 bg-blue-800 rounded-full">
                    <FaCheck className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Belajar dari dasar hingga mahir dengan pendekatan yang
                    praktikal dan terstruktur.
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="me-5 p-2 bg-blue-800 rounded-full">
                    <FaCheck className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Ikuti komunitas pembelajar aktif untuk diskusi tanpa batas
                    dan kelas gratis rutin.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-blue-950 p-6">
            <div className="mt-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who this is NOT for:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="me-5 p-2 bg-red-500 rounded-full">
                    <FaXmark className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Tidak tertarik belajar dengan pendekatan yang terstruktur
                    dan praktikal.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="me-5 p-2 bg-red-500 rounded-full">
                    <FaXmark className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Tidak bersedia meluangkan waktu untuk belajar secara
                    mandiri.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="me-5 p-2 bg-red-500 rounded-full">
                    <FaXmark className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Tidak mau bergabung dengan komunitas pembelajar untuk
                    berbagi pengetahuan.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;

import React from "react";

const WhyChoose: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-blue-400 p-6">
        <div className="mt-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Me:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-3">✔</span>
              <span>
                Akses pembelajaran interaktif melalui video, materi bacaan, dan
                studi kasus nyata.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-3">✔</span>
              <span>
                Belajar dari dasar hingga mahir dengan pendekatan yang praktikal
                dan terstruktur.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-lg mr-3">✔</span>
              <span>
                Ikuti komunitas pembelajar aktif untuk diskusi tanpa batas dan
                kelas gratis rutin.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-red-600 p-6">
        <div className="mt-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Who this is NOT for:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 text-lg mr-3">✖</span>
              <span>
                Tidak tertarik belajar dengan pendekatan yang terstruktur dan
                praktikal.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-lg mr-3">✖</span>
              <span>
                Tidak bersedia meluangkan waktu untuk belajar secara mandiri.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-lg mr-3">✖</span>
              <span>
                Tidak mau bergabung dengan komunitas pembelajar untuk berbagi
                pengetahuan.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

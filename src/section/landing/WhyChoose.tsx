import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const WhyChoose: React.FC = () => {
  return (
    <>
      <section className="bg-blue-950 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 items-center flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-6" data-aos="zoom-out-right">
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
                    Ahli Lokal yang Andal: Terhubung dengan orang yang terampil
                    dan tepercaya di komunitas Anda, didukung oleh ulasan
                    pelanggan autentik dan rekam jejak yang jelas.
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="me-5 p-2 bg-blue-800 rounded-full">
                    <FaCheck className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Pemesanan & Pembayaran Mudah: Proses yang disederhanakan
                    untuk memesan layanan dan menyelesaikan transaksi online
                    dengan aman.
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="me-5 p-2 bg-blue-800 rounded-full">
                    <FaCheck className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Mendukung Bakat Lokal: Dengan menggunakan platform ini, Anda
                    berkontribusi langsung dalam memberdayakan dan
                    mempertahankan komunitas lokal.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-full md:w-1/2 bg-blue-950  dark:bg-gray-900 p-6"
            data-aos="zoom-out-left"
          >
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
                    Pengguna Mencari Layanan Gratis: Platform ini berfokus untuk
                    menghubungkan pengguna dengan profesional terampil yang
                    menyediakan layanan berbayar.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="me-5 p-2 bg-red-500 rounded-full">
                    <FaXmark className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Kebutuhan Bantuan Segera: Layanan memerlukan pemesanan
                    terlebih dahulu dan mungkin tidak memenuhi kebutuhan
                    mendesak atau darurat.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="me-5 p-2 bg-red-500 rounded-full">
                    <FaXmark className="text-white text-base" />{" "}
                  </span>
                  <p className="text-white">
                    Platform ini tidak digunakan untuk orang-orang yang tidak
                    serius dalam mencari atau menawarkan jasa, terutama yang
                    bercanda terkait layanan.
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

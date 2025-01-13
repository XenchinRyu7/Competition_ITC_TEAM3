import React, { useState } from "react";

const Carousel: React.FC = () => {
  const images = [
    {
      title: "Profil Penyedia Jasa",
      description:
        "Melihat informasi lengkap penyedia jasa, termasuk ulasan dari pengguna sebelumnya.",
      image: "img/kolaborasi.png",
    },
    {
      title: "Sistem Booking",
      description:
        "Memudahkan pengguna untuk memesan jasa dengan jadwal yang fleksibel.",
      image: "img/boking.png",
    },
    {
      title: "Pembayaran Aman",
      description:
        "Menyediakan sistem pembayaran yang aman dan transparan untuk semua transaksi.",
      image: "img/payment.png",
    },
  ];
  return (
    <>
      <div className="bg-slate-200 dark:bg-gray-950" data-aos="zoom-out-down">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-center mb-8 flex items-center flex-col ">
            <h1 className="text-2xl text-zinc-950 font-bold mb-5 dark:text-white">
              Fitur
            </h1>
            <p className="lg:w-3/4 w-4/5 lg:block dark:text-slate-200 ">
              Jelajahi berbagai fitur unggulan yang memudahkan Anda dalam
              menemukan dan memanfaatkan layanan lokal terpercaya.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 px-2">
            {images.map((image, index) => (
              <div
                className="w-full sm:w-72 md:w-64 lg:w-72 bg-white rounded-xl shadow-lg overflow-hidden dark:bg-slate-200"
                key={index}
              >
                <div>
                  <img
                    className="lg:w-full lg:h-60 object-cover"
                    src={image.image}
                    // alt={image.title}
                  />

                  <div className="py-8 px-4">
                    <h3 className="font-semibold text-zinc-950 mb-3 text-xl truncate">
                      {image.title}
                    </h3>
                    <p className="font-normal text-sm text-zinc-800 mb-6">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

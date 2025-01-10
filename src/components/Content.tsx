import React from "react";

const Content = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-18 py-10">
        <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0">
          <div className="relative z-10 mt-10">
            <div className="w-64 mx-60 h-80 mt-40 rounded-lg relative">
              <img
                src="public/img/bangunan.jpg"
                alt="Front Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-64 h-80 ml-24 rounded-lg absolute top-4 left-4 -z-10">
              <img
                src="public/img/bangunan-proyek.jpg"
                alt="Back Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 w-full md:w-1/2 px-4 md:px-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Frequently Asked Questions
          </h2>
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              What is Lorem Ipsum?
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

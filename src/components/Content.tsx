import React from "react";

const Content = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-200 flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Frequently Asked Questions
          </h2>

          {/* Question 1 */}
          <div className="border-b border-gray-300 pb-4">
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

          {/* Question 2 */}
          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Why do we use it?
            </h3>
            <p className="text-gray-600 mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>

          {/* Question 3 */}
          <div>
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

        {/* Image Section */}
        <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0">
          <div className="relative z-10 mt-10">
            {/* Front Box */}
            <div className="w-64 h-80 mt-40 bg-white border-2 border-blue-500 rounded-lg relative">
              <img
                src="public/img/dua.jpeg"
                alt="Front Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Back Box */}
            <div className="w-64 h-80 ml-24 border-2 border-blue-500 rounded-lg absolute top-4 left-4 -z-10">
              <img
                src="public/img/dua.jpeg"
                alt="Back Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

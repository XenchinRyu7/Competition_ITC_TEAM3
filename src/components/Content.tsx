const Content = () => {
  return (
    <>
      <div className="dark:bg-gray-900 h-[450px] lg:text-start text-justify lg:min-h-screen bg-slate-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-18 py-10 overflow-x-hidden">
        <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0">
          <div className="relative z-10 mt-10" data-aos="fade-right">
            <div className="w-64 mx-60 h-80 mt-40 rounded-lg relative">
              <img
                src="img/card-2.jpg"
                alt="Front Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-64 h-80 ml-24 rounded-lg absolute top-4 left-4 -z-10">
              <img
                src="img/card-1.jpg"
                alt="Back Box"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          className="space-y-6 w-full md:w-1/2 px-4 md:px-0"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left  dark:text-slate-200">
            SkillBridge
          </h2>
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800 hidden lg:block  dark:text-slate-200">
              Apa Si SkillBridge
            </h3>
            <p className="text-gray-600 mt-2  dark:text-slate-200">
              SkillBridge hadir sebagai solusi untuk menjembatani kebutuhan ini,
              dengan menyediakan platform digital yang menghubungkan masyarakat
              dengan penyedia jasa komunitas lokal secara efisien dan
              transparan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

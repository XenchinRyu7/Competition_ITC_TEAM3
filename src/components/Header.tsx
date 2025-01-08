export default function Header() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/img/background_indonesia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="lg:px-20 h-screen flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
        <div className="w-full sm:w-1/2 text-center sm:text-left text-slate-900">
          <h1 className="text-2xl sm:text-4xl font-semibold">SkillBridge</h1>
          <p className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8 mt-2">
            Platform yang mempertemukan kebutuhan masyarakat dengan keterampilan
            komunitas lokal, seperti jasa perbaikan, kerajinan, atau pendidikan.
          </p>
          <a
            href="/auth/signin"
            className="inline-block text-sm sm:text-base font-semibold text-white bg-blue-500 py-3 px-6 sm:px-8 rounded-full hover:shadow-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          >
            Join Now
          </a>
        </div>
        <div className="hidden md:flex w-full sm:w-1/2  justify-center sm:justify-end">
          <img
            src="/img/tools_3d.svg"
            alt="E-Learning Illustration"
            className="w-full max-w-sm sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

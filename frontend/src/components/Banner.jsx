import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen mx-auto mt-24">
      {/* BANNER */}
      <div>
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div>
              <img src={banner} alt="" className="lg:h-[500px]" />
            </div>
            <div className="md:w-3/5">
              <h2 className="md:text-7xl text-4xl font-bold text-pale mb-6 leading-relaxed">Ayo Latih Bahasa Jepangmu!</h2>
              <p className="text-brokenwhite text-2xl mb-8">
                Kamu bisa mengukur kemampuan bahasa Jepangmu secara menyeluruh. Jangan ragu, yuk mulai latihan dan raih hasil
                terbaik! 💪📚 #BelajarBahasaJepang #JFT #AyoBelajar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

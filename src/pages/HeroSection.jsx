import img from "../assets/01-01.png";

const HeroSection = () => {
  return (
    <div
      id="home"
      // style={bg}
      className=" h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:bg-bottom overflow-hidden flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 md:px-24 lg:px-32 bg-[#0e0e0e] w-full relative"
    >
      <div className=" flex flex-col gap-6  text-white lg:w-[50%]">
        <div className="font-semibold opacity-20 text-2xl md:text-4xl">
          Hello !
        </div>
        <h1 className="text-6xl md:text-8xl font-bold">
          <div>
            I'm <span className="text-[#ff9a00]">Oussama</span>
          </div>
          <div className="text-[#ff9a00]">ICHID</div>
        </h1>
        <div className="font-semibold text-lg">
          Graphic Designer / Photographer
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/#contact"
            className="bg-[#ff9a00] text-white place-self-start font-semibold rounded-full text-md md:text-md py-2 px-4 tracking-wide shadow-md"
          >
            CONTACT ME
          </a>
          <a
            href="/#portfolio"
            className="hover:bg-[#ff9a00] border-[1px] border-[#ff9a00] text-white place-self-start font-semibold rounded-full text-md md:text-md py-2 px-4 tracking-wide shadow-md"
          >
            MY WORK
          </a>
        </div>
      </div>
      <div className="text-white hidden lg:block w-[100%] relative z-10">
        <img
          className="h-[800px] w-full object-cover overflow-visible z-10"
          src={img}
          alt="oussama ichid"
        />
        <div className="absolute top-32 left-20 w-72 h-72 rounded-full bg-[#ff9a00] blur-3xl -z-10"></div>
      </div>
      <div className="absolute -top-10 -right-20 w-52 h-52 rounded-full bg-[#ff9a0080] blur-3xl z-10"></div>
    </div>
  );
};

export default HeroSection;

const HeroSection = () => {
  const bg = { backgroundImage: 'url("../public/1.png")' };

  return (
    <div
      id="home"
      // style={bg}
      className=" h-screen bg-contain md:bg-cover bg-no-repeat bg-center md:bg-bottom overflow-hidden flex flex-col justify-center px-6 md:px-24 lg:px-32 bg-[#000]"
    >
      <div className=" flex flex-col  text-white">
        <div className="font-semibold opacity-20 text-2xl md:text-4xl">
          I'm a
        </div>
        <h1 className="text-6xl md:text-9xl font-bold">
          <div>GRAPHIC</div>
          <div>
            DESIGNER<span className="text-[#b9090b]">.</span>
          </div>
        </h1>
        <a
          href="/#contact"
          className="bg-[#b9090b] text-white place-self-start font-semibold rounded-md text-md md:text-md p-2 tracking-wide shadow-md"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

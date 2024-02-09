const HeroSection = () => {
  const bg = { backgroundImage: 'url("../public/1.png")' };
  return (
    <div
      id="home"
      style={bg}
      className=" h-screen bg-contain bg-no-repeat bg-center overflow-hidden flex flex-col justify-center px-20 md:px-36 bg-[#000]"
    >
      <div className=" flex flex-col  text-white">
        <div className="font-semibold opacity-20 text-4xl">I'm a</div>
        <div className="text-9xl font-bold">
          <div>GRAPHIC</div>
          <div>
            DESIGNER<span className="text-[#aac4e7]">.</span>
          </div>
        </div>
        <div className="bg-[#aac4e7] place-self-start text-md px-1 tracking-wide shadow-md">
          CONTACT ME
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

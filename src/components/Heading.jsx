const Heading = ({ title, background }) => {
  return (
    <div className="relative py-2 px-3 text-[#C9191b] flex items-center justify-center">
      <h1
        className="relative text-3xl md:text-5xl font-bold z-20 "
        // style={{ textShadow: "0 0 25px #e9fc87 , 0 0 35px #e9fc87" }}
      >
        {title}
      </h1>
      {/* <div className="absolute bottom-10 text-6xl md:text-8xl z-10 tracking-widest inset-0 flex items-center justify-center opacity-10">
        {background}
      </div> */}
    </div>
  );
};

export default Heading;

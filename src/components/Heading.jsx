const Heading = ({ title, background }) => {
  return (
    <div className="relative py-4 px-6 text-[#e9fc87] flex items-center justify-center">
      <h1
        className="relative text-6xl font-light z-20 "
        style={{ textShadow: "0 0 25px #e9fc87 , 0 0 35px #e9fc87" }}
      >
        {title}
      </h1>
      <div className="absolute bottom-10 text-9xl z-10 tracking-widest inset-0 flex items-center justify-center opacity-10">
        {background}
      </div>
    </div>
  );
};

export default Heading;

const Heading = ({ title, background }) => {
  return (
    <div className="relative py-4 px-6 text-[#aac4e7] flex items-center justify-center">
      <h1
        className="relative text-6xl font-light z-20 "
        style={{ textShadow: "0 0 25px #aac4e7 , 0 0 35px #aac4e7" }}
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

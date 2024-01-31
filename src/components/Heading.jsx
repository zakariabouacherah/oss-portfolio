const Heading = ({ title, background }) => {
  return (
    <div className="relative py-4 px-6 text-[#cce5e3] flex items-center justify-center">
      <h1
        className="relative text-6xl font-light z-20 "
        style={{ textShadow: "0 0 20px #cce5e3" }}
      >
        {title}
      </h1>
      <div className="absolute bottom-10 text-9xl z-10 tracking-widest inset-0 flex items-center justify-center opacity-5">
        {background}
      </div>
    </div>
  );
};

export default Heading;

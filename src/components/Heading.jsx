const Heading = ({ title, background }) => {
  return (
    <div className="relative py-2 text-[#ff9a00] flex items-center justify-center">
      <h1 className="relative text-3xl md:text-5xl font-bold z-20 ">{title}</h1>
    </div>
  );
};

export default Heading;

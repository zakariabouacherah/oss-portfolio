import "../animation.css";

const ServiceItem = ({ icon, title, text }) => {
  return (
    <div className="relative contai border-[4px] border-[#4c4c4c]">
      <div className="relative z-10 backdrop-blur-sm flex flex-col items-center justify-center min-h-64 gap-4 p-4 bg-[#ffffff10] text-[#EDEDDF] rounded-md shadow-md">
        <div className="text-3xl text-[#ff9a00]"> {icon} </div>
        <div className="font-semibold"> {title} </div>
        <div className="text-center text-sm opacity-70"> {text} </div>
      </div>
      <div className="dec1 absolute h-[36px] w-[36px]  bg-[#ff9a00] rounded-full z-0 top-[-16px] left-[-16px]"></div>
      <div className="dec2 absolute h-[26px] w-[26px]  bg-[#ff9a00] rounded-full z-0 top-[30px] left-[-10px]"></div>
      <div className="dec3 absolute h-[16px] w-[16px]  bg-[#ff9a00] rounded-full z-0 top-[60px] left-[-8px]"></div>
    </div>
  );
};

export default ServiceItem;

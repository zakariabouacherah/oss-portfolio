import img1 from "../assets/x-01.png";
import img2 from "../assets/x-02.png";
import img3 from "../assets/x-03.png";
import img4 from "../assets/x-04.png";

const IWorkWith = () => {
  return (
    <div className="w-full bg-[#242424] py-0 px-4 relative flex justify-center ">
      <div className="absolute lg:-top-16 -top-24 left-[50%] translate-x-[-50%] text-white font-semibold text-center lg:text-2xl py-2 px-4 bg-[#ff9a00] rounded-full z-30  ">
        Some of the companies I have worked with
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row items-center">
          <li>
            <img src={img1} alt="husa" />
          </li>
          <li>
            <img src={img2} alt="husa" />
          </li>
          <li>
            <img src={img3} alt="husa" />
          </li>
          <li>
            <img src={img4} alt="husa" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IWorkWith;

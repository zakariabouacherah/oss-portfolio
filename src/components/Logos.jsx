import { Link } from "react-router-dom";
import logo1 from "../assets/logos/l1.png";
import logo2 from "../assets/logos/l2.png";
import logo3 from "../assets/logos/l3.png";
import logo5 from "../assets/logos/l5.png";
import logo7 from "../assets/logos/l7.png";
import logo4 from "../assets/logos/l4.png";
import logo6 from "../assets/logos/l6.png";
import logo8 from "../assets/logos/l8.png";
import logo9 from "../assets/logos/l9.png";

const Logos = () => {
  const divStyle =
    "h-[200px] lg:h-[250px] overflow-hidden flex items-center justify-center rounded-sm  lg:bg-transparent";
  const imgStyle =
    "w-full h-full bg-neutral-900 hover:bg-neutral-800 object-cover drop-shadow-md cursor-pointer lg:brightness-50 hover:brightness-100 transition-all ease scale-100 hover:scale-105";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-4">
      <Link to="/ensueno" className={`${divStyle} lg:col-span-2 `}>
        <img src={logo1} width={200} alt="" className={`${imgStyle}`} />
      </Link>
      <div className={`${divStyle} `}>
        <img src={logo2} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `}>
        <img src={logo3} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `}>
        <img src={logo5} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={logo7} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} lg:col-span-2 `}>
        <img src={logo4} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `}>
        <img src={logo6} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} lg:col-span-2 `}>
        <img src={logo8} width={200} alt="" className={imgStyle} />
      </div>
      <Link to="/rci" className={`${divStyle} `}>
        <img src={logo9} width={200} alt="" className={imgStyle} />
      </Link>
    </div>
  );
};

export default Logos;

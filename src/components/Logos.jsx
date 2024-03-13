import { Link } from "react-router-dom";

const Logos = () => {
  const divStyle =
    "h-[200px] lg:h-[250px] overflow-hidden flex items-center justify-center rounded-sm ";
  const imgStyle =
    "w-full h-full object-cover drop-shadow-md cursor-pointer brightness-50 hover:brightness-100 transition-all ease scale-100 hover:scale-105";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-4">
      <Link to="/ensueno" className={`${divStyle} lg:col-span-2 `}>
        <img
          src="../../public/logos/l1.png"
          width={200}
          alt=""
          className={`${imgStyle}`}
        />
      </Link>
      <div className={`${divStyle} `}>
        <img
          src="../../public/logos/l2.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle} `}>
        <img
          src="../../public/logos/l3.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle} `}>
        <img
          src="../../public/logos/l5.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../../public/logos/l7.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle} lg:col-span-2 `}>
        <img
          src="../../public/logos/l4.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle} `}>
        <img
          src="../../public/logos/l6.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle} lg:col-span-2 `}>
        <img
          src="../../public/logos/l8.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </div>
      <Link to="/rci" className={`${divStyle} `}>
        <img
          src="../../public/logos/l9.png"
          width={200}
          alt=""
          className={imgStyle}
        />
      </Link>
    </div>
  );
};

export default Logos;

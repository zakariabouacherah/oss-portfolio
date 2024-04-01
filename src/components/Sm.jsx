import sm1 from "../assets/sm1.jpg";
import sm2 from "../assets/sm2.jpg";
import sm3 from "../assets/sm3.jpg";
import sm4 from "../assets/sm4.jpg";
import sm5 from "../assets/sm5.jpg";
import sm6 from "../assets/sm6.jpg";
import sm7 from "../assets/sm7.jpg";
import sm8 from "../assets/sm8.jpg";
import sm9 from "../assets/sm9.jpg";
const Sm = () => {
  const divStyle =
    "w-[300px] h-[300px] overflow-hidden flex items-center justify-center group ";
  const imgStyle =
    "w-full h-full object-contain shadow-lg cursor-pointer group-hover:scale-95 group-hover:brightness-100 lg:brightness-50 transition-all ease scale-100";

  return (
    <div className="flex items-center justify-center flex-wrap  gap-x-4 gap-y-8">
      <div className={`${divStyle}`}>
        <img src={sm1} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm2} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm3} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm4} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm5} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm6} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm7} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm8} width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src={sm9} width={300} alt="" className={imgStyle} />
      </div>
    </div>
  );
};

export default Sm;

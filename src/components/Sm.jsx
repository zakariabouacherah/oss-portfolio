const Sm = () => {
  const divStyle =
    "w-[300px] h-[300px] overflow-hidden flex items-center justify-center group ";
  const imgStyle =
    "w-full h-full object-contain shadow-lg cursor-pointer group-hover:scale-95 group-hover:brightness-100 brightness-50 transition-all ease scale-100";

  return (
    <div className="flex items-center justify-center flex-wrap  gap-x-4 gap-y-8">
      <div className={`${divStyle}`}>
        <img src="../public/sm1.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm2.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm3.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm4.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm5.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm6.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm7.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm8.jpg" width={300} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`}>
        <img src="../public/sm9.jpg" width={300} alt="" className={imgStyle} />
      </div>
    </div>
  );
};

export default Sm;

const Sm = () => {
  const divStyle =
    "w-[300px] h-[300px] overflow-hidden flex items-center justify-center group ";
  const imgStyle =
    "w-full h-full object-contain shadow-lg cursor-pointer group-hover:scale-95 group-hover:brightness-100 lg:brightness-50 transition-all ease scale-100";

  return (
    <div className="flex items-center justify-center flex-wrap  gap-x-4 gap-y-8">
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm1.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm2.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm3.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm4.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm5.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm6.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm7.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm8.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
      <div className={`${divStyle}`}>
        <img
          src="../src/assets/sm9.jpg"
          width={300}
          alt=""
          className={imgStyle}
        />
      </div>
    </div>
  );
};

export default Sm;

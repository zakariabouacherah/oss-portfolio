const SkillItem = ({ title, percentage, icon }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div>
          <img src={icon} width="20px" alt={title} />
        </div>
        <h1 className="text-slate-50 font-semibold"> {title} </h1>
      </div>
      <div className="w-full relative">
        <div className="relative bg-slate-300 w-full h-[10px] rounded"></div>
        <div
          className={`absolute inset-0 h-[10px] w-[${percentage}%] bg-slate-700 rounded`}
        ></div>
        <div className="absolute bottom-2 right-2 text-slate-50 text-sm">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

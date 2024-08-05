import { Line } from "rc-progress";
const SkillItem = ({ title, percentage, icon }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="text-white text-xl">
          {/* <img src={icon} width="20px" alt={title} /> */}
          {icon}
        </div>
        <h1 className="text-slate-50 font-semibold"> {title} </h1>
      </div>
      <div className="w-full relative">
        <Line
          percent={percentage}
          strokeWidth="2"
          trailWidth="2"
          strokeColor="#ff9a00"
          trailColor="#ff9a0046"
        />
        <div className="absolute bottom-4 right-2 text-slate-50 font-semibold text-sm">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

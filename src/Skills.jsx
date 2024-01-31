import Heading from "./components/Heading";
import SkillItem from "./components/SkillItem";

const Skills = () => {
  return (
    <div
      id="skills"
      className=" h-screen flex flex-col justify-center px-20 md:px-36 bg-[#7b7b7b]"
    >
      <Heading title="SKILLS" background="SKILLS" />
      <div className="grid grid-cols-2 gap-x-16 gap-y-20 mt-16">
        <SkillItem title="Adobe Illistrator" percentage="90" />
        <SkillItem title="Adobe Photoshop" percentage={75} />
        <SkillItem title="Adobe After Effects" percentage="50" />
        <SkillItem title="Adobe Premiere Pro" percentage="50" />
        <SkillItem title="Adobe Lightroom" percentage="95" />
      </div>
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-slate-50 tracking-widest">
          I'm Available For{" "}
          <span className="text-slate-300 underline">FreeLance !</span>
        </h1>
      </div>
    </div>
  );
};

export default Skills;

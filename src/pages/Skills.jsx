import Heading from "../components/Heading";
import SkillItem from "../components/SkillItem";

const Skills = () => {
  return (
    <div
      id="skills"
      style={{
        padding: "120px 8rem",
        backgroundImage: 'url("../public/3.png")',
      }}
      className=" min-h-screen flex flex-col justify-center px-20 bg-top md:px-32 bg-[#292929]"
    >
      <div className="z-0 mb-10">
        <Heading title="SKILLS" background="SKILLS" />
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-20 mt-16">
        <SkillItem
          title="Adobe Illistrator"
          percentage="90"
          icon="../public/illustrateur1.png"
        />
        <SkillItem
          title="Adobe Photoshop"
          percentage={75}
          icon="../public/photoshop.png"
        />
        <SkillItem
          title="Adobe After Effects"
          percentage="50"
          icon="../public/ae.png"
        />
        <SkillItem
          title="Adobe Premiere Pro"
          percentage="50"
          icon="../public/pr.png"
        />
        <SkillItem
          title="Adobe Lightroom"
          percentage="95"
          icon="../public/lr.png"
        />
        <SkillItem
          title="Photography"
          percentage="80"
          icon="../public/camera.png"
        />
        <SkillItem
          title="Videography"
          percentage="70"
          icon="../public/video.png"
        />
      </div>
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-slate-50 tracking-widest">
          I'm Available For{" "}
          <span className="text-yellow-50 underline">FreeLance !</span>
        </h1>
      </div>
    </div>
  );
};

export default Skills;

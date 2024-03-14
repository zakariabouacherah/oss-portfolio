import Heading from "../components/Heading";
import SkillItem from "../components/SkillItem";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobelightroom,
} from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";

const Skills = () => {
  return (
    <div
      id="skills"
      style={{
        // padding: "120px 8rem",
        backgroundImage: 'url("../public/3.png")',
      }}
      className=" lg:h-screen flex flex-col justify-center  bg-top bg-cover lg:bg-auto bg-[#292929] px-12 md:px-24 lg:px-32"
    >
      <div className="z-0 ">
        <Heading title="SKILLS" background="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-20 mt-16">
        <SkillItem
          title="Adobe Illistrator"
          percentage="90"
          icon={<SiAdobeillustrator />}
        />
        <SkillItem
          title="Adobe Photoshop"
          percentage={75}
          icon={<SiAdobephotoshop />}
        />
        <SkillItem
          title="Adobe After Effects"
          percentage="50"
          icon={<SiAdobeaftereffects />}
        />
        <SkillItem
          title="Adobe Premiere Pro"
          percentage="50"
          icon={<SiAdobepremierepro />}
        />
        <SkillItem
          title="Adobe Lightroom"
          percentage="95"
          icon={<SiAdobelightroom />}
        />
        <SkillItem
          title="Photography"
          percentage="80"
          icon={<MdPhotoCamera />}
        />
        <SkillItem title="Videography" percentage="70" icon={<IoVideocam />} />
      </div>
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-slate-50 tracking-widest">
          I'm Available For{" "}
          <span className="text-[#fcd9cb] underline">FreeLance !</span>
        </h1>
      </div>
    </div>
  );
};

export default Skills;

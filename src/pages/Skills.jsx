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
    <section
      id="skills"
      className=" lg:min-h-screen flex flex-col justify-center  bg-top bg-cover lg:bg-auto bg-[#030303] py-6 px-12 md:px-24 lg:px-32"
    >
      <div className="z-0 mt-4 ">
        <Heading title="SKILLS" background="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-20 mt-16">
        <SkillItem
          title="Adobe Illustrator"
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
    </section>
  );
};

export default Skills;

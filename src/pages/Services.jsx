import Heading from "../components/Heading";
import ServiceItem from "../components/ServiceItem";
import { FaPaintBrush, FaCamera } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaFilm } from "react-icons/fa6";
import bg from "../assets/2.png";

const Services = () => {
  return (
    <section
      id="services"
      style={
        {
          // padding: "120px 8rem",
          // backgroundImage: `url(${bg})`,
        }
      }
      className="  flex flex-col items-center justify-center gap-10 bg-top bg-cover lg:bg-auto pt-6 pb-16 lg:pt-28 px-12 md:px-36 bg-[#000] "
    >
      <div className="z-0 my-10">
        <Heading title="SERVICES" background="SERVICES" />
      </div>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-4 z-0">
        <ServiceItem
          icon={<FaPaintBrush />}
          title="Graphic Design"
          text="I'll craft modern graphic designs tailored to your vision, bringing your ideas to life with creativity and precision."
        />
        <ServiceItem
          icon={<BiSolidVideos />}
          title="Video Editing"
          text="With meticulous attention to detail, I'll expertly edit your videos to enhance storytelling and captivate your audience."
        />
        <ServiceItem
          icon={<HiOutlineSpeakerphone />}
          title="Branding"
          text="I'll develop a compelling branding strategy that resonates with your audience, helping your business leave a lasting impression in the market."
        />
        <ServiceItem
          icon={<FaCamera />}
          title="Photographing"
          text="Through skilled photography, I'll capture moments that convey your story and showcase your brand's authenticity and uniqueness."
        />
        <ServiceItem
          icon={<BsFillCameraReelsFill />}
          title="Videographing"
          text="I'll skillfully film videos that capture the essence of your events or products, delivering high-quality visuals that engage and inspire."
        />
        <ServiceItem
          icon={<FaFilm />}
          title="Motion Graphic"
          text="Using dynamic motion graphics, I'll add flair and excitement to your projects, elevating your content with eye-catching animations and effects."
        />
      </div>
    </section>
  );
};

export default Services;

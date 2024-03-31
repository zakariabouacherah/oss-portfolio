import Heading from "../components/Heading";
import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";
import photo from "../assets/img1.png";

const About = () => {
  // const bg = { backgroundImage: 'url("../public/bg3.png")' };
  const styledItem =
    "px-4 py-2 text-sm bg-[#fff1] rounded-lg shadow-md cursor-pointer transition hover:shadow-xl";
  const socilaMedia =
    "text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-[1px] border-[#b9090b] hover:bg-[#b9090b] hover:border-transparent hover:text-slate-700 ";
  return (
    <section
      id="about"
      // style={bg}
      style={{
        // padding: "120px 8rem",
        backgroundImage: 'url("../src/assets/2.png")',
      }}
      className=" lg:h-screen bg-cover lg:bg-auto flex flex-col items-center justify-start lg:justify-center gap-10 bg-top py-6 px-12 md:px-24 lg:px-32 bg-[#000] "
    >
      <div className="z-0">
        <Heading title="ABOUT ME" background="ABOUT" />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center  w-full gap-20 lg:gap-6">
        <div className="w-full lg:w-[50%] h-[400px] lg:h-[600px] flex items-center justify-center ">
          <div className="relative z-0 h-[100%] pr-4 lg:pr-0 ">
            <img
              src={photo}
              width="400px"
              alt="img"
              className="relative w-full h-full scale-110 object-cover z-30  lg:saturate-0 brightness-90 hover:saturate-50 transition-all duration-300 ease-in "
              // style={{ filter: "drop-shadow(0 0 20px #b9090b83)" }}
            />
            <div className="absolute left-[0%] top-[30px] lg:left-[30px] w-full h-full z-10 border-[10px] border-[#b9090b] "></div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] h-[640px] lg:h-[60px] text-white flex flex-col justify-center gap-2 ">
          <div className="text-lg">
            My name is{" "}
            <span
              style={{ textShadow: "0 0 20px -10px #b9090b" }}
              className="text-[#b9090b] font-bold"
            >
              Oussama chid
            </span>
          </div>
          <div className="text-justify text-sm mb-3">
            A creative mind deeply passionate about graphic design and
            photography. Through my lens, I freeze moments in time, capturing
            emotions and stories. As a graphic designer, I bring ideas to life
            with innovation and precision. My portfolio is a visual narrative,
            blending design and photography to create engaging and memorable
            experiences. Join me on a journey where every image and design tells
            a unique story.
          </div>
          <div className="grid lg:grid-cols-2 gap-x-14 gap-y-6 place-content-center text-center">
            <div className={styledItem}>
              <h2 className="text-[#b9090b] mb-1">Name</h2>
              <div className="font-semibold ">Oussama Ichid</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#b9090b] mb-1 ">Phone</h2>
              <div className="font-semibold">+212 613 615 444</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#b9090b] mb-1 ">Country</h2>
              <div className="font-semibold">Morocco</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#b9090b] mb-1 ">Email</h2>
              <div className="font-semibold">ossama.ichid12@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mb-8 mt-4 lg:mt-8">
            <a href="#" className={socilaMedia}>
              <FaFacebookF />
            </a>
            <a href="#" className={socilaMedia}>
              <FaTwitter />
            </a>
            <a
              href="https://www.behance.net/ossamaichid"
              className={socilaMedia}
              target="_blank"
            >
              <FaBehance />
            </a>
            <a href="#" className={socilaMedia}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

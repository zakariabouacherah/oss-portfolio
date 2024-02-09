import Heading from "../components/Heading";
import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

const About = () => {
  // const bg = { backgroundImage: 'url("../public/bg3.png")' };
  const styledItem =
    "px-4 py-2 text-sm bg-[#fff1] rounded-lg shadow-md cursor-pointer transition hover:shadow-xl";
  const socilaMedia =
    "text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-[1px] border-[#aac4e7] hover:bg-[#aac4e7] hover:border-transparent hover:text-slate-700 ";
  return (
    <section
      id="about"
      // style={bg}
      style={{
        padding: "120px 8rem",
        backgroundImage: 'url("../public/2.png")',
      }}
      className=" min-h-screen flex flex-col items-center justify-center gap-10 bg-top px-20 md:px-36 bg-[#000] "
    >
      <div className="z-0">
        <Heading title="ABOUT ME" background="ABOUT" />
      </div>
      <div className="flex items-center justify-center  w-full gap-6">
        <div className="w-[50%] h-[600px] flex items-center justify-center ">
          <div className="relative z-0 h-[100%] ">
            <img
              src="../public/img1.png"
              width="400px"
              alt="img"
              className="relative w-full h-full scale-110 object-cover z-30 "
              style={{ filter: "drop-shadow(0 0 20px #aac4e783)" }}
            />
            <div className="absolute top-[30px] left-[30px] w-full h-full z-10 border-[10px] border-[#aac4e7] "></div>
          </div>
        </div>
        <div className="w-[50%] max-w-[600px] text-white flex flex-col gap-2 ">
          <div className="text-lg">
            My name is{" "}
            <span
              style={{ textShadow: "0 0 40px #aac4e7" }}
              className="text-[#aac4e7]"
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
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 place-content-center text-center">
            <div className={styledItem}>
              <h2 className="text-[#aac4e7] mb-1">Name</h2>
              <div className="font-semibold ">Oussama Ichid</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#aac4e7] mb-1 ">Phone</h2>
              <div className="font-semibold">+212 600 000 000</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#aac4e7] mb-1 ">Country</h2>
              <div className="font-semibold">Morocco</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#aac4e7] mb-1 ">Email</h2>
              <div className="font-semibold">oussamaichid@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
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

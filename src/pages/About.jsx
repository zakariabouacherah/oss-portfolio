import Heading from "../components/Heading";
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import photo from "../assets/02-01.png";

const About = () => {
  const styledItem =
    "px-4 py-2 text-sm bg-[#fff1] rounded-lg shadow-md cursor-pointer transition hover:shadow-xl";
  const socilaMedia =
    "text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-[1px] border-[#fff] hover:bg-[#ff9a00] hover:border-transparent hover:text-slate-700 ";
  return (
    <section
      id="about"
      className=" lg:min-h-screen bg-cover lg:bg-auto flex flex-col items-center justify-start lg:justify-center gap-10 py-6 px-12 md:px-24 lg:px-32 bg-[#333] "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-center  w-full  lg:gap-6">
        <div className="w-full lg:w-[50%] h-[400px] lg:h-[800px] flex items-center justify-center relative ">
          <div className="absolute bottom-10 lg:-bottom-10 -left-20 lg:w-72 lg:h-72 w-40 h-40 rounded-full bg-[#ff9a00] blur-3xl z-10"></div>

          <div className="relative z-20 h-[100%] ">
            <img
              src={photo}
              width="400px"
              alt="img"
              className="relative w-full h-full object-cover z-30 "
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] min-h-[640px] lg:h-[60px] text-white flex flex-col justify-center gap-2 ">
          <div className="self-start">
            <Heading title="ABOUT ME" background="ABOUT" />
          </div>
          <div className="text-lg">
            My name is{" "}
            <span
              style={{ textShadow: "0 0 20px -10px #ff9a00" }}
              className="text-[#ff9a00] font-bold"
            >
              Oussama Ichid
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
              <h2 className="text-[#ff9a00] mb-1">Name</h2>
              <div className="font-semibold ">Oussama Ichid</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#ff9a00] mb-1 ">Phone</h2>
              <div className="font-semibold">+212 613 615 444</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#ff9a00] mb-1 ">Country</h2>
              <div className="font-semibold">Morocco</div>
            </div>
            <div className={styledItem}>
              <h2 className="text-[#ff9a00] mb-1 ">Email</h2>
              <div className="font-semibold">ossama.ichid12@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mb-8 mt-4 lg:mt-8">
            <a
              href="https://wa.me/qr/MABUWITEPHCCB1"
              className={socilaMedia}
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a href="#" className={socilaMedia} target="_blank">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.behance.net/ossamaichid"
              className={socilaMedia}
              target="_blank"
            >
              <FaBehance />
            </a>
            <a href="#" className={socilaMedia} target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

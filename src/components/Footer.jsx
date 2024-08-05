import {
  FaInstagram,
  FaBehance,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socilaMedia =
    "text-2xl w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-[#fff]  ";

  return (
    <footer className="bg-[#ff9a00] px-16 pt-10 pb-4 flex overflow-hidden flex-col items-center">
      <div className="flex flex-col lg:flex-row text-white items-center justify-between gap-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#galery">Galery</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
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
      <div className="w-[50%] h-[1px] mt-6 bg-neutral-50 opacity-25"></div>
      <div className="text-sm mt-2 text-neutral-50 opacity-75 text-center">
        © 2024 OussamaIchid, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

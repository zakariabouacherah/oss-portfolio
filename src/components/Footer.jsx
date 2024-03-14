import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socilaMedia =
    "text-2xl w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-[#fff]  ";

  return (
    <footer className="bg-[#b9090b] px-16 pt-10 pb-4 flex overflow-hidden flex-col items-center">
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
        <div className="flex justify-center items-center gap-6">
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
      <div className="w-[50%] h-[1px] mt-6 bg-neutral-50 opacity-25"></div>
      <div className="text-sm mt-2 text-neutral-50 opacity-75">
        © 2024 OussamaIchid, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

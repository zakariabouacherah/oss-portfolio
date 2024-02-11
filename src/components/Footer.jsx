import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socilaMedia =
    "text-2xl w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-[#fff]  ";

  return (
    <footer className="bg-[#aac4e7] px-16 pt-10 pb-4 flex flex-col items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
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
      <div className="w-[50%] h-[1px] mt-6 bg-neutral-700 opacity-25"></div>
      <div className="text-sm mt-2 text-neutral-700 opacity-75">
        © 2024 OussamaIchid, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 67) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const menuItemStyle =
    "transition hover:text-[#CCE5E3] border-b-[1.5px] border-b-transparent hover:border-b-[#CCE5E3] cursor-pointer";

  return (
    <nav
      className={`flex items-center w-screen transition-all justify-between py-4 px-16 fixed top-0  z-40 text-slate-50  ${
        color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="font-bold text-2xl text-[#CCE5E3]">OI</div>
      <div>
        <ul className="flex items-center gap-6">
          <a href="/#home">
            <li className={menuItemStyle}>Home</li>
          </a>
          <a href="/#about">
            <li className={menuItemStyle}>About</li>
          </a>
          <a href="/#skills">
            <li className={menuItemStyle}>Skills</li>
          </a>
          <a href="/#portfolio">
            <li className={menuItemStyle}>Portfolio</li>
          </a>
          <a href="/#galery">
            <li className={menuItemStyle}>Galery</li>
          </a>
          <a href="/#services">
            <li className={menuItemStyle}>Services</li>
          </a>
          <a href="/#contact">
            <li className={menuItemStyle}>Contact</li>
          </a>
        </ul>
      </div>
      <div className="w-10 h-10 bg-gradient-to-b from-[#eedef666] to-[#cce5e366] shadow-md rounded-full flex items-center justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/459/666/original/people-avatar-icon-png.png"
          alt="avatar"
          className="w-8 h-8 object-contain  rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

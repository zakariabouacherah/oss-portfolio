import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const MENU_ITEMS = [
  { id: "home", label: "Home", scrollPosition: 927 },
  { id: "about", label: "About", scrollPosition: 1939 },
  { id: "skills", label: "Skills", scrollPosition: 2900 },
  { id: "portfolio", label: "Portfolio", scrollPosition: 4328 },
  { id: "galery", label: "Galery", scrollPosition: 6565 },
  { id: "services", label: "Services", scrollPosition: 7487 },
  { id: "contact", label: "Contact", scrollPosition: 7635 },
];

const menuItemStyle =
  "transition hover:text-[#b9090b] border-b-[1.5px] border-b-transparent hover:border-b-[#b9090b] cursor-pointer";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const changeColor = () => {
    setColor(window.scrollY >= 67);
    const activeItem = MENU_ITEMS.find(
      (item) => window.scrollY <= item.scrollPosition
    );
    setActiveMenuItem(activeItem ? activeItem.id : "contact");
  };

  const openNavbar = () => {
    setIsOpen(true);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  console.log(isOpen);

  useEffect(() => {
    const isHomePage = window.location.pathname === "/";
    if (!isHomePage) {
      setActiveMenuItem("portfolio");
    }
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={`flex items-center w-screen transition-all justify-between py-4 px-16 fixed top-0 gap-24  z-40 text-white  ${
        color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
      }`}
    >
      <a
        href="#home"
        className="font-bold text-2xl text-[#b9090b] cursor-pointer"
      >
        OI
      </a>
      <div
        className={`flex absolute lg:relative  left-0 w-screen lg:w-full h-screen lg:h-full  bg-black lg:bg-transparent flex-col-reverse justify-end pt-14 lg:pt-0 lg:justify-between lg:top-0 lg:flex-row items-center gap-14 transition-all duration-300 ease-in ${
          isOpen ? "top-0 " : "top-[-1000px] "
        }`}
      >
        <ul className={`items-center gap-6 flex flex-col lg:flex-row `}>
          {MENU_ITEMS.map((item) => (
            <a key={item.id} href={`/#${item.id}`}>
              <li
                className={`${menuItemStyle} ${
                  activeMenuItem === item.id
                    ? "border-b-[#b9090b] text-[#b9090b]"
                    : ""
                }`}
                onClick={closeNavbar}
              >
                {item.label}
              </li>
            </a>
          ))}
        </ul>

        <a
          onClick={closeNavbar}
          href="#contact"
          className="w-10 h-10 bg-gradient-to-b from-[#e8c365bd] to-[#b9090c3f] shadow-md rounded-full flex items-center justify-center"
        >
          <img
            src="../../src/assets/Profile.png"
            alt="avatar"
            className="w-10 h-10 object-contain rounded-full"
          />
        </a>
        <div
          className="flex lg:hidden text-2xl cursor-pointer"
          onClick={closeNavbar}
        >
          <FaXmark />
        </div>
      </div>

      <div
        className="flex lg:hidden text-2xl cursor-pointer"
        onClick={openNavbar}
      >
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;

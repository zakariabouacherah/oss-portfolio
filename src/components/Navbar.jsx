// import { useState } from "react";

// const Navbar = () => {
//   const [color, setColor] = useState(false);
//   const [navItems, setnavItems] = useState({
//     home: false,
//     about: false,
//     skills: false,
//     portfolio: false,
//     galery: false,
//     services: false,
//     contact: false,
//   });
//   const changeColor = () => {
//     if (window.scrollY >= 67) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//     if (window.scrollY <= 927) {
//       setnavItems((prevNavItems) => ({
//         ...prevNavItems,
//         home: true,
//         about: false,
//         skills: false,
//         portfolio: false,
//       }));
//     } else if (window.scrollY <= 1943) {
//       setnavItems((prevNavItems) => ({
//         ...prevNavItems,
//         home: false,
//         about: true,
//         skills: false,
//         portfolio: false,
//       }));
//     } else if (window.scrollY <= 2915) {
//       setnavItems((prevNavItems) => ({
//         ...prevNavItems,
//         home: false,
//         about: false,
//         skills: true,
//         portfolio: false,
//       }));
//     } else if (window.scrollY <= 2917) {
//       setnavItems((prevNavItems) => ({
//         ...prevNavItems,
//         home: false,
//         about: false,
//         skills: false,
//         portfolio: true,
//       }));
//     }
//   };
//   window.addEventListener("scroll", changeColor);
//   console.log(window.scrollY);
//   console.log(navItems);
//   const menuItemStyle =
//     "transition hover:text-[#ffbe98] border-b-[1.5px] border-b-transparent hover:border-b-[#ffbe98] cursor-pointer";

//   return (
//     <nav
//       className={`flex items-center w-screen transition-all justify-between py-4 px-16 fixed top-0  z-40 text-slate-50  ${
//         color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="font-bold text-2xl text-[#CCE5E3]">OI</div>
//       <div>
//         <ul className={`items-center gap-6 hidden md:flex `}>
//           <a href="/#home">
//             <li
//               className={`${menuItemStyle} ${
//                 navItems.home ? "border-b-[#ffbe98] text-[#ffbe98]" : ""
//               }`}
//             >
//               Home
//             </li>
//           </a>
//           <a href="/#about">
//             <li
//               className={`${menuItemStyle} ${
//                 navItems.about ? "border-b-[#ffbe98] text-[#ffbe98]" : ""
//               }`}
//             >
//               About
//             </li>
//           </a>
//           <a href="/#skills">
//             <li
//               className={`${menuItemStyle} ${
//                 navItems.skills ? "border-b-[#ffbe98] text-[#ffbe98]" : ""
//               }`}
//             >
//               Skills
//             </li>
//           </a>
//           <a href="/#portfolio">
//             <li
//               className={`${menuItemStyle} ${
//                 navItems.portfolio ? "border-b-[#ffbe98] text-[#ffbe98]" : ""
//               }`}
//             >
//               Portfolio
//             </li>
//           </a>
//           <a href="/#galery">
//             <li className={menuItemStyle}>Galery</li>
//           </a>
//           <a href="/#services">
//             <li className={menuItemStyle}>Services</li>
//           </a>
//           <a href="/#contact">
//             <li className={menuItemStyle}>Contact</li>
//           </a>
//         </ul>
//       </div>
//       <div className="w-10 h-10 bg-gradient-to-b from-[#eedef666] to-[#cce5e366] shadow-md rounded-full flex items-center justify-center">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/011/459/666/original/people-avatar-icon-png.png"
//           alt="avatar"
//           className="w-8 h-8 object-contain  rounded-full"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: "home", label: "Home", scrollPosition: 927 },
  { id: "about", label: "About", scrollPosition: 1939 },
  { id: "skills", label: "Skills", scrollPosition: 2900 },
  { id: "portfolio", label: "Portfolio", scrollPosition: 4328 },
  { id: "galery", label: "Galery", scrollPosition: 6565 },
  { id: "services", label: "Services", scrollPosition: 7487 },
  { id: "contact", label: "Contact", scrollPosition: 7635 },
  // Add other menu items here
];

const menuItemStyle =
  "transition hover:text-[#b9090b] border-b-[1.5px] border-b-transparent hover:border-b-[#b9090b] cursor-pointer";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  const changeColor = () => {
    setColor(window.scrollY >= 67);
    const activeItem = MENU_ITEMS.find(
      (item) => window.scrollY <= item.scrollPosition
    );
    setActiveMenuItem(activeItem ? activeItem.id : "contact"); // Default to last item if none matches
  };

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
      className={`flex items-center w-screen transition-all justify-between py-4 px-16 fixed top-0  z-40 text-white  ${
        color ? "backdrop-blur-md bg-[#44444471] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="font-bold text-2xl text-[#b9090b]">OI</div>
      <div>
        <ul className={`items-center gap-6 hidden md:flex `}>
          {MENU_ITEMS.map((item) => (
            <a key={item.id} href={`/#${item.id}`}>
              <li
                className={`${menuItemStyle} ${
                  activeMenuItem === item.id
                    ? "border-b-[#b9090b] text-[#b9090b]"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <a
        href="#contact"
        className="w-10 h-10 bg-gradient-to-b from-[#e8c365bd] to-[#b9090c3f] shadow-md rounded-full flex items-center justify-center"
      >
        <img
          src="../../public/Profile.png"
          alt="avatar"
          className="w-10 h-10 object-contain  rounded-full"
        />
      </a>
    </nav>
  );
};

export default Navbar;

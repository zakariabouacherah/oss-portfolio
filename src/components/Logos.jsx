import { Link } from "react-router-dom";
import logo1 from "../assets/logos/l1.png";
import logo2 from "../assets/logos/l2.png";
import logo3 from "../assets/logos/l3.png";
import logo5 from "../assets/logos/l5.png";
import logo7 from "../assets/logos/l7.png";
import logo4 from "../assets/logos/l4.png";
import logo6 from "../assets/logos/l6.png";
import logo8 from "../assets/logos/l8.png";
import logo9 from "../assets/logos/l9.png";
import Modal from "react-modal";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Logos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const divStyle =
    "h-[200px] lg:h-[250px]  overflow-hidden flex items-center justify-center rounded-sm  lg:bg-transparent";
  const imgStyle =
    "w-full h-full bg-[#1d1d1d]  object-cover drop-shadow-md cursor-pointer rounded-lg overflow-hidden";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-4">
      <Link to="/ensueno" className={`${divStyle} lg:col-span-2 `}>
        <img src={logo1} width={200} alt="" className={`${imgStyle}`} />
      </Link>
      <div className={`${divStyle}`} onClick={() => openModal(logo2)}>
        <img src={logo2} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `} onClick={() => openModal(logo3)}>
        <img src={logo3} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo5)}>
        <img src={logo5} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo7)}>
        <img src={logo7} width={200} alt="" className={imgStyle} />
      </div>
      <div
        className={`${divStyle} lg:col-span-2`}
        onClick={() => openModal(logo4)}
      >
        <img src={logo4} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `} onClick={() => openModal(logo6)}>
        <img src={logo6} width={200} alt="" className={imgStyle} />
      </div>
      <div
        className={`${divStyle} lg:col-span-2 `}
        onClick={() => openModal(logo8)}
      >
        <img src={logo8} width={200} alt="" className={imgStyle} />
      </div>
      <Link to="/rci" className={`${divStyle} `}>
        <img src={logo9} width={200} alt="" className={imgStyle} />
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Zoomed Image"
        ariaHideApp={false}
        style={{
          content: {
            width: "80%",
            height: "80%",
            margin: "auto",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: "30",
            background: "#292929",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(6px)",
          },
        }}
      >
        <button
          onClick={closeModal}
          className="text-2xl text-[#f0e9f6] bg-slate-900 rounded-full p-2"
        >
          <MdClose />
        </button>
        <img
          src={selectedImage}
          className="w-full h-full object-contain"
          alt="Zoomed In"
        />
      </Modal>
    </div>
  );
};

export default Logos;

import { Link } from "react-router-dom";
import logo1 from "../assets/logos/Logo-01.png";
import logo2 from "../assets/logos/Logo-02.png";
import logo3 from "../assets/logos/Logo-03.png";
import logo5 from "../assets/logos/Logo-05.png";
import logo7 from "../assets/logos/Logo-07.png";
import logo4 from "../assets/logos/Logo-04.png";
import logo6 from "../assets/logos/Logo-06.png";
import logo8 from "../assets/logos/Logo-08.png";
import logo9 from "../assets/logos/Logo-09.png";
import logo10 from "../assets/logos/Logo-10.png";
import logo11 from "../assets/logos/Logo-11.png";
import logo12 from "../assets/logos/Logo-12.png";
import logo13 from "../assets/logos/Logo-13.png";
import logo14 from "../assets/logos/Logo-14.png";
import logo15 from "../assets/logos/Logo-15.png";
import logo16 from "../assets/logos/Logo-16.png";
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

  const divStyle = " overflow-hidden rounded-sm ";
  const imgStyle = "w-full h-full object-cover drop-shadow-md cursor-pointer";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      <div className={`${divStyle}`} onClick={() => openModal(logo1)}>
        <img src={logo1} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo2)}>
        <img src={logo2} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `} onClick={() => openModal(logo3)}>
        <img src={logo3} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo4)}>
        <img src={logo4} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo5)}>
        <img src={logo5} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle} `} onClick={() => openModal(logo6)}>
        <img src={logo6} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo7)}>
        <img src={logo7} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo8)}>
        <img src={logo8} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo9)}>
        <img src={logo9} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo10)}>
        <img src={logo10} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo11)}>
        <img src={logo11} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo12)}>
        <img src={logo12} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo13)}>
        <img src={logo13} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo14)}>
        <img src={logo14} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo15)}>
        <img src={logo15} width={200} alt="" className={imgStyle} />
      </div>
      <div className={`${divStyle}`} onClick={() => openModal(logo16)}>
        <img src={logo16} width={200} alt="" className={imgStyle} />
      </div>

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

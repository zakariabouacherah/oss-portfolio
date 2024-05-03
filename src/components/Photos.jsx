import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import photo1 from "../assets/galery/sg1.jpg";
import photo2 from "../assets/galery/sg2.jpg";
import photo3 from "../assets/galery/sg5.jpg";
import photo4 from "../assets/galery/sg3.jpg";
import photo5 from "../assets/galery/sushi3.jpg";
import photo6 from "../assets/galery/sushi1.jpg";
import photo7 from "../assets/galery/sushi5.jpg";
import photo8 from "../assets/galery/sushi2.jpg";
import photo9 from "../assets/galery/sushi4.jpg";
import photo10 from "../assets/galery/chess1.jpg";
import photo11 from "../assets/galery/chess5.jpg";
import photo12 from "../assets/galery/chess2.jpg";
import photo13 from "../assets/galery/chess4.jpg";
import photo14 from "../assets/galery/chess3.jpg";

const Photos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const divStyle =
    "h-[300px] lg:h-[350px] overflow-hidden flex items-center justify-center border-[2px] border-[#c9191b] rounded-lg ";
  const imgStyle =
    "w-full h-full object-cover  drop-shadow-md cursor-pointer lg:brightness-75 hover:brightness-100 transition-all ease scale-100 hover:scale-105";

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-8 text-[#ebebdf] ">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">SOUSS GAZ</h1>
        <div className="grid lg:grid-cols-5 gap-x-8 gap-4">
          <div className={`${divStyle}`} onClick={() => openModal(photo1)}>
            <img src={photo1} width={200} alt="photo1" className={imgStyle} />
          </div>
          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal(photo2)}
          >
            <img src={photo2} width={200} alt="" className={imgStyle} />
          </div>
          <div className={`${divStyle}`} onClick={() => openModal(photo3)}>
            <img src={photo3} width={200} alt="" className={imgStyle} />
          </div>
          <div className={`${divStyle}`} onClick={() => openModal(photo4)}>
            <img src={photo4} width={200} alt="" className={imgStyle} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">SUSHI FLEUR DE MING</h1>
        <div className="grid lg:grid-cols-5 gap-x-8 gap-4">
          <div className={`${divStyle}`} onClick={() => openModal(photo5)}>
            <img src={photo5} width={200} alt="" className={imgStyle} />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal(photo6)}
          >
            <img src={photo6} width={200} alt="" className={imgStyle} />
          </div>
          <div className={`${divStyle}`} onClick={() => openModal(photo7)}>
            <img src={photo7} width={200} alt="" className={imgStyle} />
          </div>
          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal(photo8)}
          >
            <img src={photo8} width={200} alt="" className={imgStyle} />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal(photo9)}
          >
            <img src={photo9} width={200} alt="" className={imgStyle} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">CHESS</h1>
        <div className="grid lg:grid-cols-5 gap-x-8 gap-4">
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal(photo10)}
          >
            <img src={photo10} width={200} alt="" className={imgStyle} />
          </div>

          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal(photo11)}
          >
            <img src={photo11} width={200} alt="" className={imgStyle} />
          </div>
          <div className={`${divStyle}`} onClick={() => openModal(photo12)}>
            <img src={photo12} width={200} alt="" className={imgStyle} />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal(photo13)}
          >
            <img src={photo13} width={200} alt="" className={imgStyle} />
          </div>
          <div className={`${divStyle}`} onClick={() => openModal(photo14)}>
            <img src={photo14} width={200} alt="" className={imgStyle} />
          </div>
        </div>
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
            // background: "transparent",
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

export default Photos;

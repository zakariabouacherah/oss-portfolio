import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import photo1 from "../assets/galery/sg1.jpg";
import photo2 from "../assets/galery/sg2.jpg";
import photo3 from "../assets/galery/sg5.jpg";
import photo4 from "../assets/galery/sg3.jpg";

const Photos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const divStyle =
    "h-[300px] lg:h-[350px] overflow-hidden flex items-center justify-center rounded-sm ";
  const imgStyle =
    "w-full h-full object-cover drop-shadow-md cursor-pointer lg:brightness-75 hover:brightness-100 transition-all ease scale-100 hover:scale-105";

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
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../src/assets/galery/sushi3.jpg")}
          >
            <img
              src="../../src/assets/galery/sushi3.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../src/assets/galery/sushi1.jpg")}
          >
            <img
              src="../../src/assets/galery/sushi1.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../src/assets/galery/sushi5.jpg")}
          >
            <img
              src="../../src/assets/galery/sushi5.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal("../../src/assets/galery/sushi2.jpg")}
          >
            <img
              src="../../src/assets/galery/sushi2.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../src/assets/galery/sushi4.jpg")}
          >
            <img
              src="../../src/assets/galery/sushi4.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">CHESS</h1>
        <div className="grid lg:grid-cols-5 gap-x-8 gap-4">
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../src/assets/galery/chess1.jpg")}
          >
            <img
              src="../../src/assets/galery/chess1.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>

          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal("../../src/assets/galery/chess5.jpg")}
          >
            <img
              src="../../src/assets/galery/chess5.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../src/assets/galery/chess2.jpg")}
          >
            <img
              src="../../src/assets/galery/chess2.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../src/assets/galery/chess4.jpg")}
          >
            <img
              src="../../src/assets/galery/chess4.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../src/assets/galery/chess3.jpg")}
          >
            <img
              src="../../src/assets/galery/chess3.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
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

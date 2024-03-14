import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

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
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/sg1.jpg")}
          >
            <img
              src="../../public/galery/sg1.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal("../../public/galery/sg2.jpg")}
          >
            <img
              src="../../public/galery/sg2.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/sg5.jpg")}
          >
            <img
              src="../../public/galery/sg5.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/sg3.jpg")}
          >
            <img
              src="../../public/galery/sg3.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">SUSHI FLEUR DE MING</h1>
        <div className="grid lg:grid-cols-5 gap-x-8 gap-4">
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/sushi3.jpg")}
          >
            <img
              src="../../public/galery/sushi3.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../public/galery/sushi1.jpg")}
          >
            <img
              src="../../public/galery/sushi1.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/sushi5.jpg")}
          >
            <img
              src="../../public/galery/sushi5.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal("../../public/galery/sushi2.jpg")}
          >
            <img
              src="../../public/galery/sushi2.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../public/galery/sushi4.jpg")}
          >
            <img
              src="../../public/galery/sushi4.jpg"
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
            onClick={() => openModal("../../public/galery/chess1.jpg")}
          >
            <img
              src="../../public/galery/chess1.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>

          <div
            className={`${divStyle} lg:col-span-2`}
            onClick={() => openModal("../../public/galery/chess5.jpg")}
          >
            <img
              src="../../public/galery/chess5.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/chess2.jpg")}
          >
            <img
              src="../../public/galery/chess2.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle} lg:col-span-3`}
            onClick={() => openModal("../../public/galery/chess4.jpg")}
          >
            <img
              src="../../public/galery/chess4.jpg"
              width={200}
              alt=""
              className={imgStyle}
            />
          </div>
          <div
            className={`${divStyle}`}
            onClick={() => openModal("../../public/galery/chess3.jpg")}
          >
            <img
              src="../../public/galery/chess3.jpg"
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

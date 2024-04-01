import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";
import Heading from "../Heading";
import image1 from "../../assets/branding1/br1.jpg";

const Branding1 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      style={{ padding: "120px 8rem" }}
      className="min-h-screen w-screen pt-16 bg-[#7b7b7b] flex flex-col items-center gap-16"
    >
      <div className="text-white">
        <Heading title="COTRALOG" background={"COTRALOG"} />
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          incidunt voluptate mollitia blanditiis ipsa, necessitatibus iste
          distinctio, illo deserunt esse temporibus. Incidunt cum eligendi
          dignissimos alias magni voluptate delectus quos! Sunt veritatis
          distinctio illo doloremque id placeat cumque aliquam inventore sed
          aut, sequi adipisci dolores ea molestiae reprehenderit consequatur
          provident minima repellat. Natus, fugit ratione explicabo sapiente
          odio temporibus facere.
        </p>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/branding1/br2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/branding1/br3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/branding1/br4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/branding1/br5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Branding1;

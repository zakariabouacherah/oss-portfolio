import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./style.css";
import Heading from "../Heading";
import image1 from "../../assets/branding2/br1.jpg";
import image2 from "../../assets/branding2/br2.jpg";
import image3 from "../../assets/branding2/br3.jpg";
import image4 from "../../assets/branding2/br4.jpg";
import image5 from "../../assets/branding2/br5.jpg";
import image6 from "../../assets/branding2/br6.jpg";
import image7 from "../../assets/branding2/br7.jpg";
import image8 from "../../assets/branding2/br8.jpg";

const Branding2 = () => {
  return (
    <div
      // style={{ padding: "120px 8rem" }}
      className="min-h-screen w-screen px-6 py-36 lg:px-28 bg-[#000] flex flex-col items-center gap-16"
    >
      <div className="text-white">
        <Heading title="ENSUENO" background={"ENSUENO"} />
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          incidunt voluptate mollitia blanditiis ipsa, necessitatibus iste
          distinctio, illo deserunt esse temporibus. Incidunt cum eligendi
          dignissimos alias magni voluptate delectus quos! Sunt veritatis
          distinctio illo doloremque id placeat cumque aliquam inventore sed
          aut, sequi adipisci dolores ea molestiae reprehenderit consequatur
          provident minima repellat.
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
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={image1} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="branding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="branding" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Branding2;

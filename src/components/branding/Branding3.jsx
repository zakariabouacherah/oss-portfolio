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
import image1 from "../../assets/branding3/br01.jpg";
import image2 from "../../assets/branding3/br02.jpg";
import image3 from "../../assets/branding3/br03.jpg";
import image4 from "../../assets/branding3/br04.jpg";
import image5 from "../../assets/branding3/br05.jpg";
import image6 from "../../assets/branding3/br06.jpg";

const Branding3 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      // style={{ padding: "120px 8rem" }}
      className="min-h-screen w-screen px-6 py-36 lg:px-28 bg-[#000] flex flex-col items-center gap-16"
    >
      <div className="text-white">
        <Heading title="RCI" background={"COTRALOG"} />
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
      </Swiper>
    </div>
  );
};

export default Branding3;

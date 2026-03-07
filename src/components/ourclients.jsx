import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import CT from "../logos/CT.jpg";
import DPS from "../logos/DPS.jpg";
import ED from "../logos/ED.png";
import GE from "../logos/GE.png";
import GreenElephant from "../logos/Green elephant.jpg";
import Hokuto from "../logos/Hokuto.jpg";
import K12 from "../logos/K12.png";
import Kaivalya from "../logos/Kaivalya.png";
import KES from "../logos/KES.jpg";
import KIS from "../logos/KIS.png";
import Lions from "../logos/Lions.png";
import MalgheElectricals from "../logos/Malghe Electricals.png";
import Orchids from "../logos/Orchids.jpg";
import KSEPL from "../logos/SEPL.png";
import Swami from "../logos/Swami.png";
import VE from "../logos/VE.jpg";
import UTM from "../logos/utm.png";

import "./ourclients.css";

const logos = [
  CT, DPS, ED, GE, GreenElephant, Hokuto,
  K12, Kaivalya, KES, KIS, Lions,
  MalgheElectricals, Orchids, KSEPL,
  Swami, VE, UTM
];

const ClientLogos = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-heading">Trusted By Our Clients</h2>

        <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={6}
  loop={true}
  speed={2000}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  navigation={true}
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-box">
                <img src={logo} alt={`client-logo-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
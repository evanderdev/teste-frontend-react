import React from "react";
import Slider from "react-slick";

import Banner from "../../assets/imgs/banner.jpg";
import BannerMobile from "../../assets/imgs/banner-mobile.jpg";

import "./styles.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideBanner: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-content">
      <Slider {...settings}>
        <div className="banner">
          <span className="banner__text">
            Olá, o que você está buscando?
            <br />
            <strong>Criar ou migrar seu e-commerce?</strong>
          </span>
          <img className="desktop" src={Banner} alt="" />
          <img className="mobile" src={BannerMobile} alt="" />
        </div>
        <div className="banner">
          <span className="banner__text">
            Olá, o que você está buscando?
            <br />
            <strong>Criar ou migrar seu e-commerce?</strong>
          </span>
          <img className="desktop" src={Banner} alt="" />
          <img className="mobile" src={BannerMobile} alt="" />
        </div>
        <div className="banner">
          <span className="banner__text">
            Olá, o que você está buscando?
            <br />
            <strong>Criar ou migrar seu e-commerce?</strong>
          </span>
          <img className="desktop" src={Banner} alt="" />
          <img className="mobile" src={BannerMobile} alt="" />
        </div>
        <div className="banner">
          <span className="banner__text">
            Olá, o que você está buscando?
            <br />
            <strong>Criar ou migrar seu e-commerce?</strong>
          </span>
          <img className="desktop" src={Banner} alt="" />
          <img className="mobile" src={BannerMobile} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SlideBanner;

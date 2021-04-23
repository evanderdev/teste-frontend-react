import React from "react";
import Slider from "react-slick";

import ProductCard from "../ProductCard/ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

import { useProduct } from "../../contexts/ProductsContext";

const Shelf: React.FC = () => {
  const { products } = useProduct();
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="shelf__container">
      <span className="shelf__title">Mais Vendidos</span>
      <Slider {...settings}>
        {products?.map((product: IProduct) => {
          return <ProductCard key={product.productId} product={product} />;
        })}
      </Slider>
    </div>
  );
};

export default Shelf;

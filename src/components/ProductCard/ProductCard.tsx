import React from "react";

import StarIcon from "../../assets/svgs/star.svg";
import StarFillIcon from "../../assets/svgs/star-fill.svg";

import BuyButton from "../BuyButton/BuyButton";

import "./styles.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard: React.FC = ({ product }: any) => {
  const parceledPrice =
    product.installments[0] &&
    (product.price / product.installments[0].quantity).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  function fillStars(starFillQtn: number) {
    const html = [];
    for (let i = 0; i < 5; i++) {
      if (i < starFillQtn) {
        html.push(<img key={i} src={StarFillIcon} alt="Review" />);
      } else {
        html.push(<img key={i} src={StarIcon} alt="Review" />);
      }
    }
    return html;
  }

  return (
    <div className="product__card">
      <div className="product__img">
        {product.listPrice && product.listPrice > product.price && (
          <div className="product__flags">
            <span className="flags">OFF</span>
          </div>
        )}
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="product__description">
        <div className="product__info">
          <span className="product__name">{product.productName}</span>
          <div className="product__review">{fillStars(product.stars)}</div>
        </div>
        <div className="product__price-content">
          {product.listPrice && (
            <span className="price-from">{`de R$ ${product.listPrice}`}</span>
          )}
          <span className="price-to">{`por R$ ${product.price}`}</span>
          {product.installments[0] && (
            <span className="price-parceled">{`ou em ${product.installments[0].quantity}x de ${parceledPrice}`}</span>
          )}
        </div>
        <BuyButton productId={product.productId} />
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";

import "./styles.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard: React.FC = ({ product }: any) => {
  const parceledPrice = product.installments.length
    ? (product.price / product.installments[0].quantity).toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )
    : "";

  return (
    <div className="product__card">
      <div className="product__img">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="product__info">
        <span className="product__name">{product.productName}</span>
        <div className="product__review">{product.stars}</div>
      </div>
      <div className="product__price-content">
        <span className="price-from">{product.price}</span>
        {product.installments.length && (
          <span className="price-parceled">{`ou em ${product.installments[0].quantity}x de R$${parceledPrice}`}</span>
        )}

        <button className="buy-btn"></button>
      </div>
    </div>
  );
};

export default ProductCard;

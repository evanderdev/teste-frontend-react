import React from "react";
import { useProduct } from "../../contexts/ProductsContext";
import { useOrderForm } from "../../contexts/OrderFormContext";

import "./styles.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BuyButton: React.FC = ({ productId }: any) => {
  const { products } = useProduct();
  const { orderForm, updateOrderForm } = useOrderForm();

  function AddToCart(e) {
    e.preventDefault();

    const productToCart = products.filter(
      (product) => product.productId == e.currentTarget.value
    );

    orderForm.push(...productToCart);
    updateOrderForm([...new Set(orderForm)]);

    const cartQuantity = sessionStorage.getItem("CartQuantity");

    if (orderForm.length > cartQuantity)
      sessionStorage.setItem("CartQuantity", orderForm.length);
  }

  return (
    <button
      className="buy-btn"
      id={productId}
      value={productId}
      onClick={(e) => AddToCart(e)}
    >
      Comprar
    </button>
  );
};
export default BuyButton;

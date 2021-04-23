import React from "react";
import "regenerator-runtime/runtime.js";
import { ProductProvider } from "../../contexts/ProductsContext";
import { OrderFormProvider } from "../../contexts/OrderFormContext";
import Header from "../../components/Header/Header";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Shelf from "../../components/Shelf/Shelf";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <ProductProvider>
      <OrderFormProvider>
        <Header />
        <SlideBanner />
        <Shelf />
        <Newsletter />
        <Footer />
      </OrderFormProvider>
    </ProductProvider>
  );
};

export default Home;

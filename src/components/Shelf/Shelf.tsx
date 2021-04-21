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
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<Slider {...settings}>
			{products?.map((product: IProduct) => {
				return <ProductCard key={product.productId} product={product} />;
			})}
		</Slider>
	);
};

export default Shelf;

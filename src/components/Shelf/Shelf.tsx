import React from "react";
import Slider from "react-slick";

import { useProduct } from "../../contexts/ProductsContext";

import ProductCard from "../ProductCard/ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const Shelf: React.FC = () => {
	const { products } = useProduct();
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{products &&
				products.map((product: IProduct) => {
					<ProductCard product={product} />;
				})}
		</Slider>
	);
};

export default Shelf;

import React from "react";
import "regenerator-runtime/runtime.js";
import { ProductProvider } from "../../contexts/ProductsContext";
import Header from "../../components/Header/Header";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Shelf from "../../components/Shelf/Shelf";

const Home: React.FC = () => {
	return (
		<>
			<ProductProvider>
				<Header />
				<SlideBanner />
				<Shelf />
			</ProductProvider>
		</>
	);
};

export default Home;

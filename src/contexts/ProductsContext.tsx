import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface IContext {
	products: IProduct | undefined;
}

const ProductContext = createContext<IContext>({} as IContext);
// eslint-disable-next-line
export const ProductProvider: React.FC = ({ children }) => {
	const [products, setProduct] = useState<IProduct | undefined>();

	useEffect(() => {
		async function getProducts() {
			try {
				const { data: products } = await axios.get(
					"https://corebiz-test.herokuapp.com/api/v1/products"
				);
				setProduct(products);
			} catch ({ message }) {
				console.log("deu ruim", message);
			}
		}
		getProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};
// eslint-disable-next-line
export const useProduct = () => {
	const context = useContext(ProductContext);
	return context;
};

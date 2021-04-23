import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
		</BrowserRouter>
	);
};

export default Routes;

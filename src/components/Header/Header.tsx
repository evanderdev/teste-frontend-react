import React from "react";
import Logo from "../../assets/svgs/logo.svg";
import SearchIcon from "../../assets/svgs/search-icon.svg";
import UserIcon from "../../assets/svgs/user-icon.svg";
import CartIcon from "../../assets/svgs/cart-icon.svg";
import MenuIcon from "../../assets/svgs/menu-mobile-icon.svg";

import "./styles.scss";

const Header: React.FC = () => {
	return (
		<div className="header__row">
			<div className="header__container">
				<div className="header__menu-mobile">
					<img src={MenuIcon} alt="Menu" />
				</div>
				<div className="header__logo">
					<img src={Logo} alt="Corebiz" />
				</div>
				<div className="header__search-box">
					<input
						type="text"
						className="search-box"
						placeholder="O que está procurando?"
					/>
					<button className="search-btn">
						<img src={SearchIcon} alt="Search" />
					</button>
				</div>
				<div className="header__actions">
					<div className="user-action">
						<img src={UserIcon} alt="User" />
						<span className="account">Minha conta</span>
					</div>
					<div className="header__mini-cart">
						<div className="cart">
							<img src={CartIcon} alt="Cart" />
							<span className="cart-count"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

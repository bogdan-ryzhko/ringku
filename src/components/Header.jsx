import React from "react";
import HeaderItems from "./HeaderItems";

const Header = ({items}) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<ul className="items__wrapper">
						{items.map(image => <HeaderItems items={image} key={image.id} />)}
					</ul>
					<div className="header-question">
						<img src="./images/header-img/header-questions.svg"/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;
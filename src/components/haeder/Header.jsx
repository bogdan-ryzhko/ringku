import React from "react";
import HeaderItems from "./HeaderItems";

const Header = ({ items }) => {
	function onOpenMenu() {
		const menu = document.querySelector('.aside-menu');
		menu.classList.toggle('active')
	}
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<ul className="items__wrapper">
						<li className="header-item__img">
							<button onClick={onOpenMenu} className="header__menu-btn">
								<img src="../images/header-img/menu-btn.svg" alt="Button open/close menu" />
							</button>
						</li>
						{items.map(image => <HeaderItems items={image} key={image.id} />)}
					</ul>
					<div className="header-question">
						<img src="../../images/header-img/header-questions.svg"/>
					</div>
				</div>
			</div>
		</header>
	)
}

export {Header};
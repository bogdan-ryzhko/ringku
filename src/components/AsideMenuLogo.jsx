import React from "react";

const AsideMenuLogo = () => {
	function handleButton() {
		const menu = document.querySelector('.aside-menu');
		menu.classList.toggle('active')
	}
	return (
		<div className="aside-logo__wrapper">
			<a href="#" className="logo__link">
				<img src="../images/aside-icons/logo.svg" alt="Logo" />
				Ringku
			</a>
			<button onClick={handleButton} className="aside-logo__btn-mobile">x</button>
			<button className="aside-logo__btn">
				<img src="../images/aside-icons/menu-btn.svg" alt="" />
			</button>
		</div>
	)
}

export default AsideMenuLogo;
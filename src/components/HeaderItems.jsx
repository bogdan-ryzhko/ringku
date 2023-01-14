import React from "react";

const HeaderItems = (items) => {
	return (
		<li className="header-item__img">
			<button className="header-item__btn">
				<img src={items.items.src} alt={items.items.alt} />
			</button>
		</li>
	)
}

export default HeaderItems;
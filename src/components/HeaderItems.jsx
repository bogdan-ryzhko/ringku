import React from "react";

const HeaderItems = (items) => {
	return (
		<li className="header-item__img">
			<img src={items.items.src} alt={items.items.alt} />
		</li>
	)
}

export default HeaderItems;
import React from "react";

const AsideMenuItem = ({menuList}) => {
	return (
		<li className="aside-menu__item">
			<a href={menuList.path} className="aside-menu__link">
				<img src="../images/aside-icons/aside-icon-msg.svg" alt="Icon message" />
				{menuList.menuItem}
			</a>
		</li>
	)
}

export default AsideMenuItem;
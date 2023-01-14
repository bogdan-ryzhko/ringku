import React from "react";
import AsideMenuItem from "./AsideMenuItem";

const AsideMenuList = (menuList) => {
	return (
		<ul className="aside-menu__list">
			{menuList.menuList.map(item => 
				<AsideMenuItem menuList={item} key={item.id} />
				)}
		</ul>
	)
}

export default AsideMenuList;
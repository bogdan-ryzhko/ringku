import React from "react";
import AsideMenuBottom from "./AsideMenuBottom";
import AsideMenuList from "./AsideMenuList";
import AsideMenuLogo from "./AsideMenuLogo";

const AsideMenu = ({menuList, userInfo}) => {
	console.log(userInfo)
	return (
		<aside className="aside-menu">
			<div className="aside-menu__inner">
				<div className="aside__item">
					<AsideMenuLogo />
					<AsideMenuList menuList={menuList} />
				</div>
				<div className="aside__item">
					<AsideMenuBottom userInfo={userInfo} />
				</div>
			</div>
		</aside>
	)
}

export default AsideMenu;
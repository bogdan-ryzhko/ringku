import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import AsideMenuBottom from "./AsideMenuBottom";
import AsideMenuList from "./AsideMenuList";
import AsideMenuLogo from "./AsideMenuLogo";

const AsideMenu = () => {
	const [asideItems, setAsideItems] = useState([
		{menuItem: 'My Wallet', path: '/my-wallet', id: 1},
		{menuItem: 'My Card', path: '/my-card', id: 2},
		{menuItem: 'Finance Chart', path: '/finance-chart', id: 3},
		{menuItem: 'Recent Transactions', path: '/recent-transactions', id: 4},
	]);

	const [userInfo, setUserInfo] = useState([
		{name: 'Adrian', lastName: 'Tra', avatar: '../../images/aside-icons/avatar.png', id: 1}
	]);

	return (
		<aside className="aside-menu">
			<div className="aside-menu__inner">
				<div className="aside__item">
					<AsideMenuLogo />
					<AsideMenuList menuList={asideItems} />
				</div>
				<div className="aside__item">
					<AsideMenuBottom userInfo={userInfo} />
				</div>
			</div>
		</aside>
	)
}

export {AsideMenu};
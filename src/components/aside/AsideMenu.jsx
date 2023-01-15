import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FinanceChart from "../financeChart/FinanceChart";
import MyCard from "../myCard/MyCard";
import MyWallet from "../myWallet/MyWallet";
import RecentTransactions from "../recentTransactions/RecentTransactions";
import AsideMenuBottom from "./AsideMenuBottom";
import AsideMenuList from "./AsideMenuList";
import AsideMenuLogo from "./AsideMenuLogo";

const AsideMenu = () => {
	const [asideItems, setAsideItems] = useState([
		{menuItem: 'My Wallet', path: '../myWallet/MyWallet', id: 1},
		{menuItem: 'My Card', path: '../myCard/MyCard', id: 2},
		{menuItem: 'Finance Chart', path: '../financeChart/FinanceChart', id: 3},
		{menuItem: 'Recent Transactions', path: '../recentTransactions/RecentTransactions', id: 4},
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
			<Routes>
				<Route path='../myWallet/MyWallet.jsx' element={<MyWallet/>}/>
				<Route path='./myCard/MyCard.jsx' element={<MyCard/>}/>
				<Route path='./financeChart/FinanceChart.jsx' element={<FinanceChart/>}/>
				<Route path='./recentTransactions/RecentTransactions.jsx' element={<RecentTransactions/>}/>
			</Routes> 
		</aside>
	)
}

export default AsideMenu;
import { React, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {AsideMenu} from './components/aside/AsideMenu';
import {Header} from './components/haeder/Header';
import {MyWallet} from './components/myWallet/MyWallet';
import {MyCard} from './components/myCard/MyCard';
import {FinanceChart} from './components/financeChart/FinanceChart';
import {RecentTransactions} from './components/recentTransactions/RecentTransactions';

import "./styles/main.scss";

function App() {
  const [headerItems, setHeaderItems] = useState([
		{src: '../../images/header-img/header-item-1.svg', alt: 'mobile-version', id: 1},
		{src: '../../images/header-img/header-item-2.svg', alt: 'expand to full screen', id: 2},
  ]);

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
    <>
      <div className="App">
        <AsideMenu />
        <Header items={headerItems} />
        <Routes>
          <Route path='/my-wallet' element={<MyWallet/>}/>
          <Route path='/my-card' element={<MyCard/>}/>
          <Route path='/finance-chart' element={<FinanceChart/>}/>
          <Route path='/recent-transactions' element={<RecentTransactions/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;

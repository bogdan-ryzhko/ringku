import { React, useState } from 'react';
import AsideMenu from './components/aside/AsideMenu';
import Header from './components/haeder/Header';
import MyWallet from './components/myWallet/MyWallet';
import MyCard from './components/myCard/MyCard';
import FinanceChart from './components/financeChart/FinanceChart';
import RecentTransactions from './components/recentTransactions/RecentTransactions';

import "./styles/main.scss";

function App() {
  const [headerItems, setHeaderItems] = useState([
		{src: '../../images/header-img/header-item-1.svg', alt: 'mobile-version', id: 1},
		{src: '../../images/header-img/header-item-2.svg', alt: 'expand to full screen', id: 2},
  ]);

  return (
    <div>
      <div className="App">
        <AsideMenu />
        <Header items={headerItems} />
        {/* <MyWallet/> */}
        {/* <MyCard/> */}
        {/* <FinanceChart /> */}
        <RecentTransactions/>
      </div>
    </div>
  )
}

export default App;

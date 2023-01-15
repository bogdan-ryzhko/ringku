import { useState } from 'react';
import MyCard from './components/myCard/MyCard';
import MyWallet from './components/myWallet/MyWallet';
import FinanceChart from './components/financeChart/FinanceChart';
import RecentTransactions from './components/recentTransactions/RecentTransactions';
import AsideMenu from './components/aside/AsideMenu';
import Header from './components/haeder/Header';

import "./styles/main.scss"

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
        <MyCard/>
      </div>
    </div>
  )
}

export default App;

import { React, useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {AsideMenu} from './components/aside/AsideMenu';
import {Header} from './components/haeder/Header';
import {MyWallet} from './components/myWallet/MyWallet';
import {MyCard} from './components/myCard/MyCard';
import {FinanceChart} from './components/financeChart/FinanceChart';
import { RecentTransactions } from './components/recentTransactions/RecentTransactions';
import headerImages from "./dynamic-data/header/header-items.json";

import "./styles/main.scss";

function App() {
  const [headerItems, setHeaderItems] = useState(headerImages);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=USD")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
      <div className="App">
        <AsideMenu  />
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

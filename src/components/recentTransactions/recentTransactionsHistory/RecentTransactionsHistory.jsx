import React, { useState } from "react";
import TransactionsHistoryItemMobile from "./TransactionsHistoryItemMobile";

const RecentTransactionsHistory = () => {

	const [transactionsList, serTransactionsList] = useState([
		{id: 962296152, color: '#2B825C', name: 'Sherman Blankenship', date: '08 Jan, 2022', status: 'Pending', amount: 217.90},
		{id: 829892537, color: '#2B825C', name: 'Claudio Barrera', date: '06 Jan, 2022', status: 'Completed', amount: 329.90},
		{id: 741560657, color: '#D1493D', name: 'Clifton Daniel', date: '03 Jan, 2022', status: 'Completed', amount: 217.90},
		{id: 529040347, color: '#D1493D', name: 'Curt Boyer', date: '01 Jan, 2022', status: 'Completed', amount: 217.90},
		{id: 398078341, color: '#D1493D', name: 'Jeff Proctor', date: '31 Dec, 2021', status: 'Completed', amount: 217.90},
		{id: 197401837, color: '#2B825C', name: 'Rodger Fritz', date: '24 Dec, 2021', status: 'Completed', amount: 217.90},
	]);

	return (
		<section className="section__transactions-history">
			<ul className="transactions-history__list-mobile">
				{transactionsList.map(transaction =>
					<TransactionsHistoryItemMobile transactionsList={transaction} key={transaction.id} />)}
			</ul>
			<ul className="transactions-history__list-desctop"></ul>
		</section>
	)
}

export default RecentTransactionsHistory;
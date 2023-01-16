import React, { useState } from "react";
import TransactionsHistoryItemDesktop from "./TransactionsHistoryItemDesctop";
import TransactionsHistoryItemMobile from "./TransactionsHistoryItemMobile";
import TransactionsListNames from "./TransactionsListNames";

const RecentTransactionsHistory = () => {

	const [transactionsList, serTransactionsList] = useState([
		{id: 962296152, color: '#2B825C', name: 'Sherman Blankenship', date: '08 Jan, 2022', status: 'Pending', amount: 217.90},
		{id: 829892537, color: '#2B825C', name: 'Claudio Barrera', date: '06 Jan, 2022', status: 'Completed', amount: 329.90},
		{id: 741560657, color: '#D1493D', name: 'Clifton Daniel', date: '03 Jan, 2022', status: 'Completed', amount: 217.90},
		{id: 529040347, color: '#D1493D', name: 'Curt Boyer', date: '01 Jan, 2022', status: 'Completed', amount: 217.90},
		{id: 398078341, color: '#D1493D', name: 'Jeff Proctor', date: '31 Dec, 2021', status: 'Completed', amount: 217.90},
		{id: 197401837, color: '#2B825C', name: 'Rodger Fritz', date: '24 Dec, 2021', status: 'Completed', amount: 217.90},
	]);

	const [transactionNames, setTransactionNames] = useState([
		{name: 'Transactions ID', id: 1,},
		{name: 'Name', id: 2,},
		{name: 'Date', id: 3,},
		{name: 'Status', id: 4,},
		{name: 'Amount', id: 5,},
	])

	return (
		<section className="section__transactions-history">
			<ul className="transactions-history__list-mobile">
				<div className="container">
					{transactionsList.map(transaction =>
						<TransactionsHistoryItemMobile transactionsList={transaction} key={transaction.id} />)}
				</div>
			</ul>
			<ul className="transactions-history__list-desktop">
				<div className="transactions-history__list-names">
					<div className="container">
						<ul className="transactions-history__list-wrapper">
							{transactionNames.map(transactionName =>
								<TransactionsListNames transactionNames={transactionName} key={transactionName.id} />)}
						</ul>
					</div>
				</div>
				<div className="container">
					<ul className="transactions-history__list-desktop">
						{transactionsList.map(transaction =>
							<TransactionsHistoryItemDesktop transactionsList={transaction} key={transaction.id} />)}
					</ul>
				</div>
			</ul>
			<div className="container">
				<button className="transactions-history__download">
					Download the Excel File
				</button>
			</div>
		</section>
	)
}

export default RecentTransactionsHistory;
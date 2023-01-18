import React, { useState } from "react";
import TransactionsHistoryItemDesktop from "./TransactionsHistoryItemDesctop";
import TransactionsHistoryItemMobile from "./TransactionsHistoryItemMobile";
import TransactionsListNames from "./TransactionsListNames";
import transactionsItems from "../../../dynamic-data/recent-transactions/transactions-list.json";
import transactionsTitles from "../../../dynamic-data/recent-transactions/transactions-names.json";

const RecentTransactionsHistory = () => {
	const [transactionsList, serTransactionsList] = useState(transactionsItems);
	const [transactionNames, setTransactionNames] = useState(transactionsTitles);

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
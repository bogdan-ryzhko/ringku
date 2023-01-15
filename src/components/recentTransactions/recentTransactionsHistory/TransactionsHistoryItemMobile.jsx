import React from "react";

const TransactionsHistoryItemMobile = ({transactionsList}) => {
	return (
		<li className="transsctions-history__item-mobile">
			<div className="transsctions-history__item-wrapper">
				<p className="transaction-name">{transactionsList.name}</p>
				<p className="transaction-date">{transactionsList.date}</p>
			</div>
			<div className="transsctions-history__item-wrapper">
				<p className="transaction-date">{transactionsList.status}</p>
				<p className="transaction-name">{transactionsList.id}</p>
			</div>
			<div className="transsctions-history__item-wrapper">
				<p style={{color: `${transactionsList.color}`}} className="transaction-date">{transactionsList.amount}</p>
			</div>
		</li>
	)
}

export default TransactionsHistoryItemMobile;
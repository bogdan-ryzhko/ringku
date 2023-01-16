import React from "react";

const TransactionsHistoryItemDesktop = ({transactionsList}) => {
	return (
		<li className="transactions-history__item-des">
			<p className="transactions-id">{transactionsList.id}</p>
			<p className="transactions-name">{transactionsList.name}</p>
			<p className="transactions-date">{transactionsList.date}</p>
			<p className="transactions-status">{transactionsList.status}</p>
			<p style={{color: `${transactionsList.color}`}} className="transactions-amount">${transactionsList.amount}</p>
		</li>
	)
}

export default TransactionsHistoryItemDesktop;
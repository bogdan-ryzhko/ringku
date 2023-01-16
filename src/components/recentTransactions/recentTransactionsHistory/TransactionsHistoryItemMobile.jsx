import React from "react";

const TransactionsHistoryItemMobile = ({transactionsList}) => {
	return (
		<li className="transactions-history__item-mobile">
			<div className="transactions-history__item-wrapper">
				<p className="transactions-name__mobile">{transactionsList.name}</p>
				<p className="transactions-date__mobile">{transactionsList.date}</p>
			</div>
			<div className="transactions-history__item-wrapper">
				<p className="transactions-status">{transactionsList.status}</p>
				<p className="transactions-status">{transactionsList.status}</p>
			</div>
			<div className="transactions-history__item-wrapper">
				<p style={{color: `${transactionsList.color}`}} className="transactions-amount">${transactionsList.amount}</p>
			</div>
		</li>
	)
}

export default TransactionsHistoryItemMobile;
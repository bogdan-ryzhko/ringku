import React from "react";

const TransactionsListNames = ({transactionNames}) => {
	return (
		<li className="transaction-name">
			{transactionNames.name}
		</li>
	)
}

export default TransactionsListNames;
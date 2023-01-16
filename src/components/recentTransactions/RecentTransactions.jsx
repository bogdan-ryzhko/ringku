import React from "react";
import RecentTransactionsBody from "./RecentTransactionsBody/RecentTransactionsBody";
import RecentFooter from "./recentTransactionsHistory/RecentFooter";

const RecentTransactions = () => {
	return (
		<div>
			<RecentTransactionsBody/>
			<RecentFooter/>
		</div>
	)
}

export default RecentTransactions;
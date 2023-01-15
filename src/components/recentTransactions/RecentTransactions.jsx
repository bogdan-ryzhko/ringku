import React from "react";
import RecentHero from "./recentHero/RecentHero";
import RecentTransactionsHistory from "./recentTransactionsHistory/RecentTransactionsHistory";

const RecentTransactions = () => {
	return (
		<main className="page">
			<div className="container">
				<RecentHero />
				<RecentTransactionsHistory/>
			</div>
		</main>
	)
}

export default RecentTransactions;
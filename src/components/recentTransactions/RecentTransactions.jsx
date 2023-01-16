import React from "react";
import RecentHero from "./recentHero/RecentHero";
import RecentTransactionsHistory from "./recentTransactionsHistory/RecentTransactionsHistory";

const RecentTransactions = () => {
	return (
		<main className="page">
				<RecentHero />
				<RecentTransactionsHistory/>
		</main>
	)
}

export default RecentTransactions;
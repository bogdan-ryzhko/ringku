import React from "react";
import RecentHero from "../recentHero/RecentHero";
import RecentTransactionsHistory from "../recentTransactionsHistory/RecentTransactionsHistory";

const RecentTransactionsBody = () => {
	return (
		<main className="page">
			<RecentHero/>
			<RecentTransactionsHistory/>
		</main>
	)
}

export default RecentTransactionsBody;
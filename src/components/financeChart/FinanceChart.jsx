import React from "react";
import FinanceBanner from "./financeBanner/FinanceBanner";
import FinanceChartHero from "./financeChartHero/FinanceChartHero";
import FinanceIncome from "./financeIncome/FinanceIncome";

const FinanceChart = () => {
	return (
		<main className="page">
			<section className="finance__section">
				<div className="finance__inner">
					<FinanceChartHero />
					<FinanceBanner />
					<FinanceIncome />
				</div>
			</section>
		</main>
	)
}

export default FinanceChart;
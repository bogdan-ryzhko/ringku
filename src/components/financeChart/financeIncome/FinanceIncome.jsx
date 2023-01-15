import React from "react";
import FinanceIncomeBody from "./FinanceIncomeBody";
import FinanceInfoList from "./FinanceInfoList";

const FinanceIncome = () => {
	return (
		<section className="section section-incme">
			<div className="container">
				<div className="income__inner">
					<div className="income__inner-top">
						<h3 className="income__title">Statistic</h3>
						<ul className="income-info">
							<li className="income-info__item">
								<select name="shedule" className="income-info__list">
									<option value="income-chart">Income Chart</option>
								</select>
							</li>
							<li className="income-info__item">
								<select name="shedule" className="income-info__list">
									<option value="this-year">This Year</option>
								</select>
							</li>
						</ul>
					</div>
					<FinanceIncomeBody />
					<FinanceInfoList />
				</div>
			</div>
		</section>
		
	)
}

export default FinanceIncome;
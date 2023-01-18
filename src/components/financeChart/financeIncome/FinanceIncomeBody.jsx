import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";

import dataIncome from "../../../dynamic-data/finance-chart/data-income.json";
import dataIncomeOptions from "../../../dynamic-data/finance-chart/data-income-options.json";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
)

const FinanceIncomeBody = () => {
	const data = dataIncome;
	const options = dataIncomeOptions;

	return (
		<div className="finance-income__body">
			<Line
				data={data}
				options={options}
			></Line>
		</div>
	)
}

export default FinanceIncomeBody;
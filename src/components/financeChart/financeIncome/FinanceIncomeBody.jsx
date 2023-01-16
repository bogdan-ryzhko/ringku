import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
)

const FinanceIncomeBody = () => {
	// console.log(LineElement)
	const data = {
		labels: ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				data: [1000, 1600, 600, 2000, 2400, 1400, 2400, 900, 2950, 1100, 200, 1600, 2750],
				borderColor: '#4F46E5',
			}
		]
	}

	const options = {
		plugins: {
			legend: true
		},
		scales: {
			y: {
				min: 500,
				max: 3000
			}
		}
	}
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
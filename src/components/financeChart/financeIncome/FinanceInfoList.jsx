import React, { useState } from "react";
import FinanceInfoItem from "./FinanceInfoItem";

const FinanceInfoList = () => {
	const [financeItems, setFinanceItems] = useState([
		{srcIcon: "../../../images/finance-chart/finance-icon-1.png", financeItemName: "Lifetime Income", financeItemCash: 40.728, id: 1,},
		{srcIcon: "../../../images/finance-chart/finance-icon-2.png", financeItemName: "Lifetime Outcome", financeItemCash: 30.239, id: 2,},
		{srcIcon: "../../../images/finance-chart/finance-icon-3.png", financeItemName: "Bonus Income", financeItemCash: 2.490, id: 3,},
	]);

	return (
		<ul className="finance-info__list">
			{financeItems.map(item => <FinanceInfoItem financeItems={item} key={item.id} />)}
		</ul>
	)
}

export default FinanceInfoList;
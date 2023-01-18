import React, { useState } from "react";
import FinanceInfoItem from "./FinanceInfoItem";
import financeList from "../../../dynamic-data/finance-chart/finance-items.json";

const FinanceInfoList = () => {
	const [financeItems, setFinanceItems] = useState(financeList);

	return (
		<ul className="finance-info__list">
			{financeItems.map(item => <FinanceInfoItem financeItems={item} key={item.id} />)}
		</ul>
	)
}

export default FinanceInfoList;
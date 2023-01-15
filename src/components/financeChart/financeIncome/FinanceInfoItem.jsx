import React from "react";

const FinanceInfoItem = ({financeItems}) => {
	return (
		<li className="finance-info__item">
			<div className="finance-info__item-img">
				<img src={financeItems.srcIcon} alt={financeItems.financeItemName} />
			</div>
			<div className="finance-info__item-descr">
				<p className="finance-info__item-name">
					{financeItems.financeItemName}
				</p>
				<p className="finance-info__item-cash">
					{financeItems.financeItemCash}
				</p>
			</div>
		</li>
	)
}

export default FinanceInfoItem;
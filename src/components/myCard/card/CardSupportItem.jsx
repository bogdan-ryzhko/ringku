import React from "react";

const CardSupportItem = ({ supportList }) => {
	return (
		<li className="card-support__item">
			<p style={{borderLeft: `4px solid${supportList.color}`}} className="card-support__item-question">
				{supportList.question}
			</p>
			<button className="arrow-question">
				<img src="../../../images/card-img/arrow-question.svg" alt="button question" />
			</button>
			<p className="card-support__item-answer card-support__item-answer--hidden">
				{supportList.answer}
			</p>
		</li>
	)
}

export default CardSupportItem;
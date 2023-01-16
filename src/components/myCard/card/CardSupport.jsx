import React from "react";
import CardSupportItem from "./CardSupportItem";

const CardSupport = ({supportList}) => {
	return (
		<div className="card-support">
			<h2 className="card-support__title">
				See Our Help
			</h2>
			<button className="card-support__btn-more">
				<img src="../../../images/hero-img/info-dots.svg" alt="" className="card-support__dots" />
			</button>
			<ul className="card-support__list">
				{supportList.map(supportItem =>
					<CardSupportItem supportList={supportItem} key={supportItem.id} />)}
			</ul>
			<button className="card-more">
					Look More
				</button>
		</div>
	)
}

export default CardSupport;
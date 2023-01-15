import React from "react";
import CardSupportItem from "./CardSupportItem";

const CardSupport = ({supportList}) => {
	return (
		<div className="card-support">
			<h2 className="card-support__title">See Our Help</h2>
			<ul className="card-support__list">
				{supportList.map(supportItem =>
					<CardSupportItem supportList={supportItem} key={supportItem.id} />)}
				{/* <li className="card-support__item">
					<p className="card-support__item-question">
						Check Your Cash Flow
					</p>
					<button className="arrow-question">
						<img src="../../images/card-img/arrow-question.svg" alt="button question" />
					</button>
					<p className="card-support__item-answer card-support__item-answer--hidden">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</p>
				</li>
				<li className="card-support__item">
					<p className="card-support__item-question">
						Change Primary Card
					</p>
					<button className="arrow-question">
						<img src="../../images/card-img/arrow-question.svg" alt="button question" />
					</button>
					<p className="card-support__item-answer card-support__item-answer--hidden">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</p>
				</li>
				<li className="card-support__item">
					<p className="card-support__item-question">
						Pay Tax
					</p>
					<button className="arrow-question">
						<img src="../../images/card-img/arrow-question.svg" alt="button question" />
					</button>
					<p className="card-support__item-answer card-support__item-answer--hidden">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</p>
				</li>
				<li className="card-support__item">
					<p className="card-support__item-question">
						Make Invoice
					</p>
					<button className="arrow-question">
						<img src="../../images/card-img/arrow-question.svg" alt="button question" />
					</button>
					<p className="card-support__item-answer card-support__item-answer--hidden">
						Refer a Friend
					</p>
				</li>
				<li className="card-support__item">
					<p className="card-support__item-question">
						Check Your Cash Flow
					</p>
					<button className="arrow-question">
						<img src="../../images/card-img/arrow-question.svg" alt="button question" />
					</button>
					<p className="card-support__item-answer card-support__item-answer--hidden">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</p>
				</li> */}
			</ul>
			<button className="card-more">
					Look More
				</button>
		</div>
	)
}

export default CardSupport;
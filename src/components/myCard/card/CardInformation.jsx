import React, { useState } from "react";
import Card from "./Card";
import CardImage from "./CardImage";
import CardSupport from "./CardSupport";
import Personalize from "./Personalize";

const CardInformation = () => {
	const [cardList, setCardList] = useState([
		{ name: 'Primary Card', id: 1},
		{ name: 'Gold Card', id: 2},
	]);

	const [supportList, setSupportList] = useState([
		{question: 'Check Your Cash Flow', answer: 'lorem ipsum dolor'},
		{question: 'Change Primary Card', answer: 'lorem ipsum dolor'},
		{question: 'Pay Tax', answer: 'lorem ipsum dolor'},
		{question: 'Make Invoice', answer: 'lorem ipsum dolor'},
		{question: 'Refer a Friend', answer: 'lorem ipsum dolor'},
	]);

	return (
		<section className="section card__info">
			<div className="container">
				<div className="card-info__inner">
					<Card cardList={cardList} />
					<CardImage />
					<Personalize />
					<CardSupport supportList={supportList} />
				</div>
			</div>
		</section>
		
	)
}

export default CardInformation;
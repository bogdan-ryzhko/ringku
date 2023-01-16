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
		{color: '#F93939', question: 'Check Your Cash Flow', answer: 'lorem ipsum dolor', id: 1},
		{color: '#ED1865', question: 'Change Primary Card', answer: 'lorem ipsum dolor', id: 2},
		{color: '#6B19F1', question: 'Pay Tax', answer: 'lorem ipsum dolor', id: 3},
		{color: '#2236EE', question: 'Make Invoice', answer: 'lorem ipsum dolor', id: 4},
		{color: '#0D99C5', question: 'Refer a Friend', answer: 'lorem ipsum dolor', id: 5},
	]);

	return (
		<div className="section card__info">
			<div className="container">
				<div className="card-info__inner">
					<Card cardList={cardList} />
					<CardImage />
					<Personalize />
					<CardSupport supportList={supportList} />
				</div>
			</div>
		</div>
		
	)
}

export default CardInformation;
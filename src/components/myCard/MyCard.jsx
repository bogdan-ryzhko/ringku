import React, { useState } from "react";
import CardHero from "./cardHero/CardHero";
import Card from "./card/Card";

const MyCard = () => {

	const [cardList, setCardList] = useState([
		{ name: 'Primary Card', id: 1},
		{ name: 'Gold Card', id: 2},
	]);

	return (
		<main className="page">
			<CardHero />
			<Card cardList={cardList} />
		</main>
	)
}

export default MyCard;
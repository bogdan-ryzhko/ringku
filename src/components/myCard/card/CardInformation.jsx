import React, { useState } from "react";
import Card from "./Card";
import CardImage from "./CardImage";
import CardSupport from "./CardSupport";
import Personalize from "./Personalize";
import cardItems from "../../../dynamic-data/my-card-data/card-items.json";
import supportInfo from "../../../dynamic-data/my-card-data/support-list.json";

const CardInformation = () => {
	const [cardList, setCardList] = useState(cardItems);

	const [supportList, setSupportList] = useState(supportInfo);

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
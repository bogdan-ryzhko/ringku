import React, { useState } from "react";
import CardData from "./CardData";
import cardData from "../../../dynamic-data/my-card-data/card-data.json";

const CardImage = () => {
	const [userCardData, setUserCard] = useState(cardData);

	return (
		<div className="card-image">
			{userCardData
				.map(info => <CardData userCardData={info} key={info.id} />)}
		</div>
	)
}

export default CardImage;
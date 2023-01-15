import React from "react";
import OptionCard from "./OptionCard";

const Card = ({ cardList }) => {
	return (
		<div className="card-info__list">
			<select className="card__list" name="cards">
				{cardList.map(nameCard => <OptionCard cardList={nameCard} key={nameCard.id} />)}
			</select>
		</div>
	)
}

export default Card;
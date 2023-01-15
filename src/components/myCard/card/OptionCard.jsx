import React from "react";

const OptionCard = ({ cardList }) => {
	return (
		<option className="card__option">
			{cardList.name}
		</option>
	)
}

export default OptionCard;
import React, { useState } from "react";
import CardData from "./CardData";

const CardImage = () => {
	const [userCardData, setUserCard] = useState([
		{
			userName: 'Adrian Tra',
			classCard: 'Primary Card',
			cardImg: '../../../images/card-img/primary-card.png',
			paySystem: '../../../images/card-img/mastercard.svg',
			copyImg: '../../../images/card-img/copy-btn.svg',
			eyeImg: '../../../images/card-img/eye-btn.svg',
			cardNumber: '4889 9271 1937 1932',
			expiryDate: "12/28",
			cvv: 123,
			id: 1,
		},
		// {
		// 	userName: 'Adrian Tra',
		// 	classCard: 'Gold Card',
		// 	cardImg: '../../../images/card-img/gold-card.png',
		// 	paySystem: '../../../images/card-img/mastercard.svg',
		// 	copyImg: '../../../images/card-img/copy-btn.svg',
		// 	eyeImg: '../../../images/card-img/eye-btn.svg',
		// 	cardNumber: 4889927119371932,
		// 	expiryDate: "8/15",
		// 	cvv: 234,
		// 	id: 2,
		// }
	]);

	return (
		<div className="card-image">
			{userCardData
				.map(info => <CardData userCardData={info} key={info.id} />)}
		</div>
	)
}

export default CardImage;
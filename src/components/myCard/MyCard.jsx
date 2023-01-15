import React, { useState } from "react";
import CardHero from "./cardHero/CardHero";
import CardInformation from "./card/CardInformation";

const MyCard = () => {

	return (
		<main className="page">
			<CardHero />
			<CardInformation/>
		</main>
	)
}

export default MyCard;
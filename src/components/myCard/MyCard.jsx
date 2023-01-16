import React from "react";
import CardHero from "./cardHero/CardHero";
import CardInformation from "./card/CardInformation";

const MyCard = () => {

	return (
		<main className="page">
			<section className="card__section">
				<CardHero />
				<CardInformation/>
			</section>
		</main>
	)
}

export {MyCard};
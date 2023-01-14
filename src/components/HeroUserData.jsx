import React from "react";

const HeroUserData = ({props}) => {
	return (
		<li className="hero__item">
			<div className="greetings__wrapper">
				<div className="greetings__img">
					<img src="../images/hero-img/hero-hello.png" alt="" />
				</div>
				<h2 className="hero__name">Hi {props.name}!</h2>
				<div className="greetings__info-dots">
					<button className="greetings__info-btn">
						<img src="../images/hero-img/info-dots.svg" alt="" />
					</button>
				</div>
			</div>
			<p className="hero__amount-cash">${props.amountCash}</p>
		</li>
	)
}

export default HeroUserData;
import React from "react";

const HeroPayment = ({payment}) => {
	return (
		<li className="hero__item-payment">
			<button className="payment-btn">
				<img src={payment.src} alt={payment.description} />
			</button>
			<p className="hero__item-payment-descr">{payment.description}</p>
		</li>
	)
}

export default HeroPayment;
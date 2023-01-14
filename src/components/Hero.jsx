import React from "react";
import HeroPayment from "./HeroPayment";
import HeroUserData from "./HeroUserData";

const Hero = ({ props, payment } ) => {
	return (
		<section className="section hero__section">
			<div className="container">
				<div className="hero__inner">
					<h1 className="hero__title">My Wallet</h1>
					<p className="hero__subtitle">Keep track your financial plan</p>
					<ul className="hero__list">
						{props.map(prop => <HeroUserData props={prop} key={prop.id} />)}
						<div className="payment__wrapper">
							{payment.map(pay => <HeroPayment payment={pay} key={pay.id} />)}
						</div>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Hero;
import React from "react";

const FinanceBanner = () => {
	return (
		<section className="section finance-banner">
			<div className="container">
				<div className="banner__inner">
					<div className="banner-info__wrapper">
						<img src="../../../../images/finance-chart/banner-icon.svg" alt="" className="banner__image" />
						<p className="banner__descr">Please remember to fill that data that required for your debit card</p>
					</div>
					<button className="banner__btn">
						Got it
					</button>
				</div>
			</div>
		</section>
		
	)
}

export default FinanceBanner
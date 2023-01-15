import React from "react";

const RecentHero = () => {
	return (
		<section className="recent__section">
			<div className="recent__section-inner">
				<h1 className="hero__title">Recent Transactions</h1>
				<div className="recent-search">
						<input type="text" className="recent-search__input" placeholder="Search" />
						<button className="recent-search__btn">
							<img src="../../images/recent-transactions/search-icon.svg" alt="search button" />
						</button>
				</div>
			</div>
		</section>
	)
}

export default RecentHero;
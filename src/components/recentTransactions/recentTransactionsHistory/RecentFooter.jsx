import React, { useState } from "react";
import OptionPages from "./OptionPages";

const RecentFooter = () => {

	const [amountPages, setAmountPages] = useState([
		{count: 1, id: 1},
		{count: 2, id: 2},
		{count: 3, id: 3},
		{count: 4, id: 4},
		{count: 5, id: 5},
		{count: 6, id: 6},
		{count: 7, id: 7},
		{count: 8, id: 8},
		{count: 9, id: 9},
		{count: 10, id: 10},
	])
	return (
		<footer className="footer__recent">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__item">
						<p className="amount__page">Items per page:</p>
						<select name="pages" className="pages">
							{amountPages.map(option =>
								<OptionPages amountPages={option} key={option.id} />
							)}
						</select>
					</div>
					<div className="footer__item">
						<p className="page-number">
							1-10
						</p>
						<span>of</span>
						<p className="page-all-numbers">
							{amountPages.length}
						</p>
					</div>
					<div className="footer__item shake__wrapper">
						<button className="extra-shake__prev-btn center">
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
						</button>
						<button className="shake__prev-btn center">
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
						</button>
						<button className="shake__next-btn center">
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
						</button>
						<button className="extra-shake__next-btn center">
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
							<img src="../../../images/card-img/arrow-question.svg" alt="" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default RecentFooter;
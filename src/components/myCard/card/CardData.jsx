import React from "react";

const CardData = ({userCardData}) => {
	function showCVV() {
		const cvv = document.querySelector('.card-info__cvv');
		cvv.classList.toggle('visible');
		if (cvv.classList.contains('visible')) {
			cvv.textContent = userCardData.cvv;
		} else {
			cvv.textContent = '***';
		}

	}
	return (
		<div className="card-data__info">
			<div className="card-image__wrapper">
				<img className="card-data__pay-system" src={userCardData.paySystem} alt="pay system" />
				<img className="card-data__card-image" src={userCardData.cardImg} alt="user card" />
				<p className="user-name">{userCardData.userName}</p>
			</div>
			<h4 className="card__title">Card Information</h4>
			<ul className="card-info__list">
				<li className="card-info__item">
					<p className="card-info__descr">Card No.</p>
					<p className="card-info__descr">
						<button className="copy-btn">
							<img src={userCardData.copyImg} alt="copy btn" />
						</button>
						{userCardData.cardNumber}
					</p>
				</li>
				<li className="card-info__item">
					<p className="card-info__descr">Expiry date</p>
					<p className="card-info__descr">{userCardData.expiryDate}</p>
				</li>
				<li className="card-info__item">
					<p className="card-info__descr">CVV (3-digit security code)</p>
					<div>
						<button onClick={showCVV} className="eye-btn">
							<img src={userCardData.eyeImg} alt="copy btn" />
						</button>
						<p className="card-info__descr card-info__cvv">
							{'***'}
						</p>
					</div>
					
				</li>
			</ul>
		</div>
	)
}

export default CardData;
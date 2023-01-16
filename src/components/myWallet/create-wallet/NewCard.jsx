import React from "react";
import NewCardBody from "./NewCardBody";

const NewCard = () => {
	function onCloseModal() {
		const backdrop = document.querySelector('.backdrop');
		backdrop.classList.add('is-hidden');
	}

	function getInfoCard() {
		
	}
	return (
			<div className="backdrop is-hidden" data-modal="false">
				<div className="new-card">
					<div className="new-card__top">
						<h2 className="new-card__title">Add new your card</h2>
						<button onClick={onCloseModal} className="button__close-modal">
							<img src="../../../images/create-wallet/close-modal-btn.svg" alt="button close" />
						</button>
					</div>
					<NewCardBody />
					<button onClick={getInfoCard} className="add-new-card__button">Add New Card</button>
				</div>
			</div>
	)
}

export default NewCard;
import React from "react";
import NewCard from "./NewCard";

const CreateWallet = () => {
	function addNewCard() {
		const backdrop = document.querySelector('.backdrop');
		backdrop.classList.remove('is-hidden');
	}
	return (
		<section className=" section section__create-wallet">
			<div className="container">
				<div className="create-wallet__inner">
					<button onClick={addNewCard} className="create-wallet__btn">
						<img src="../images/create-wallet/create-wallet.svg" alt="" />
					</button>
					<p className="create-wallet__descr">Create New Wallet</p>
				</div>
			</div>
			<NewCard />
		</section>
	)
}

export default CreateWallet;
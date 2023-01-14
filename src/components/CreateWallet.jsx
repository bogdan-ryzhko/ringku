import React from "react";

const CreateWallet = () => {
	return (
		<section className=" section section__create-wallet">
			<div className="container">
				<div className="create-wallet__inner">
					<button className="create-wallet__btn">
						<img src="../images/create-wallet/create-wallet.svg" alt="" />
					</button>
					<p className="create-wallet__descr">Create New Wallet</p>
				</div>
			</div>
		</section>
	)
}

export default CreateWallet;
import React from "react";

const NewCardBody = () => {
	return (
		<div className="new-card__body">
			<div className="card-number">
				<input type="number" maxLength={16} className="card-number__input" id="1" />
			</div>
			<div className="card__footer">
				<input className="card-name" type="text" id="holder" />
				<div className="card-date">
					<input className="card-date__input" type="text" id="" />
					<span>/</span>
					<input className="card-date__input" type="text" id="" />
				</div>
			</div>
		</div>
	)
}

export default NewCardBody;
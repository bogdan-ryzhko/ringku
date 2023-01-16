import React from "react";

const OptionPages = ({ amountPages }) => {
	console.log(amountPages)
	return (
		<option value={amountPages.id}>
			{amountPages.count}
		</option>
	)
}

export default OptionPages;
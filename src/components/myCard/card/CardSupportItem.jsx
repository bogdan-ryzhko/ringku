import React from "react";

const CardSupportItem = ({ supportList }) => {
	function onAnswer() {
		const questions = document.querySelectorAll('.card-support__item');
		const answers = document.querySelectorAll('.card-support__item-answer');

		for (let i = 0; i < questions.length; i += 1) {
			if (answers[i].classList.contains('card-support__item-answer--hidden')) {
				questions[i].lastElementChild.classList.remove('card-support__item-answer--hidden');
				questions[i].lastElementChild.classList.add('card-support__item-answer--visible');
			} else if (answers[i].classList.contains('card-support__item-answer--visible')) {
				questions[i].lastElementChild.classList.add('card-support__item-answer--hidden');
				questions[i].lastElementChild.classList.remove('card-support__item-answer--visible');
			}
		}
	}
	return (
		<li onClick={onAnswer} className="card-support__item">
			<p style={{borderLeft: `4px solid${supportList.color}`}} className="card-support__item-question">
				{supportList.question}
			</p>
			<button className="arrow-question">
				<img src="../../../images/card-img/arrow-question.svg" alt="button question" />
			</button>
			<p className="card-support__item-answer card-support__item-answer--hidden">
				{supportList.answer}
			</p>
		</li>
	)
}

export default CardSupportItem;
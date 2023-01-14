import React from "react";

const TaskItem = (props) => {
  const percentCash = Math.round(props.props.countCash * 100 / props.props.maxCash);
	return (
		<li className="task__item">
        <div className="title__wrapper">
          <div className="title__wrapper-img">
              <img src={props.props.src} alt={props.props.description} />
          </div>
          <h3 className="task__item-title">{props.props.title}</h3>
        </div>
        <p className="task__item-descr">{props.props.description}</p>
        <div className="progress-bar__wrapper">
          <div className="wrapper-cash">
            <div>
            <p className="amount-cash">${props.props.countCash}</p>
              <p className="max-cash">/ ${props.props.maxCash}</p>
            </div>
            <p className="percent-cash">{percentCash}%</p>
        </div>
          <div className="progress__wrapper">
              <div style={{width: `${percentCash}%`}} className="progress__fill"></div>
          </div>
        </div>
    </li>
	);
};

export default TaskItem;
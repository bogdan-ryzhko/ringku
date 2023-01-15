import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks}) => {
	return (
		<section className="section section__task">
			<div className="container">
				<ul className="task__list">
				{tasks.map(task => 
					<TaskItem props={task} key={task.id} />
				)}
			</ul>
			</div>
		</section>
	)
}

export default TaskList;
export class Task {
	id: number;
	description: string;
}

const TASKS: Task[] = [
		{id:1, description:"Some Thing"},
		{id:2, description:"Other Thing"}
	];

import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/todo-list.html'
})

export class AppComponent { 

	title = "Todo List";

	public tasks = TASKS;
	public taskToEdit = {};

	selectedTask: Task;

	public constructor(){
		this.selectedTask = new Task();
	}

	showTaskDetail(task: Task){ 
		this.selectedTask = task;
		$('#modalShowTaskDetail').openModal();
	};

}
export class Task {
	done: boolean;
	description: string;
}

const TASKS: Task[] = [
		{done:false, description:"Some Thing"},
		{done:false, description:"Other Thing"}
	];

import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/todo-list.html'
})

export class AppComponent { 

	title = "Todo List";

	public tasks = TASKS;
	public taskToEdit:Task = new Task;
	public newTask:Task = new Task;

	selectedTask: Task;

	public constructor(){
		this.selectedTask = new Task();
	}

	showTaskDetail(task: Task){
		this.selectedTask = task;
	};


	addTask(){
		this.newTask.done = false;
		this.tasks.push(this.newTask);
		this.newTask = new Task;
	};

	doneTask(i:number){
		this.tasks[i].done = this.tasks[i].done ? false : true;
	}

	showTaskDoneFormated(done: boolean){
		return done ? "Yes":"Nope";
	}

}
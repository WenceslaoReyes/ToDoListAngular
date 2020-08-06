import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { ToDoListService } from './services/to-do-list-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-to-do-list';
  taskList: Task[];
  constructor(private service:ToDoListService)
  {
    this.taskList = service.taskList;
  }
  addNewTask(task:string){
    const newTask = new Task(task);
    this.service.addTask(newTask);
  }

  deleteTask(id: number)
  {
    if(id)
    {
      this.service.deleteTask(id);
      this.taskList = this.service.taskList;
    }
  }

  deleteAll()
  {
    this.service.deleteAll();
    this.taskList = this.service.taskList;
  }
}

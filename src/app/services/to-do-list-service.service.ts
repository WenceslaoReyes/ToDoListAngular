import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';



@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  taskList: Task[] = [];
  constructor() { 
    this.loadLocal();
  }

  addTask(task:Task)
  {
    this.taskList.push(task);
    this.saveChanges(this.taskList);
  }

  deleteAll()
  {
    this.taskList = [];
    this.saveChanges(this.taskList);
  }

  deleteTask(id:number)
  {
    const exist = this.taskList.find(task => task.id === id);
    if(exist){
      this.taskList = this.taskList.filter(task => task.id != id);
      this.saveChanges(this.taskList);
    }
  }

  saveChanges(list : Task[]){
    localStorage.setItem("data",JSON.stringify(list));
  }

  loadLocal()
  {
    if(localStorage.getItem("data"))
    {
      this.taskList = JSON.parse(localStorage.getItem("data"));
      console.log(this.taskList);
    }
  }


}

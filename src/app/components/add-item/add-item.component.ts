import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Task } from '../../models/Task.model';
import { ToDoListService } from '../../services/to-do-list-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit, OnChanges {

  @ViewChild("inputItem", {static:true, read: ElementRef}) input;
  @ViewChild("addButton", {static:true, read: ElementRef}) button;
  @Output() newTask : EventEmitter<string>;
  @Output() editTask : EventEmitter<Task>;
  @Input() editedTask : Task;
  constructor(private service: ToDoListService) {
    this.newTask = new EventEmitter<string>();
    this.editTask = new EventEmitter<Task>();
   }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.editedTask)
    {
      this.input.nativeElement.value = this.editedTask.name;
      this.button.nativeElement.innerHTML = "Editar";
    }
  }

  ngOnInit(): void {
  }

  add(task:string){
    if(this.button.nativeElement.innerHTML == "Editar")
    {
      if(task)
      {
        
        this.editedTask.name = task;
        this.editTask.emit(this.editedTask);
        this.input.nativeElement.value = "";
        this.button.nativeElement.innerHTML = "Agregar";
        this.service.saveChanges(this.service.taskList);
      }
    }
    else{
      if(task)
      {
        this.newTask.emit(task);
        this.input.nativeElement.value = "";
      }
    }
  }
}

import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ToDoListService } from '../../services/to-do-list-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @ViewChild("inputItem", {static:true, read: ElementRef}) input;
  // @ViewChild("addButton", {static:true, read: ElementRef}) button;
  @Output() newTask : EventEmitter<string>;
  // @Output() editTask : EventEmitter<Task>;
  // @Input() editedTask : Task;
  constructor(private service: ToDoListService) {
    this.newTask = new EventEmitter<string>();
    // this.editTask = new EventEmitter<Task>();
   }

  ngOnInit(): void {
  }

  add(task:string){
      if(task)
      {
        this.newTask.emit(task);
        this.input.nativeElement.value = "";
      }
  }
}

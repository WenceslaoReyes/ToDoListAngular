import { ITask } from './Itask.model';

export class Task implements ITask{
    id: Number;
    name: String;

    constructor(taskName:string){
        this.name = taskName;
        this.id = new Date().getMilliseconds();
    }
}
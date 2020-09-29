import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  count:number=3;
  tasks=['Bake for a while','submit assignment', 'paint for a while'];
  addTasks(newTask:string){
    if(newTask){
      this.tasks.push(newTask);
    }
  }
 
  incrementOnSubmit(){
    this.count++;
  }
  constructor() {
    
    
    
   }


  ngOnInit(): void {

  }


}
  



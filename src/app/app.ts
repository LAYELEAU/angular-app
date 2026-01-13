import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItem } from './add-item/add-item';
import { TodoList } from './todo-list/todo-list';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddItem, TodoList,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');

  todos :string[] =[];

  addTodo(newTodo: string){
    if(newTodo){
      this.todos.push(newTodo);
      console.log(this.todos);
    }
  }

  handleDeletedTodo(index :number){
    this.todos.splice(index, 1)
  }
}

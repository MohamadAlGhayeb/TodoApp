import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TodoProvider {
  private todos = [];

  constructor(public http: Http) {
    console.log("Hello TodoService Provider");
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  getTodoByValue(todoNeeded) {
    for (var todo of this.todos) {
      if (todo == todoNeeded) {
        return todo;
      }
    }
  }
  editTodo(todoNeeded, newValue) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i] == todoNeeded){
        this.todos[i] = newValue;
        break;
      }
    }
  }
}

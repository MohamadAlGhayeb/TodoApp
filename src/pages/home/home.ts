import { Component } from '@angular/core';

import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedTodoPage } from '../archived-todo/archived-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  public archivedTodoPage = ArchivedTodoPage;
  constructor(private toastController: ToastController, private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getTodos();
  }

   toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }
  onEditTodo(todo: any){
    let todoFound = this.todoProvider.getTodoByValue(todo);    
    let editTodoAlert = this.alertController.create({
      title: "Edit Todo",
      message: "Enter the New Todo Name",
      inputs:[{
        type: "text",
        name: "editTodoInput",
        value: todoFound
      }],
      buttons: [{
        text: "Cancel"
      },
      {
        text: "Edit Todo",
        handler: (inputData) =>{
          let todoText;
          todoText = inputData.editTodoInput;
          console.log(todoText);
          this.todoProvider.editTodo(todoFound,todoText);
          editTodoAlert.onDidDismiss(()=>{
            let toastForEditTodo = this.toastController.create({
              message: "Todo Modified Successfully",
              duration: 2000,
              // position: "middle",
              showCloseButton: true,
            });
            toastForEditTodo.present();
          });
        }
      }]
    });
    editTodoAlert.present();
  }
  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);
            addTodoAlert.onDidDismiss(()=>{
              let toastForAddTodo = this.toastController.create({
                message: "Todo Added ^_^",
                duration: 2000,
                // position: "middle",
                // showCloseButton: true,
              });
              toastForAddTodo.present();
            });
          }
        }
      ]
    });
    addTodoAlert.present();

  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedTodoPage } from './archived-todo';

@NgModule({
  declarations: [
    ArchivedTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedTodoPage),
  ],
})
export class ArchivedTodoPageModule {}

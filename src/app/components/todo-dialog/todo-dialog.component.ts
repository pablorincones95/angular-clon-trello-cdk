import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

interface inputData {
  todo: ToDo;
}

interface outputData {
  res: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss',
  imports: [BtnComponent, FontAwesomeModule],
})
export class TodoDialogComponent {
  // private dialogRef = Inject(DialogRef);

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<outputData>,
    @Inject(DIALOG_DATA) data: inputData,
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRes(res: boolean) {
    this.dialogRef.close({
      res,
    });
  }
}

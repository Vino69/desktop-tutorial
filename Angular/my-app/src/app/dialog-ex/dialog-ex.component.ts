import { Component } from '@angular/core';
import {MatDialogModule,MatDialogActions,MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ex',
  templateUrl: './dialog-ex.component.html',
  styleUrls: ['./dialog-ex.component.css']
})
export class DialogExComponent {

  constructor(public dialog: MatDialogModule) {}

}

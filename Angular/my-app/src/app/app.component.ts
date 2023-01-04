import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExComponent } from './dialog-ex/dialog-ex.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  opened= false; 
  constructor(public matdiaglog: MatDialog){}

  Openpop(){
    this.matdiaglog.open(DialogExComponent);

  

  }
}

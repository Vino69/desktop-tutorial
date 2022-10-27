import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent  {

  userprofile = new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    Age : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
  });

  onsubmit(){
    console.log(this.userprofile.value);
    //console.warn(this.userprofile.controls['firstname'].value);
  }
 
}

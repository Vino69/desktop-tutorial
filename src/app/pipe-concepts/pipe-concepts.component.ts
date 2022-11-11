import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-concepts',
  templateUrl: './pipe-concepts.component.html',
  styleUrls: ['./pipe-concepts.component.css']
})
export class PipeConceptsComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit(): void {
    
  }
  today = new Date();

  Name = 'HelloWorld';
  number = 9558.94756;
  rupee = 2000.37;

  Employee =[
    {Id:1, Name:"Apple"},
    {Id:2, Name:"Samsung"},
    {Id:3, Name:"Oppo"},
    {Id:4, Name:"Vivo"},
  ];
  
 
  
}


class demo {

  ram= "Success";
  seeta= "JoyLife";
}

const pt = new demo();
console.log(`${pt.ram}, ${pt.seeta}`);
console.log(pt.ram,pt.seeta);

class Gudways{
  ram : string;
  seeta: string;

  constructor(){
    this.ram = "Bold",
    this.seeta = "love"
  }
}

const gg = new Gudways();
console.log(gg.ram, gg.seeta);

//Methods

class func{
  x=11;
  y=12;

  scale(n:number): void{
    console.log(this.x *=n);
    console.log(this.y *=n);
  }
}




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

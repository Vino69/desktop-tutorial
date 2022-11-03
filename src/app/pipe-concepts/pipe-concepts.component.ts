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

}

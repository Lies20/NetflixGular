import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class inscriptionComponent implements OnInit { // 
  
  constructor() {
    
  }

  ngOnInit() {
    console.log( "Hello les bro");
  }

}

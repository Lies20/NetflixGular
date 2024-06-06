import { Component} from '@angular/core';
import { AuthService } from '../../services/service.service'


@Component({
  selector: 'app-inscription',
  standalone: true,
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class inscriptionComponent  { 
  
  constructor( public auth : AuthService) {
    
  }


}

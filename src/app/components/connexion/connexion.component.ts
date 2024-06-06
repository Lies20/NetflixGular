import { Component } from '@angular/core';
import { AuthService } from '../../services/service.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {


  value : any;

  constructor(public auth : AuthService, public http: HttpClient){
    this.http.get("https://api.chucknorris.io/jokes/random").pipe(
      map((x:any)=>x.value),
      tap((x)=>this.value=x)
    ).subscribe()
  }
  }

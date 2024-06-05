import { Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { inscriptionComponent } from './components/inscription/inscription.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    { path: 'inscription', component: inscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },]
    ;

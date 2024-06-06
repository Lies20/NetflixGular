import { Routes } from '@angular/router';
import { inscriptionComponent } from '../components/inscription/inscription.component';
import { ConnexionComponent } from '../components/connexion/connexion.component';
import { authGuard } from './auth.gard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    { path: 'inscription', component: inscriptionComponent },
    { path: 'connexion', component: ConnexionComponent},
];

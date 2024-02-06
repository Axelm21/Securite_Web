// login.component.ts

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: any = {};

  constructor(private apiService: ApiService) {}

  login(): void {
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        // Gérer la réponse de l'API après la connexion réussie
        console.log('Connexion réussie', response);
      },
      (error) => {
        // Gérer les erreurs lors de la connexion
        console.error('Erreur de connexion', error);
      }
    );
  }
}

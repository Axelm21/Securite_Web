// signup.component.ts

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: any = {};

  constructor(private apiService: ApiService) {}

  signup(): void {
    this.apiService.signup(this.user).subscribe(
      (response) => {
        // Gérer la réponse de l'API après l'inscription réussie
        console.log('Inscription réussie', response);
      },
      (error) => {
        // Gérer les erreurs lors de l'inscription
        console.error('Erreur d\'inscription', error);
      }
    );
  }
}

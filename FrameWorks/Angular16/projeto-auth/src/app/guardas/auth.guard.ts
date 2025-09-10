import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//implements da interface (classe abstrata)
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  // método obrigatório da classe canActivate
  canActivate(): boolean {
    if (this.authService.estaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

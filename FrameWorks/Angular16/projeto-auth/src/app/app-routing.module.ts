import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InternaComponent } from './pages/interna/interna.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "interna", component: InternaComponent, canActivate: [AuthGuard]},
  {path: "**", redirectTo: "/home"}
=======
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InternaComponent } from './componentes/interna/interna.component';
import { AuthGuard } from './guardas/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  //interceptação da rota pelo AuthGuard
  {path: "interna", component: InternaComponent, canActivate:[AuthGuard]},
  {path: "", redirectTo: "home"},
  {path: "**", redirectTo: "home"}
>>>>>>> f4b4c0f762f00df41e51caf9a21aae5b60ad5d77
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

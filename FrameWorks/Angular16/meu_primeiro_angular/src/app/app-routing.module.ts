import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "inicio", component: HomeComponent},
  {path: "produtos", component: ProductsComponent},
  {path: "contato", component: ContactComponent},
  {path: "formulario",component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

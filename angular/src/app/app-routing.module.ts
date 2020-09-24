import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConectionComponent } from './components/conection/conection.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'conection', component: ConectionComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'services', component: ServicesComponent },
  // { path: '', redirectTo: '/navbar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

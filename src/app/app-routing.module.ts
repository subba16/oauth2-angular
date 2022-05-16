import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import redirecturl from './constants/redirect';

const  redirectToURL = '';
const routes: Routes = [

  {path: 'home', component: HomeComponent, pathMatch: 'full' },
  {path: 'auth', component: AuthComponent, pathMatch: 'full'},
  {path: '', redirectTo:'auth',pathMatch: 'full'},
  {path: 'authorized', redirectTo:'auth',pathMatch: 'full'},
  {path: 'login', component: LoginComponent,pathMatch: 'full'},
  //  {path: 'login', redirectTo: redirecturl(),pathMatch: 'full'},

  {path: '**', redirectTo:'auth',pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

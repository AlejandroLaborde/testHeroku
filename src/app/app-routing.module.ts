import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const ROUTES: Routes =[
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'logIn', component: LoginComponent},
  {path: '**', component: ErrorComponent}
]
 
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

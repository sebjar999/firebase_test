import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }

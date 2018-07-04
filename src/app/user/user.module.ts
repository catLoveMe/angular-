import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  declarations: [
      UserComponent,
  ]
})
export class UserModule { }

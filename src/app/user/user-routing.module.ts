import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { 
      path: '', 
      component:UserComponent
  }

];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
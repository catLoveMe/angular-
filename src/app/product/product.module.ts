import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { TestRouteComponent } from './testRoute/testRoute.component';
import { RouterModule } from '@angular/router';
import {LoginGuard} from "../guard/login.guard";
import {UnSaveGuard} from "../guard/unSave.guard";
// import {ResolveGuard} from "../guard/resolve.guard";
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductComponent,ProDetailComponent,TestRouteComponent],
  providers:[
    LoginGuard,
    UnSaveGuard,
    // ResolveGuard
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { TestRouteComponent } from './testRoute/testRoute.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductComponent,ProDetailComponent,TestRouteComponent]
})
export class ProductModule { }

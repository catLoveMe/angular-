import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

//export导出改组件，其他文件才能访问 
@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }

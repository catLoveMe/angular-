import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

//export导出改组件，其他文件才能访问 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }

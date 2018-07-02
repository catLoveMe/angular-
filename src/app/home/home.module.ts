import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

// 在组件里面使用子组件时，只需要引入并声明declaration子组件,属于本module的组件和指令或者管道
// exports导出才能在其他模块下面进行访问
// imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
// providers —— 本模块向全局服务中贡献的那些服务的创建器。 
// bootstrap —— 应用的主视图，称为根组件
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
  ],
  declarations:[
    Tab1Component,
    Tab2Component
  ],
  exports:[   
  ]
  
})
export class HomeModule { }

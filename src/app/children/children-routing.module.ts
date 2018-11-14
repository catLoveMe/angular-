import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {ChildrenOneComponent} from "./children-one/children-one.component";
import {ChildrenTowComponent} from "./children-tow/children-tow.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
// 





/* const 常量，不能更改值，但在{}时，能更改值，是因为const指向的地址相同，当{}里面的属性更改时，地址没有更改，还是可以使用*/
//angular生命周期
const childrenRouters : Routes = [
  {
    path:'one',
    component:ChildrenOneComponent
  },
  {
    path:'tow',
    component:ChildrenTowComponent
  },

];



/*模块,由跟模块与各种特性模块构成,组件定义视图，使用服务,组件和服务都是简单的类，使用类的装饰器来标出其类型*/
@NgModule({
    imports:[
        RouterModule.forChild(childrenRouters),
        CommonModule,
        BrowserAnimationsModule

    ],
    declarations:[
      ChildrenTowComponent,
      ChildrenOneComponent,
    ],
    exports: [ RouterModule ]
})
//路由懒加载需要在app.modeule中引入commonModule，且主文件forRoot() 子文件forChild
export class ChildrenModule {

}

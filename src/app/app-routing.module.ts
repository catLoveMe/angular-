import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { Tab1Component } from "./home/tab1/tab1.component";
import { Tab2Component } from "./home/tab2/tab2.component";
import { ProDetailComponent } from "./product/pro-detail/pro-detail.component";
import { TestRouteComponent } from "./product/testRoute/testRoute.component";
/* const 常量，不能更改值，但在{}时，能更改值，是因为const指向的地址相同，当{}里面的属性更改时，地址没有更改，还是可以使用*/ 
const routes : Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'',
                redirectTo:'/tab1',
                pathMatch:'full'
            },
            {
                path:'tab1',
                component:Tab1Component,
            },
            {
                path:'tab2',
                component:Tab2Component
            }
        ]
    },
    {
        path:'product',
        component:ProductComponent,
        
    },
    {
        path:'detail/:id',
        component: ProDetailComponent
      },
      {
        path:'testRoute',
        component: TestRouteComponent
      }
]

/*模块,由跟模块与各种特性模块构成,组件定义视图，使用服务,组件和服务都是简单的类，使用类的装饰器来标出其类型*/
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRouter {
  
}
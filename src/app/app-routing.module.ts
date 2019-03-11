import { FaderAnimComponent } from './animations/fader-anim/fader-anim.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from "./product/product.component";
import { Tab1Component } from "./home/tab1/tab1.component";
import { Tab2Component } from "./home/tab2/tab2.component";
import { ProDetailComponent } from "./product/pro-detail/pro-detail.component";
import { TestRouteComponent } from "./product/testRoute/testRoute.component";
// import { BrowserModule } from "@angular/platform-browser";
import { ParamsComponent } from "./params/params.component";
import {ParamsDetailComponent} from "./params/params-detail/params-detail.component";
import {HomeComponent} from "./home/home.component";
import {LoginGuard} from "./guard/login.guard";
import {UnSaveGuard} from "./guard/unSave.guard";
import {BingdingComponent} from "./bingding/bingding.component";
import {BindComponent} from "./bind/bind.component";
import {FormComponent} from "./form/form.component";
import {LifeCycleComponent} from "./life-cycle/life-cycle.component";
import { CommonModule } from "@angular/common";
// import {ResolveGuard} from "./guard/resolve.guard";

/* const 常量，不能更改值，但在{}时，能更改值，是因为const指向的地址相同，当{}里面的属性更改时，地址没有更改，还是可以使用*/
//angular生命周期
const routes : Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'fade',
        component: FaderAnimComponent
    },
 
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'',
                redirectTo:'tab1',
                pathMatch:'full'
            },
            {
                path:'tab1',
                component:Tab1Component,
            },
            {
                path:'tab2',
                component:Tab2Component,
                outlet:'aux'
            }
        ]
    },
    {
      path: 'child',
      loadChildren: './children/children-routing.module#ChildrenModule',
    },
    {
        path:'product',
        component:ProductComponent,

        // canDeactivate:[UnSaveGuard],
        resolve:{
          // product:ResolveGuard
        }
    },
    {
        path:'detail/:id',
        component: ProDetailComponent,
      canActivate:[LoginGuard],
      },
      {
        path:'testRoute',
        component: TestRouteComponent
      },
      {
        path:'params',
        component: ParamsComponent,
      },
      {
        path:'paramsDetails/:item',
        component: ParamsDetailComponent,
      },
      {
        path:"bind",
        component:BingdingComponent,
      },
      {
        path:"obs",
        component:BindComponent,
      },
      {
        path:'form',
        component:FormComponent,
      },
      {
        path:'liveCycle',
        component:LifeCycleComponent,
      },
      {
        path:"**",
        component:HomeComponent,

      },




]

/*模块,由跟模块与各种特性模块构成,组件定义视图，使用服务,组件和服务都是简单的类，使用类的装饰器来标出其类型*/
@NgModule({
    imports:[
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [ RouterModule ]
})

export class AppRouter {

}

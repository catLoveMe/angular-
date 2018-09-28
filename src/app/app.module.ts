import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ParamsComponent } from './params/params.component';
import { AuthService } from './auth/auth.service';
import { ParChildComponent } from './params/par-child/par-child.component';
import { ParamsDetailComponent } from './params/params-detail/params-detail.component';
import { BingdingComponent } from './bingding/bingding.component';
import { ProOneComponent } from './DI/pro-one/pro-one.component';
import { ProTowComponent } from './DI/pro-tow/pro-tow.component';
import {ProductService} from "./DI/shared/product.service";
import {logger} from "codelyzer/util/logger";
import {LoggerService} from "./DI/shared/logger.service";
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MulitplePipe } from './pipe/mulitple.pipe';
import {FormComponent} from "./form/form.component";
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChangesComponent } from './life-cycle/changes/changes.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { OrderPipe } from './pipe/order.pipe';





@NgModule({
   declarations: [
      //可声明对象表，属于本模块的组件指令管道,管道跟组件一起要声明
      AppComponent,
      ParChildComponent,
      ParamsDetailComponent,
      BingdingComponent,
      ProOneComponent,
      ProTowComponent,
      BindComponent,
      MulitplePipe ,//注册管,
     LifeCycleComponent,
     ChangesComponent,
      HomeComponent,
      ParamsComponent,
     FormComponent,
     OrderPipe
   ],
   imports: [
      BrowserModule,
      AppRouter,
     CommonModule,
      HeaderModule,
      HomeModule,
      ProductModule,
      UserModule,
     FormsModule,
     ReactiveFormsModule//响应式编程的基础依赖包
   ],
   providers: [
       AuthService,
     {
       provide:ProductService,
       useFactory:(logger:LoggerService,env) => {
        if(env.isDev){
          return new ProductService(logger)
        }
       },
       deps:[LoggerService,'APP_CONTACT']//声明即将在useFactory中定义的参数
     },
     LoggerService,
     {
       provide:'APP_CONTACT',
       useValue:{isDev:false}
     }
   ],
   bootstrap: [
    AppComponent
 ]
   //本模块向全局贡献的服务的创建器\nbootstrap: [
      //主视图,
//       根组件，只有根模块才设置bootstrap\nAppComponent
//    ]
})
export class AppModule { }

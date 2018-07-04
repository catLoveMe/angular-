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



@NgModule({
   declarations: [
      //可声明对象表，属于本模块的组件指令管道\n
      AppComponent,
      HomeComponent,
      ParamsComponent
   ],
   imports: [
      BrowserModule,
      AppRouter,
      HeaderModule,
      HomeModule,
      ProductModule,
      UserModule
   ],
   providers: [
       AuthService
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

import { Component, OnInit,Output,ViewChild,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TestRouteComponent } from "./testRoute/testRoute.component";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[]
})
export class ProductComponent implements OnInit {
  arr:any = [
    {id:0,name:"张三"},
    {id:1,name:"李四"},
    {id:2,name:"王五"}
  ]
  mess:string = '';
  example:string = '父亲的实例';
  id:number = 100;
  @ViewChild(TestRouteComponent) child:TestRouteComponent
  constructor(
    private router:Router,
    public authService:AuthService
  ) { 
    setInterval(() => {
      this.authService.itemIndex++;
      this.authService.change.emit(this.id++)
    }, 1000);
    
  }

  ngOnInit():void {
    this.child.childCase = "来而不往非礼也,父亲篡改儿子的数据"
    console.log(this.child.childCase);
    
  }
  navigate(){
    // 使用queryParams传参,获取subscribt的querparams
    this.router.navigate(['testRoute'],{
      queryParams:{
        id:12
      }
    })
  }

  getChildIndex(info){
    // console.log(info);//0 1 2 
    this.mess = `儿子传过来的index${info}`
  }

}

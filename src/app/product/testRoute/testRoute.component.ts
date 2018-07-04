import { Component, OnInit,Input, Output,EventEmitter,Host,Inject,forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from "../product.component";//引入父组件
// import { EventEmitter } from 'protractor';
import { AuthService } from "../../auth/auth.service";

// forwardRef 使用构造注入时，使用尚未定义的依赖对象类型
// host宿主依赖
//Inject参数装饰器

@Component({
  selector: 'app-testRoute',
  templateUrl: './testRoute.component.html',
  styleUrls: ['./testRoute.component.css']
})
export class TestRouteComponent implements OnInit {
  @Input() content:any;//
  @Output() changeIndex:EventEmitter<number> = new EventEmitter();//EventEmitter只是一个帮你实现观察者模式对象,发射器
  params:any = '';
  index:number = 0;
  childCase:string = "儿子的实例"
  constructor(
    protected activatedRoute : ActivatedRoute,
    public authService:AuthService,
    @Host() @Inject(forwardRef(() => ProductComponent)) app: ProductComponent
  ) { 
    setInterval(()=>{
      this.changeIndex.emit(++this.index); //emit触发该事件
    },1000)
    app.example = "你好，儿子篡改一下父亲的数据"
    console.log(app.example)
    this.authService.change.subscribe((value:number)=>{
      // console.log(value,"==========value")
  })

  // console.log(this.authService.change,"change")
  }

  ngOnInit() {
    // 使用queryParams的传参
    this.activatedRoute.queryParams.subscribe((queryParams) =>{
      this.params = queryParams.id;
    })
  // console.log(this.content)
  }

}

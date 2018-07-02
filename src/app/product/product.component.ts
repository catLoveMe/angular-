import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arr:any = [
    {id:0,name:"张三"},
    {id:1,name:"李四"},
    {id:2,name:"王五"}
  ]
  constructor(
    private router:Router
  ) { }

  ngOnInit():void {
  }
  navigate(){
    // 使用queryParams传参,获取subscribt的querparams
    this.router.navigate(['testRoute'],{
      queryParams:{
        id:12
      }
    })
  }

}

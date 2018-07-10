import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-params-detail',
  templateUrl: './params-detail.component.html',
  styleUrls: ['./params-detail.component.css'],

})
export class ParamsDetailComponent implements OnInit {

  paramsFromFather:number = 0;
  constructor(
    private routerInfo : ActivatedRoute
  ) { }

  ngOnInit() {
    //snapShot路由快照，当在相同大路由上，携带参数更改是，不会监听其更改，只在Dom加载时，渲染一次
    console.log(this.routerInfo.snapshot.params["item"])//路由绑定参数获取参数,snapshot快照方式
    // subscribe参数订阅，订阅的方式会监听改参数的更改，在组件已经渲染的情况下，也会监听其更改，并更新
    this.routerInfo.params.subscribe((params: Params)=>{
      this.paramsFromFather=  params["item"]
    });
    console.log(this.routerInfo.snapshot.queryParams["Pid"])//使用queryParams Url地址栏携带参数
  }

}

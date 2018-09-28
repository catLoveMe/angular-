import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  //响应式编程 就是观察者模式的实现
  seachInout : FormControl = new FormControl();//formControl
  p1:number = 3.1415926;
  size:number = 7;
  tableData :Array<Object> = [];
  orderKey: string = 'one';
  constructor() {
    //observable 可观察者队形 以流的形式 ，表示一组或者事件的集合
    //观察者 Observer 一个回调函数集合 监听Observable发送的值 集合
    //操作符
    // /订阅，表示一个可观察对象，主要用于取消注册

    // Observable.from([1,2,3,4])//源头
    //   .filter(e => e%2 ==0 )
    //   .map(e => e*e)
    //   .subscribe(//订阅
    //     e => console.log(e),//流中的元素
    //     err => console.error(err),//容错处理机制
    //     () => console.log("结束了")//程序结束之后
    //   );
    //订阅seachInout 订阅参数
    // this.seachInout.valueChanges
    //.debounceTime(500)//延时保存
    //   .subscribe( stockCode => this.onkeyup(stockCode))

    this.tableData = [
        {one:1,tow:1,three:3},
        {one:4,tow:9,three:4},
        {one:2,tow:1,three:8},
        {one:8,tow:4,three:1},

    ]
  }

  ngOnInit() {

  }
  changeOrder(val){
      this.orderKey = val;
  }
  onkey(event){
    console.log(event.target.value)
  }
  onkeyup(value:string){
    console.log(value);
    //
    console.log(value, 'value')
  }

}

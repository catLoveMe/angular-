import { Component, OnInit,ElementRef, EventEmitter } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
})
export class ParamsComponent implements OnInit {

  arr: Array<object> = [];
  StopRoll :any;
  constructor(
    public el : ElementRef
  ) {
    this.arr = [
      {name: '产品1', imgsrc: 'assets/image/social/face1.jpg', rating: 2.5},
      {name:'产品2',imgsrc:'assets/image/social/face1.jpg',rating:3.5},
      {name:'产品3',imgsrc:'assets/image/social/face2.jpg',rating:4.5},
      {name:'产品4',imgsrc:'assets/image/social/face3.jpg',rating:1.5},
      {name:'产品5',imgsrc:'assets/image/social/face4.jpg',rating:2.5},
      {name:'产品6',imgsrc:'assets/image/social/face4.jpg',rating:0.5},
    ];
   }

  ngOnInit() {
    // setTimeout(() => {
    //     this.StopRoll = setInterval(this.scoll, 100)
    // }, 1000)
    // this.el.nativeElement.querySelector('#part2').onmouseover = ()=>{
    //     clearInterval(this.StopRoll);
    // }
    
  }
  scoll(){
      console.log(" in ")
    this.el.nativeElement.querySelector('#scroll2').innerHTML = this.el.nativeElement.querySelector('#scroll1').innerHTML;
    // offsetHeight 可以获取元素的可见高度值
    // scrollTop 方法返回或设置匹配元素的滚动条的垂直位置
    if (this.el.nativeElement.querySelector('#scroll2').offsetHeight - this.el.nativeElement.querySelector('#part2').scrollTop <= 0) {
        console.log(this.el.nativeElement.querySelector('#scroll2').offsetHeight)
        this.el.nativeElement.querySelector('#part2').scrollTop -= this.el.nativeElement.querySelector('#scroll1').offsetHeight;
    } else {
        console.log(this.el.nativeElement.querySelector('#part2').scrollTop)
        this.el.nativeElement.querySelector('#part2').scrollTop++;
        console.log(this.el.nativeElement.querySelector('#part2').scrollTop)
    }
  }

}

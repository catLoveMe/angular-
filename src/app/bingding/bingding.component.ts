import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingding',
  templateUrl: './bingding.component.html',
  styleUrls: ['./bingding.component.scss']
})
export class BingdingComponent implements OnInit {
 //constructor是angular依赖注入的唯一入口
  imgsrc:string = 'assets/image/social/face1.jpg';
  expression:boolean = false;
  exper: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  getInputVal(event):any{
    //绑定input的事件
    // console.log(event.target.value);
  }

}

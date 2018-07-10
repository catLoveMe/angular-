import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss'],
})
export class ParamsComponent implements OnInit {

  arr: Array<object> = [];
  constructor() {
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
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-par-child',
  templateUrl: './par-child.component.html',
  styleUrls: ['./par-child.component.css']
})
export class ParChildComponent implements OnInit {
 @Input()
 ratingChild:number = 0;
  constructor() { }

  ngOnInit() {
    // this.ratingChild =
    // console.log(this.ratingChild)//此时的ratingChild为父组件传过来的item.traing的每个值
  }

}

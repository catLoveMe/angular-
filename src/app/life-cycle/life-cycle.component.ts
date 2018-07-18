import {Component, DoCheck, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,DoCheck,OnChanges {
  @Output()
  userName:string = '张三';
  userPassword:string = '123456';
  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2))
  }


  constructor() { }

  ngOnInit() {
  }

}
export class QueryAccountMsg {
  constructor(
    public name:string,
    public password:string
  ){

  }
}

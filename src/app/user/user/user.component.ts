import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
//组件生命周期钩子函数，新建更新销毁 8个 Onchanges Init Docheck afterContentInit afterContentChecked afterViewInit初始化组件视图及其子视图之后调用 afterViewChecked每次做完组件视图和子视图的变更检测之后
//destory 销毁指令或组件调用
// ngOnChanges() 当angular设置数据绑定输入属性时，响应，首次调用在OnInit函数之前
//OnInit在Onchange首次调用之后
// DoCheck 在发生angulr的无法或自己不愿检测的变化时的反应 
  ngOnInit() {
  }

}

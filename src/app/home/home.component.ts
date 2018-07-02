import { Component, OnInit } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import {Tab1Component } from './tab1/tab1.component'
import {Tab2Component } from './tab2/tab2.component'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  params:string = '';
  constructor(
    protected activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {//生命周期钩子函数
    
  }
  
 
}

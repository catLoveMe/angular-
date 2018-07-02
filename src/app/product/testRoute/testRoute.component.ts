import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testRoute',
  templateUrl: './testRoute.component.html',
  styleUrls: ['./testRoute.component.css']
})
export class TestRouteComponent implements OnInit {
  params:any = '';
  constructor(
    protected activatedRoute : ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    // 使用queryParams的传参
    this.activatedRoute.queryParams.subscribe((queryParams) =>{
      this.params = queryParams.id;
    })
  
  }

}

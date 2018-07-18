import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnInit,OnChanges {

 @Input()
 userName:string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2))
  }

  ngOnInit() {
  }

}

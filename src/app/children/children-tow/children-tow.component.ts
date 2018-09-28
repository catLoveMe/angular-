import { Component, OnInit ,Input} from '@angular/core';



@Component({
  selector: 'app-children-tow',
  templateUrl: './children-tow.component.html',
  styleUrls: ['./children-tow.component.css']
})
export class ChildrenTowComponent implements OnInit {
    @Input() columns: any[];
    @Input() data: any[];
    @Input() sort: any;
    page:number = 1;
    pageSize:number = 10;
  constructor() { }

  ngOnInit() {
  }
  selectedClass(columnName): any {
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
}

changeSorting(columnName): void {
    var sort = this.sort;
    if (sort.column == columnName) {
        sort.descending = !sort.descending;
    } else {
        sort.column = columnName;
        sort.descending = false;
    }
}

convertSorting(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
}

}

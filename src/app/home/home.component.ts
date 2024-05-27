import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedRowData: any;
  allRowsSelected: boolean = false;

  columnsData = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'email', header: 'Email' },
  ];

  data = [
    { code: 'A1', name: 'John Doe', age: 30, email: 'john@example.com' },
    { code: 'A2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { code: 'A3', name: 'Sam Johnson', age: 40, email: 'sam@example.com' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onRowSelected(rowData: any) {
    this.selectedRowData = rowData;
    console.log('Selected Row Data:', this.selectedRowData);
  }

  onAllRowsSelected(allSelected: boolean) {
    this.allRowsSelected = allSelected;
    console.log('All Rows Selected:', this.allRowsSelected);
  }
}

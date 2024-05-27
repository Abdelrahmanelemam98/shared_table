import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columnsData: { key: string; header: string }[] = [];
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() allRowsSelected: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  selectedProducts: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onRowSelect(event: any) {
    this.rowSelected.emit(event);
  }

  selectAllRows() {
    console.log('Select All Rows method called');
    this.selectedProducts =
      this.selectedProducts.length === this.data.length ? [] : [...this.data];
    this.allRowsSelected.emit(
      this.selectedProducts.length === this.data.length
    );
    this.rowSelected.emit(this.selectedProducts);
  }
}

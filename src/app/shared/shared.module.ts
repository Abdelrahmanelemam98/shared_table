import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableModule, CheckboxModule],
  exports: [TableModule, CheckboxModule, TableComponent],
})
export class SharedModule {}

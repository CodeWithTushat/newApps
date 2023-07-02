import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponentComponent } from './collections-home-component/collections-home-component.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';


@NgModule({
  declarations: [
    CollectionsHomeComponentComponent,
    TableComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports:[
    
  ]
})
export class CollectionsModule { }

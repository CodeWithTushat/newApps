import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponentComponent } from './collections-home-component/collections-home-component.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [
    CollectionsHomeComponentComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
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

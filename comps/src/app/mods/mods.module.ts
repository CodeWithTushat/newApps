import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MODSRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MODSRoutingModule,
    SharedModule
  ]
})
export class MODSModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponentComponent } from './collections-home-component/collections-home-component.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }

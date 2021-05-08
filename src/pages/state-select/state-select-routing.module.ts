import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateSelectPage } from './state-select.page';

const routes: Routes = [
  {
    path: '',
    component: StateSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateSelectPageRoutingModule {}

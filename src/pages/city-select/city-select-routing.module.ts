import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitySelectPage } from './city-select.page';

const routes: Routes = [
  {
    path: '',
    component: CitySelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitySelectPageRoutingModule {}

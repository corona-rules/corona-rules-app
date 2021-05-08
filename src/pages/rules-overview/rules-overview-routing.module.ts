import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RulesOverviewPage } from './rules-overview.page';

const routes: Routes = [
  {
    path: '',
    component: RulesOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesOverviewPageRoutingModule {}

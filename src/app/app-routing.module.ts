import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CitySelectPageModule } from 'src/pages/city-select/city-select.module';
import { RulesOverviewPageModule } from 'src/pages/rules-overview/rules-overview.module';
import { StateSelectPageModule } from 'src/pages/state-select/state-select.module';
import { TabsPageModule } from './tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => TabsPageModule,
  },
  {
    path: 'state-select',
    loadChildren: () => StateSelectPageModule,
  },
  {
    path: 'city-select',
    loadChildren: () => CitySelectPageModule,
  },
  {
    path: 'rules-overview',
    loadChildren: () => RulesOverviewPageModule,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

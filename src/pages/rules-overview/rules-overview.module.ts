import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesOverviewPageRoutingModule } from './rules-overview-routing.module';

import { RulesOverviewPage } from './rules-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesOverviewPageRoutingModule
  ],
  declarations: [RulesOverviewPage]
})
export class RulesOverviewPageModule {}

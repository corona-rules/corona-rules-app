import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateSelectPageRoutingModule } from './state-select-routing.module';

import { StateSelectPage } from './state-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateSelectPageRoutingModule
  ],
  declarations: [StateSelectPage]
})
export class StateSelectPageModule {}

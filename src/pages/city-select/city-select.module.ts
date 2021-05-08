import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitySelectPageRoutingModule } from './city-select-routing.module';

import { CitySelectPage } from './city-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitySelectPageRoutingModule
  ],
  declarations: [CitySelectPage]
})
export class CitySelectPageModule {}

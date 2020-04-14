import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDecksPageRoutingModule } from './card-decks-routing.module';

import { CardDecksPage } from './card-decks.page';
import {HttpClientModule} from '@angular/common/http';
import {CardListComponent} from '../card-list/card-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDecksPageRoutingModule,
    HttpClientModule,    
  ],
  declarations: [CardDecksPage , CardListComponent]
})
export class CardDecksPageModule {}

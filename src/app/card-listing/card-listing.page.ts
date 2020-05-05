import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDeck, Card } from '../card/shared/card.model';
import {CardService} from '../card-service/card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  CardDeckGroup :string;
  CardDeck: string;
  public cards: Card[] = [];
  constructor(private activatedRoute :ActivatedRoute, private cardService: CardService) { }
  
  ionViewWillEnter() {
    this.CardDeckGroup = this.activatedRoute.snapshot.paramMap.get('cardDeckGroup')
    this.CardDeck = this.activatedRoute.snapshot.paramMap.get('cardDeck');
    this.cardService.getCardByDeck(this.CardDeckGroup, this.CardDeck).subscribe(
      (cards:Card[]) => {
        this.cards = cards;
      }
    )
  }
  

}

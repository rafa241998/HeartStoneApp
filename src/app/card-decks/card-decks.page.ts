import { Component, OnInit, ViewChildren } from '@angular/core';
import { CardDeck } from '../models/card-deck';
import {CardDeckComponent} from '../card-deck/card-deck.component'

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly mockupFile:string = "./assets/data/carddecks.json";

  @ViewChildren(CardDeckComponent) cardDeck: CardDeckComponent[];

  cardDecks: CardDeck[];
  wolfDeck: CardDeck;
  selectedCardDecks: string[]=[];

  constructor() { }
  
  ngOnInit() {
    this.getData();
    this.wolfDeck = new CardDeck();
    this.wolfDeck.cards = ["Wolf 1","Wolf 2"];
    this.wolfDeck.name = "Canis Lupus";
    this.wolfDeck.image = "Beast.png";
  }

  public getData(){
    fetch(this.mockupFile)
      .then(res => res.json())
        .then(json =>{
          this.cardDecks = json;
        });
  }

  select(name: string){
    var index = this.selectedCardDecks.indexOf(name);
    if (index === -1){
      this.selectedCardDecks.push(name);
    }else{
      this.selectedCardDecks.splice(index,1);
    }
  }

  ocultarMazos(){
    this.cardDeck.forEach(element => {
      element.ocultarMazo();
    });
    this.selectedCardDecks = [];
  }

}

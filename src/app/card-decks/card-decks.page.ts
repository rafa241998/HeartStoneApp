import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly cardDecks:string [] = ["Druid", "Mage", "Warrior", "Rogue", "Shaman"];
  
  constructor() { }

  ngOnInit() {
  }

}

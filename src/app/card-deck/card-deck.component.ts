import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardDeck } from '../models/card-deck';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {
  
  @Input() myCardDeck:CardDeck;
  @Output() clicked = new EventEmitter<string>();

  cards: string[];
  isClick: boolean = false;

  constructor() { }

  ngOnInit() {this.cards = []}

  click(){
    this.isClick =! this.isClick;
    this.clicked.emit(this.myCardDeck.name);
    if(this.isClick == true){
      this.cards = this.myCardDeck.cards;
    }else{
      this.cards = [];
    }
    
  }
  ocultarMazo(){
    this.cards = [];
    this.isClick = false;
  }
  addSuperWolf(){    
    if(this.cards.length > 0){
      this.cards = this.cards.concat("SuperWolf");  
    }
      
  }
  deleteSuperWolf(){   
    var index = this.cards.indexOf("SuperWolf"); 
    if (index !== -1){
      this.cards.splice(index,1);    
    }
    
  }

}

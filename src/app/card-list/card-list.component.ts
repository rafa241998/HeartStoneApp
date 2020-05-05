import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() listName: string;
  @Input() items: string[];
  @Input() navigateTo: any;
  constructor() { }

  ngOnInit() {}

  generateURL(group: string, deck: string){
    return "/start/tabs/cards/card-listing/" + group + "/" + deck;
  }

}

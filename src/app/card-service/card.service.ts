import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CardDeck, Card } from '../card/shared/card.model';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly HS_API_URL='https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  private readonly API_KEY='80a553c63emsh2c14528cce7625dp1b070ajsnbe8a37615643';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]>{
    return this.http.get<CardDeck[]>(
      this.HS_API_URL+'info',{headers: this.headers}
    );
  }
  public getCardByDeck(cardDeckGroup: string, cardDeck:string): Observable<Card[]>{
    return this.http.get<Card[]>(this.HS_API_URL+'/cards/'+cardDeckGroup+'/'+cardDeck,{headers: this.headers});
  }
}

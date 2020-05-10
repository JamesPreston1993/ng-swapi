import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://swapi.dev/api/people/';

  constructor(private _http: HttpClient) {}

  getCharacters() {
    return this._http.get<Character>(this.charactersUrl);
  }
}

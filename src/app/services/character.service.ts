import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { CharacterResponse } from '../models/CharacterResponse';

@Injectable({
   providedIn: 'root'
})
export class CharacterService {
   private charactersUrl = 'https://swapi.dev/api/people';

   constructor(private _http: HttpClient) {}

   getCharacters(page: number): Observable<CharacterResponse> {
      return this._http.get<CharacterResponse>(`${this.charactersUrl}?page=${page}`);
   }

   getCharacter(characterId: number): Observable<Character> {
      return this._http.get<Character>(`${this.charactersUrl}/${characterId}`);
   }
}

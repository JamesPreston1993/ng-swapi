import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterResponse } from '../models/CharacterResponse';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://swapi.dev/api/people/';

  constructor(private _http: HttpClient) {}

  getCharacters(page: number): Observable<CharacterResponse> {
    return this._http
      .get<CharacterResponse>(`${this.charactersUrl}?page=${page}`);
  }
}

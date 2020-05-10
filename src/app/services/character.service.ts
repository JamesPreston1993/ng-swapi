import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://swapi.dev/api/people/';

  constructor(private _http: HttpClient) {}

  getCharacters(page: number): Observable<Character[]> {
    return this._http
      .get<Character[]>(`${this.charactersUrl}?page=${page}`)
      .pipe(map((response) => response['results']));
  }
}

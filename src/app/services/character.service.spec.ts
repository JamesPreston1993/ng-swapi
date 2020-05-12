import { CharacterService } from './character.service';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/Character';
import { of } from 'rxjs';

describe('CharacterService', () => {
  describe('getCharacters', () => {
    let service: CharacterService;
    let mockHttpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
      mockHttpClient = jasmine.createSpyObj(['get']);
      service = new CharacterService(mockHttpClient);

      let characters: Character[] = [
        {
          name: 'FirstName LastName',
          birth_year: '10 BBY',
          hair_color: 'Black',
          skin_color: 'Fair',
          eye_color: 'Blue',
          gender: 'Male',
          height: 180,
          mass: 85,
        },
      ];

      mockHttpClient.get.and.returnValue(
        of({
          count: 1,
          previous: 'previousUrl',
          next: 'nextUrl',
          results: characters,
        })
      );
    });

    it('should call http client get', () => {
      // act
      service.getCharacters(1);

      // assert
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'https://swapi.dev/api/people?page=1'
      );
    });
  });

  describe('getCharacter', () => {
    let service: CharacterService;
    let mockHttpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
      mockHttpClient = jasmine.createSpyObj(['get']);
      service = new CharacterService(mockHttpClient);

      let character: Character = {
        name: 'FirstName LastName',
        birth_year: '10 BBY',
        hair_color: 'Black',
        skin_color: 'Fair',
        eye_color: 'Blue',
        gender: 'Male',
        height: 180,
        mass: 85,
      };

      mockHttpClient.get.and.returnValue(of(character));
    });

    it('should call http client get', () => {
      // act
      service.getCharacter(1);

      // assert
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'https://swapi.dev/api/people/1'
      );
    });
  });
});

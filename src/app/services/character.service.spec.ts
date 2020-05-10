import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from './character.service';

describe('CharacterService', () => {
  describe('getCharacters', () => {
    let service: CharacterService;

    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
      service = TestBed.inject(CharacterService);
    });

    it('should return list of characters', () => {
      // arrange

      // act
      const characters = service.getCharacters(1);

      // assert
      expect(characters).not.toBeNull;
    });
  });
});

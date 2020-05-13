import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { CharacterPageComponent } from './character-page.component';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';

describe('CharacterPageComponent', () => {
   let component: CharacterPageComponent;
   let fixture: ComponentFixture<CharacterPageComponent>;
   let character: Character;

   beforeEach(() => {
      character = {
         name: 'FirstName LastName',
         birth_year: '10 BBY',
         hair_color: 'Black',
         skin_color: 'Fair',
         eye_color: 'Blue',
         gender: 'Male',
         height: 180,
         mass: 85
      };

      TestBed.configureTestingModule({
         declarations: [CharacterPageComponent],
         providers: [
            {
               provide: ActivatedRoute,
               useValue: { snapshot: { paramMap: convertToParamMap({ characterId: 1 }) } }
            },
            {
               provide: CharacterService,
               useValue: { getCharacter: () => of(character) }
            }
         ]
      });

      fixture = TestBed.createComponent(CharacterPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should display loading spinner before calling the service', () => {
      component.isLoading = true;
      fixture.detectChanges();

      // assert
      const element = fixture.nativeElement.querySelector('.spinner-border');
      expect(element).not.toBeNull();
   });
});

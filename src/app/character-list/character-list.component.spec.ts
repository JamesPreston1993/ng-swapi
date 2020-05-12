import { ActivatedRoute } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('CharacterListComponent', () => {
   let component: CharacterListComponent;
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
         declarations: [CharacterListComponent],
         providers: [
            { provide: ActivatedRoute, useValue: { queryParams: of({ page: 2 }) } },
            {
               provide: CharacterService,
               useValue: { getCharacters: of([character]) }
            }
         ]
      });

      let fixture = TestBed.createComponent(CharacterListComponent);
      component = fixture.componentInstance;
   });

   describe('ngOnInit', () => {
      it('should set currentPage to page parameter in route', () => {
         // act
         component.ngOnInit();

         // arrange
         expect(component.currentPage).toBe(2);
      });

      it('should set currentPage to 1 when no parameter is in the route', () => {
         // arrange
         TestBed.get(ActivatedRoute).queryParams = of({ page: null });

         // act
         component.ngOnInit();

         // arrange
         expect(component.currentPage).toBe(1);
      });
   });

   describe('onDetailsClick', () => {
      it('should set selectedCharacter to provided character', () => {
         // arrange
         component.selectedCharacter = null;

         // act
         component.onDetailsClick(character);

         // assert
         expect(component.selectedCharacter).toBe(character);
      });

      it('should set isModalOpen to true', () => {
         // arrange
         component.isModalOpen = false;

         // act
         component.onDetailsClick(character);

         // assert
         expect(component.isModalOpen).toBe(true);
      });
   });

   describe('onModalClosed', () => {
      it('should set selectedCharacter to null', () => {
         // arrange
         component.selectedCharacter = character;

         // act
         component.onModalClosed();

         // assert
         expect(component.selectedCharacter).toBe(null);
      });

      it('should set isModalOpen to false', () => {
         // arrange
         component.isModalOpen = true;

         // act
         component.onModalClosed();

         // assert
         expect(component.isModalOpen).toBe(false);
      });
   });
});

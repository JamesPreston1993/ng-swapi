import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CharacterDetailsComponent } from './character-details.component';
import { Character } from '../models/Character';

describe('CharacterDetailsComponent', () => {
   let component: CharacterDetailsComponent;
   let fixture: ComponentFixture<CharacterDetailsComponent>;
   let character: Character;

   beforeEach(() => {
      character = {
         name: 'FirstName LastName',
         birth_year: '10 BBY',
         hair_color: 'black',
         skin_color: 'fair',
         eye_color: 'blue',
         gender: 'male',
         height: 180,
         mass: 85
      };

      TestBed.configureTestingModule({
         declarations: [CharacterDetailsComponent]
      });

      fixture = TestBed.createComponent(CharacterDetailsComponent);
      component = fixture.componentInstance;

      component.character = character;
      fixture.detectChanges();
   });

   it('should display character name', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-name');
      expect(element.textContent).toContain('FirstName LastName');
   });

   it('should display character birth year', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-birth-year');
      expect(element.textContent).toContain('10 BBY');
   });

   it('should display character gender in title case', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-gender');
      expect(element.textContent).toContain('Male');
   });

   it('should display character hair colour in title case', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-hair-colour');
      expect(element.textContent).toContain('Black');
   });

   it('should display character eye colour in title case', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-eye-colour');
      expect(element.textContent).toContain('Blue');
   });

   it('should display character skin colour in title case', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-skin-colour');
      expect(element.textContent).toContain('Fair');
   });

   it('should display character height followed by cm', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-height');
      expect(element.textContent).toContain('180 cm');
   });

   it('should display character mass followed by kg', () => {
      // assert
      const element = fixture.nativeElement.querySelector('.character-mass');
      expect(element.textContent).toContain('85 kg');
   });
});

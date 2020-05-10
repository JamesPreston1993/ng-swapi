import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService
      .getCharacters()
      .subscribe((response) => (this.characters = response));
  }
}

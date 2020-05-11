import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';
import { CharacterResponse } from '../models/CharacterResponse';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characterData: CharacterResponse;
  characters: Character[];
  currentPage = 1;

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService
      .getCharacters(this.currentPage)
      .subscribe((response) =>
      {
        this.characterData = response;
        this.characters = this.characterData.results;
      });
  }
}

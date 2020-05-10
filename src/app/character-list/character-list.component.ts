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
  currentPage = 1;

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this._characterService
      .getCharacters(this.currentPage)
      .subscribe((response) => (this.characters = response));
  }

  onNextPageClick() {
    if (this.characters.length === this._characterService.pageCount) {
      this.currentPage++;
      this.getCharacters();
    }
  }

  onPreviousPageClick() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }
}

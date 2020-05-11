import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';
import { CharacterResponse } from '../models/CharacterResponse';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characterData: CharacterResponse;
  characters: Character[];
  selectedCharacter: Character;
  isModalOpen: boolean = false;
  currentPage: number;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = +params.page || 1;
      this.isLoading = true;
      this._characterService
        .getCharacters(this.currentPage)
        .subscribe((response) => {
          this.characterData = response;
          this.characters = this.characterData.results;
          this.isLoading = false;
        });
    });
  }

  onDetailsClick(character) {
    this.selectedCharacter = character;
    this.isModalOpen = true;
  }

  onModalClosed() {
    this.isModalOpen = false;
    this.selectedCharacter = null;
  }
}

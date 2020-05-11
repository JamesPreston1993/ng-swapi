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
  currentPage: number;

  get previousPage(): number {
    return this.currentPage - 1;
  }

  get nextPage(): number {
    return this.currentPage + 1;
  }

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params.page || 1;
      this._characterService
        .getCharacters(this.currentPage)
        .subscribe((response) => {
          this.characterData = response;
          this.characters = this.characterData.results;
        });
    });
  }
}

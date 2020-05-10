import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  currentPage: number;

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.currentPage = parseInt(this.route.snapshot.paramMap.get('page'));
    console.log(this.currentPage);
    this._characterService
      .getCharacters(this.currentPage)
      .subscribe((response) => (this.characters = response));
  }
}

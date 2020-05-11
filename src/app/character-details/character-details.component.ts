import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/Character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const characterId = +this.route.snapshot.paramMap.get('characterId');

    this._characterService
      .getCharacter(characterId)
      .subscribe((response) => (this.character = response));
  }
}

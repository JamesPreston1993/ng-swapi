import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/Character';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  character: Character;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    const characterId = +this.route.snapshot.paramMap.get('characterId');

    this._characterService
      .getCharacter(characterId)
      .subscribe((response) => {
        this.character = response;
        this.isLoading = false;
      });
  }

}

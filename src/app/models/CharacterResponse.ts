import { Character } from './Character';

export interface CharacterResponse {
  count: number;
  previous: string;
  next: string;
  results: Character[]
}

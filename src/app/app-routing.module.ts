import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterPageComponent } from './character-page/character-page.component';

const routes: Routes = [
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:characterId', component: CharacterPageComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

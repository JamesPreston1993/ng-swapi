import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
   declarations: [
      AppComponent,
      CharacterListComponent,
      CharacterDetailsComponent,
      CharacterPageComponent,
      PageNotFoundComponent
   ],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}

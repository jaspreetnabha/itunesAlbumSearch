import { NgModule, Component, Injectable } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { SearchAlbumService } from './search-album.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [SearchAlbumService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

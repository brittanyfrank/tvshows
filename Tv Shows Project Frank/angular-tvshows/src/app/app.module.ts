import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTvshowComponent } from './components/add-tvshow/add-tvshow.component';
import { TvshowDetailsComponent } from './components/tvshow-details/tvshow-details.component';
import { TvshowListComponent } from './components/tvshow-list/tvshow-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTvshowComponent,
    TvshowDetailsComponent,
    TvshowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

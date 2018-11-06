import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MangaTypeListComponent } from './components/manga-type-list/manga-type-list.component';
import { MangaNameListComponent } from './components/manga-name-list/manga-name-list.component';
import { PopularMangaComponent } from './components/popular-manga/popular-manga.component';
import { FooterComponent } from './components/footer/footer.component';
import { MangaNavigationComponent } from './components/header/manga-nav/manga-nav.component';
import { GetMarketServices } from './services/get-market.service';
import { ConfigService } from './services/config.service';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MangaTypeListComponent,
    MangaNameListComponent,
    PopularMangaComponent,
    FooterComponent,
    MangaNavigationComponent,
    MangaDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConfigService,
    GetMarketServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { MangaTypeListComponent } from './components/manga-type-list/manga-type-list.component';
import { MangaNameListComponent } from './components/manga-name-list/manga-name-list.component';
import { PopularMangaComponent } from './components/popular-manga/popular-manga.component';
import { FooterComponent } from './components/footer/footer.component';
import { MangaNavigationComponent } from './components/header/manga-nav/manga-nav.component';
import { GetMangaListService } from './services/get-manga-list.service';
import { ConfigService } from './services/config.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MangaTypeListComponent,
    MangaNameListComponent,
    PopularMangaComponent,
    FooterComponent,
    MangaNavigationComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConfigService,
    GetMangaListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { GenreComponent } from './components/genre/genre.component';
import { MangaNameListComponent } from './components/manga-name-list/manga-name-list.component';
import { PopularMangaComponent } from './components/popular-manga/popular-manga.component';
import { FooterComponent } from './components/footer/footer.component';
import { MangaNavigationComponent } from './components/header/manga-nav/manga-nav.component';
import { GetMarketServices } from './services/get-market.service';
import { ConfigService } from './services/config.service';
import { MangaDetailComponent } from './components/manga-detail/manga-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatTabsModule, MatDatepickerModule, MatTooltipModule, MatTableModule, } from '@angular/material';
import { ChapterComponent } from './components/chapter/chapter.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    MangaNameListComponent,
    PopularMangaComponent,
    FooterComponent,
    MangaNavigationComponent,
    MangaDetailComponent,
    ChapterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatTableModule,
    PerfectScrollbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConfigService,
    GetMarketServices,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

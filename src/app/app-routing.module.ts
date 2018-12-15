import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MangaNameListComponent } from 'src/app/components/manga-name-list/manga-name-list.component';
import { MangaDetailComponent } from 'src/app/components/manga-detail/manga-detail.component';
import { ChapterComponent } from 'src/app/components/chapter/chapter.component';

 
const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MangaNameListComponent },
  { path: 'home/:page', component: MangaNameListComponent },
  { path: 'home/:page/:type', component: MangaNameListComponent },
  { path: 'detail/:id', component: MangaDetailComponent },
  { path: 'detail/:id/:chapter', component: MangaDetailComponent },
  // { path: 'chapter/:id', component: ReadChapComponent },

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    // RouterModule.forChild([
    //     {
    //       path: ':id', 
    //       component: MangaDetailComponent,
    //       children: [
    //         { path: ':chapter', component: ChapterComponent },
    //       ]
    //     }
    // ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
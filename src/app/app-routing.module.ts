import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MangaNameListComponent } from 'src/app/components/manga-name-list/manga-name-list.component';
import { MangaDetailComponent } from 'src/app/components/manga-detail/manga-detail.component';

 
const appRoutes: Routes = [

  { path: '', pathMatch: 'full', component: MangaNameListComponent },
  { path: 'detail/:id', component: MangaDetailComponent },

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
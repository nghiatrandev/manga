import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Constants } from '../share/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetMarketServices {

  totalCHapterListSource = new Subject<any>();
  totalChapterList$ = this.totalCHapterListSource.asObservable();
  mangaListSource = new Subject<any>();
  mangaList$ = this.mangaListSource.asObservable();
  currentGenreSource = new Subject<any>();
  currentGenre$ = this.currentGenreSource.asObservable();

  URL_MANGA_LIST = 'MangaList';
  URL_MANGA_DETAIL = 'MangaDetail';
  URL_CHAPTER = 'Chapter';
  URL_CATEGORIES = 'Categories';
  URL_SEARCH = 'Search';

  HeaderOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(
    private _config: ConfigService,
    private http: HttpClient,
  ) { }

  
          getMangaList(page: number=1, type?: string) {
            let url = this._config.getBaseUrl() + this.URL_MANGA_LIST;
            let body;

            if (type) {
              body = JSON.stringify({
                page : page,
                type : type
              });
            } else {
              body = JSON.stringify({
                page : page
              });
            }
            
            return this.http.post(url, body, this.HeaderOptions)
            .pipe(map((res: any) => {
              console.log(res)
              return res
            }));
        }
        
        getCategories() {
          let url = this._config.getBaseUrl() + this.URL_CATEGORIES;
          let body = JSON.stringify({
          });
          
          return this.http.post(url, body, this.HeaderOptions)
          .pipe(map((res: any) => {
            return res
          }));
        }
        
        
        getMangaDetail(id: number) {
          console.log(id)
          let url = this._config.getBaseUrl() + this.URL_MANGA_DETAIL;
          let body = JSON.stringify({
            id : id
          });

          // const getHeaders: HttpHeaders = new HttpHeaders({
          //   'Content-Type': 'application/json'
          // });
          
          return this.http.post(url, body, this.HeaderOptions)
          .pipe(map((res: any) => {
            // console.log(res)
            return res
          }));
        }

        
        getChapter(id: number, chapter: number){
          let url = this._config.getBaseUrl() + this.URL_CHAPTER;
          let body = JSON.stringify({
            id : id,
            chapter: chapter
          });
          
          return this.http.post(url, body, this.HeaderOptions)
          .pipe(map((res: any) => {
            // console.log(res)
            return res
          }));
        }

        search(keyWord: string){
          let url = this._config.getBaseUrl() + this.URL_SEARCH;
          let body = JSON.stringify({
            keyWord : keyWord
          });
          
          return this.http.post(url, body, this.HeaderOptions)
          .pipe(map((res: any) => {
              return res
          }));
        }

        setTotalChapterList(totalChapter) {
          this.totalCHapterListSource.next(totalChapter);
        }

        setMangaList(data: any) {
            this.mangaListSource.next(data);
        }

        setCurrentGenre(genre: string) {
          this.currentGenreSource.next(genre);
        }
}
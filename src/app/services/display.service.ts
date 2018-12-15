import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Constants } from '../share/constants';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

const COMICS_URL= '/comics';
const CATEGORIES_URL = '/comics/web_categories';


@Injectable({
  providedIn: 'root'
})
export class DisplayServices {

  // isDisplayReadChapterSource = new Subject<any>();
  // isDisplayReadChapter$ = this.isDisplayReadChapterSource.asObservable();

  isOnChapterScreenSource = new Subject<any>();
  isOnChapterScreen$ = this.isOnChapterScreenSource.asObservable();

  constructor(
    private _config: ConfigService,
    private http: HttpClient,
  ) { }

  // updateIsReadChapterScreen(isReadChapterScreen: boolean) {
  //   this.isDisplayReadChapterSource.next(isReadChapterScreen);
  // }

  updateIsOnChapterScreen(isOnChapterScreen: boolean){
      this.isOnChapterScreenSource.next(isOnChapterScreen);
  }

  checkIsOnChapterScreen(urlStr: string) {
    // debugger
    if(urlStr) {
        const count = (urlStr.match(/[\/]/g) || []).length;
        if(count == 1) return false;
        else if (count == 2) return true;
        else return false;
    } else {
      return false;
    }
}
  


}

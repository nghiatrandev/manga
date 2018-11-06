import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Constants } from '../share/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const COMICS_URL= '/comics';
const CATEGORIES_URL = '/comics/web_categories';


@Injectable({
  providedIn: 'root'
})
export class GetMarketServices {


  constructor(
    private _config: ConfigService,
    private http: HttpClient,
  ) { }


  getMangaList() {
      let url = this._config.getBaseUrl() + COMICS_URL;
      return this.http.get(url, {
        params: {
          sign: Constants.SIGN
        }
      }
    )
  }

  getCategories() {
    let url = this._config.getBaseUrl() + CATEGORIES_URL;
    return this.http.get(url, {
      params: {
        sign: Constants.SIGN
      }
    }
  )
}


  getDetail(id: number) {
    let url = this._config.getBaseUrl() + COMICS_URL + '/'+ id;
    return this.http.get(url, {
      params: {
        sign: Constants.SIGN
      }
    }
  )
}

}

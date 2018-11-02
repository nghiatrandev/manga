import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Constants } from '../share/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetMangaListService {



  constructor(
    private _config: ConfigService,
    private http: HttpClient,
  ) { }


  getMarket (){
      let url = this._config.getBaseUrl();

    //   return this.http.get(url, {
    //     params: {
    //       sign: Constants.SIGN_VALUE
    //     }
    //   }
    // ).pipe(map(res => {
    //     return res;
    // }))
      return this.http.get(url, {
        params: {
          sign: Constants.SIGN_VALUE
        }
      }
    ).pipe(map(res => {
        return res;
    }))


  }




}

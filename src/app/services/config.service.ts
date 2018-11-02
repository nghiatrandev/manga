import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  BASE_URL = 'http://api.acgmonster.com/comics';

  constructor() { }


  getBaseUrl() {
    return this.BASE_URL;
  }
}

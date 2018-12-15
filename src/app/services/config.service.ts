import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  BASE_URL = 'http://35.240.230.232:3000/';

  constructor() { }


  getBaseUrl() {
    return this.BASE_URL;
  }
}

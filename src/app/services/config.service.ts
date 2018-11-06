import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  BASE_URL = 'http://api.acgmonster.com';
  // BASE_URL = 'http://api.acgmonster.com/comics?sign=04d75e3819b4d539b5c928991371f446';

  constructor() { }


  getBaseUrl() {
    return this.BASE_URL;
  }
}

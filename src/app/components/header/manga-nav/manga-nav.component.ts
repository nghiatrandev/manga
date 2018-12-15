import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'manga-nav',
  templateUrl: './manga-nav.component.html',
  styleUrls: ['./manga-nav.component.css']
})
export class MangaNavigationComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goHome(){
    this._router.navigate(['/']); 
  }

}

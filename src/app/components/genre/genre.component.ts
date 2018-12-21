import { Component, OnInit } from '@angular/core';
import { GetMarketServices } from 'src/app/services/get-market.service';
import { Router } from '@angular/router';
import { DisplayServices } from 'src/app/services/display.service';

@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(
    private _getMangaListService: GetMarketServices,
    private _router: Router,
    private _displayServices: DisplayServices,
  ) { }
  
  // isOnChapterScreen: boolean;
  categoriesData: any;

  ngOnInit() {
    this._getMangaListService.getCategories().subscribe((data: any) => {
        this.categoriesData = data;
    });
  }

  changeGenre(genre: any) {
    console.log(genre)
    this._getMangaListService.setCurrentGenre(genre);
  }
}

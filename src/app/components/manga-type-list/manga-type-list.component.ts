import { Component, OnInit } from '@angular/core';
import { GetMarketServices } from 'src/app/services/get-market.service';

@Component({
  selector: 'manga-type-list',
  templateUrl: './manga-type-list.component.html',
  styleUrls: ['./manga-type-list.component.css']
})
export class MangaTypeListComponent implements OnInit {

  constructor(
    private _getMangaListService: GetMarketServices,
  ) { }

  categoriesData: any;

  ngOnInit() {

    this._getMangaListService.getCategories().subscribe((data: any) => {
        this.categoriesData = data;
        // for (let item of this.categoriesData) {
        //   console.log(item.name)
        // }
    });
  }
}

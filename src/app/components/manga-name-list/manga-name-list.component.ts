import { Component, OnInit } from '@angular/core';
import { GetMarketServices } from 'src/app/services/get-market.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'manga-name-list',
  templateUrl: './manga-name-list.component.html',
  styleUrls: ['./manga-name-list.component.css']
})
export class MangaNameListComponent implements OnInit {

  constructor(
    private _getMangaListService: GetMarketServices,
    private router: Router,
  ) { }

  mangaData: any;

  ngOnInit() {

    this._getMangaListService.getMangaList().subscribe((data: any) => {
        this.mangaData = data.entries;
        for (let mangaItem of this.mangaData) {
          mangaItem.lastUpdatedDate = moment(mangaItem.updated_date).format('DD/MM/YYYY');
        }
    });
  }


  goToMangaDetail(id:number) {
    this.router.navigate(['detail', id]); 
  }

}

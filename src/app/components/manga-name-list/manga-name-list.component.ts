import { Component, OnInit } from '@angular/core';
import { GetMangaListService } from 'src/app/services/get-manga-list.service';
@Component({
  selector: 'manga-name-list',
  templateUrl: './manga-name-list.component.html',
  styleUrls: ['./manga-name-list.component.css']
})
export class MangaNameListComponent implements OnInit {

  constructor(
    private _getMangaListService: GetMangaListService,
  ) { }

  listManga = [1,1,1,1,1,1]

  ngOnInit() {

    this._getMangaListService.getMarket().subscribe((data: any) => {
      console.log(data)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMarketServices } from 'src/app/services/get-market.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  mangaDetailData: any;

  constructor(
    private _route: ActivatedRoute,
    private _getMangaListService: GetMarketServices,
  ) {}

  ngOnInit() {
    this._route.params.subscribe( (id: any) => {
      // console.log(Number(id))
      // console.log(id.id)
      this._getMangaListService.getDetail(id.id).subscribe((data: any) => {
        this.mangaDetailData = data;
      });
    });
  }

}

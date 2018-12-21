import { Component, OnInit } from '@angular/core';
import { GetMarketServices } from 'src/app/services/get-market.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'manga-name-list',
  templateUrl: './manga-name-list.component.html',
  styleUrls: ['./manga-name-list.component.css']
})
export class MangaNameListComponent implements OnInit {

  currentPage: number;
  currentGenre: string = '';

  constructor(
    private _getMangaListService: GetMarketServices,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 

    console.log('Called Constructor');
    this._route.queryParams.subscribe(params => {
        console.log(params)
    });
  }

  mangaData: any;

  ngOnInit() {
    this._getMangaListService.currentGenre$.subscribe((data: any) => {
      console.log(data)
      if(this.currentGenre != data.name) {
        this.currentGenre = data.name;
        this.currentPage = 1;
      }

      this._router.navigate(['/home/'+this.currentPage+'/'+this.currentGenre]);
    })

    this._route.params.subscribe((urlData: any) => {
      console.log('QWERTYUIOSDFGHJKLVBHJK')
      if(urlData) {
        if(urlData.type) {
          this.currentPage = urlData.page;
          this.currentGenre = urlData.type;
          this.getMangaList(urlData.page, urlData.type);
        } else if (urlData.page){
          this.currentPage = urlData.page;
          this.getMangaList(urlData.page);
        } else {
          this._router.navigate(['/home/1']);
        }
      }
    });

  }


  goToMangaDetail(id:number) {
    this._router.navigate(['/detail', id]); 
  }

  changePage(type: string) {
    
      if(type == 'add') {
        this.currentPage=Number(this.currentPage)+1;
      } else if (type == 'sub') {
        this.currentPage=Number(this.currentPage)-1;
      }

      if(this.currentPage <= 0) {
        this.currentPage = 1;
        this._router.navigate(['/home/1']);
      } else {
        this._router.navigate(['/home/'+this.currentPage+'/'+this.currentGenre]);
      }
  }

  getMangaList(page: number, genre? : string) {
    if (page > 0) {
      this.currentPage = page;
      this._getMangaListService.getMangaList(this.currentPage, genre).subscribe((data: any) => {
        this.mangaData = data.entries;
        for (let mangaItem of this.mangaData) {
          mangaItem.lastUpdatedDate = moment(mangaItem.updated_date).format('DD/MM/YYYY');
        }
      });
    } else {
      this.currentPage = 1;
      this._router.navigate(['/home/'+this.currentPage]);
    }
  }



}

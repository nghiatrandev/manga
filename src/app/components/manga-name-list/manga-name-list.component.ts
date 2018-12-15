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
    // console.log('AAAAAAAAAAAAAAAAA')
    // this._getMangaListService.mangaList$.subscribe((data: any) => {
    //   this.mangaData = data.entries;
    // })

    this._route.params.subscribe((urlData: any) => {
      if(urlData) {
        console.log(urlData)
        if(urlData.type) {
          console.log('type');
          console.log(urlData.page+'   '+urlData.type)
          this.currentPage = urlData.page;
          this.currentGenre = urlData.type;
          console.log(this.currentPage)
          this.getMangaList(urlData.page, urlData.type);
        } else if (urlData.page){
          console.log('page')
          this.currentPage = urlData.page;
          console.log(this.currentPage)
          this.getMangaList(urlData.page);
        } else {
          console.log('nothing')
          this._router.navigate(['/home/1']);
        }
        // this.getMangaList(mangaId.type);
      }
    });

  }


  goToMangaDetail(id:number) {
    this._router.navigate(['/detail', id]); 
  }

  changePage(type: string) {
    console.log(this.currentPage)
    
      if(type == 'add') {
        this.currentPage=Number(this.currentPage)+1;
        console.log(this.currentPage)
      } else if (type == 'sub') {
        this.currentPage=Number(this.currentPage)-1;
        console.log(this.currentPage)
      }

      if(this.currentPage <= 0) {
        console.log('111111111111111')
        this.currentPage = 1;
        this._router.navigate(['/home/1']);
      } else {
        console.log('222222222222222222')
        this._router.navigate(['/home/'+this.currentPage+'/'+this.currentGenre]);
      }
  }

  getMangaList(page: number, typeName? : string) {
    if (page > 0) {
      this.currentPage = page;
      this._getMangaListService.getMangaList(this.currentPage, typeName).subscribe((data: any) => {
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

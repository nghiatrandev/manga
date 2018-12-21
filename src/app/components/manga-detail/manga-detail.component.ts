import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMarketServices } from 'src/app/services/get-market.service';
import { Router } from '@angular/router';
import { DisplayServices } from 'src/app/services/display.service';
import { UtilsServices } from 'src/app/services/utils.service';
import { Constants } from 'src/app/share/constants';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css'],
})
export class MangaDetailComponent implements OnInit {

  mangaDetailData: any;
  chapterList: any[];
  isOnChapterScreen: boolean;
  chapter: string;
  mangaId: number;
  currentDataUrl: any;
  

  constructor(
    private _route: ActivatedRoute,
    private _getMangaListService: GetMarketServices,
    private _router: Router,
    private _displayServices: DisplayServices,
  ) {}

  ngOnInit() {
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')
    this._router.events.subscribe((url:any) => {
        if(url.url) {
          this.isOnChapterScreen = this._displayServices.checkIsOnChapterScreen(url.url);
          this._displayServices.updateIsOnChapterScreen(this.isOnChapterScreen);
        }
    });
    
    // check first url
    this._route.params.subscribe((urlData: any) => {
      console.log(this.mangaId)
      console.log(urlData)
      console.log(urlData.id)
      console.log(this.currentDataUrl)
      this.currentDataUrl = urlData;
      if(urlData.id) {

        this.mangaId = urlData.id;
      }
      console.log(this.mangaId)

      console.log(this.currentDataUrl)
      if (urlData['chapter']) {
        this.chapter = urlData.chapter;
        this.checkIsOnChapterScreen(true);
      } else {
        this.chapter = undefined;
        this.checkIsOnChapterScreen(false);
      }
      this._getMangaListService.getMangaDetail(urlData.id).subscribe((data: any) => {
        this.mangaDetailData = data;
        console.log(this.mangaDetailData)
        
        this.chapterList = UtilsServices.sortBy(data.chapters,'index',Constants.SORT_ORDER_BY_DESC);
        setTimeout(() => {
          this._getMangaListService.setTotalChapterList(this.chapterList.length);
        },200);
      });
    });
  }

  goToChapter(chapter:any) {
    console.log(this.chapter)
    console.log(chapter)
    this._router.navigate(['/detail',this.mangaDetailData.id, chapter]); 
  }

  checkIsOnChapterScreen(isOnChapterScreen: boolean) {
    this.isOnChapterScreen = isOnChapterScreen;
        this._displayServices.updateIsOnChapterScreen(this.isOnChapterScreen);
  }



}

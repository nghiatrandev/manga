import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { GetMarketServices } from 'src/app/services/get-market.service';
import { Input } from '@angular/core';

@Component({
  selector: 'chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})


export class ChapterComponent implements OnInit {

  @Input() mangaId: any;
  @Input() chapter: number;
  // @Input() totalChapterList: number;
  chapterData: any;
  chapterList: any[] = [];
  // pages: any[];
  // totalChapterList : number;

  constructor(
    private _router: Router,
    private _getMangaListService: GetMarketServices,
  ) { }

  ngOnInit() {
    // console.log(this.totalChapterList)
    this._getMangaListService.totalChapterList$.subscribe((data: any) => {
      for (let i=1; i<=data; i++) {
        this.chapterList.push({
            value: i,
            name: 'Chapter - '+i
        });
      }
    })
      this.getChapterData();

  }

  changeChapter(chapterValue) {
      console.log(chapterValue)
      this.chapter = chapterValue;
      this._router.navigate(["/detail/"+this.mangaId+"/"+this.chapter]);
      this.getChapterData();
  }

  getChapterData() {
    this._getMangaListService.getChapter(this.mangaId, this.chapter).subscribe((data: any) => {
      this.chapterData = data;
    });
  }


}

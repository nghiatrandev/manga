import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayServices } from 'src/app/services/display.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  
  // isReadChapterScreen: boolean = false;
  title = 'manga';
  isOnChapterScreen: boolean = false;


  constructor(
    private _displayServices: DisplayServices,
    // private _router: Router,
  ) {

  }

  ngOnInit() {
    this._displayServices.isOnChapterScreen$.subscribe((data:any) => {
      if (this.isOnChapterScreen != data) {
          setTimeout(() => {
            this.isOnChapterScreen = data;
            console.log(this.isOnChapterScreen);
          },200);
      }
    })
  }


}

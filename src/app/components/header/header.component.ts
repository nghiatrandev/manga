import { Component, OnInit } from '@angular/core';
import { GetMarketServices } from 'src/app/services/get-market.service';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl = '';
  keyWord: string = '';

  constructor(
    private _getMangaListService: GetMarketServices,
    private _router: Router
  ) { }

  ngOnInit() {}

  search() {
    this._getMangaListService.search(this.keyWord).subscribe((data: any)=>{
        this._getMangaListService.setMangaList(data);
    });
  }

  goHome(){
    this._router.navigate(['/']); 
  }


}

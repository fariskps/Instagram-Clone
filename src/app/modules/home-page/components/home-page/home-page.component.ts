import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../home-page.service';
@Component({
  selector: 'insta-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dataFeeds: any = [];
  errorMessage: any;
  showFeeds: boolean = false;
  constructor(
    private _HomePageService: HomePageService
  ) {
    // getting home page feeds ========================
    this._HomePageService.getFeeds().subscribe({
      next: (data: any) => {
        this.dataFeeds = data.articles;
        this.errorMessage = '';
      },
      error: (e) => {
        this.errorMessage = e;
        this.showFeeds = false;
        console.log(this.errorMessage)
      },
      complete: () => {
        this.errorMessage = '';
        console.info('complete')
        this.showFeeds = true;
      }
    })
    // getting home page feeds ============================
  }

  ngOnInit() {

  }
}

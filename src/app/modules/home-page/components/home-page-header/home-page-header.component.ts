import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../../common-services/core.service';
@Component({
  selector: 'insta-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent implements OnInit {
  siteConfig: any = '';
  constructor(
    private _CoreService: CoreService
  ) { }

  ngOnInit(): void {
    this.siteConfig = this._CoreService.siteConfig ? this._CoreService.siteConfig : '';
  }

}

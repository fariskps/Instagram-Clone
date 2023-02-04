import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  activeTab: any = 'home';
  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value: any) {
    this.activeTab = value;
    console.log(this.activeTab, 'active tab')
  }
}

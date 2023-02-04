import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-feed-box',
  templateUrl: './feed-box.component.html',
  styleUrls: ['./feed-box.component.scss'],
  inputs:['feedItem'],
})
export class FeedBoxComponent implements OnInit {
 feedItem:any;
 showAll:boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  showMore(){
    this.showAll = true;
  }
}

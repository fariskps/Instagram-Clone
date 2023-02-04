import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-feed-image',
  templateUrl: './feed-image.component.html',
  styleUrls: ['./feed-image.component.scss'],
  inputs:['feedItem']
})
export class FeedImageComponent implements OnInit {
  feedItem:any;
  constructor() { }

  ngOnInit(): void {
  }

}

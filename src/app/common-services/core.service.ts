import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
 siteConfig:any = {
  logo:"/assets/core-img/logo.webp",
  name:"Instagram Clone"
 }

  constructor() { }
}

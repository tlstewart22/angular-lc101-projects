import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Better Photo Heading';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://volosoft.com/api/blogging/files/www/7c534470db65020c692139f5fde00ceb.png';
  image3 = 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520956952-chicken-tacos-horizontal.jpg?crop=0.798xw:0.622xh;0.0765xw,0.222xh&resize=980:*';

  constructor() { }

  ngOnInit() {
  }

}
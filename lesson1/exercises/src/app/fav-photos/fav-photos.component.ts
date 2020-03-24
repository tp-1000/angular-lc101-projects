import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Never before seen Jurassic Era photos';
  image1 = 'https://images.unsplash.com/photo-1507184915978-447ac6ab3ecb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
  image2 = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F03%2Fbaby-goat-farm-GOATS0320.jpg';
  image3 = 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F89162483%2F220021015018%2F1%2Foriginal.20200122-013138?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=10%2C0%2C660%2C330&s=7ea6008c1b05a6ed6781c80fd1b0a0bd';

  constructor() { }

  ngOnInit() {
  }

}
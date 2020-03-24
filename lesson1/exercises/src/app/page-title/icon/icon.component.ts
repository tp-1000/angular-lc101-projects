import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  constructor() { }
    icon = "https://media.giphy.com/media/tXLpxypfSXvUc/giphy.gif";
  ngOnInit() {
  }

}

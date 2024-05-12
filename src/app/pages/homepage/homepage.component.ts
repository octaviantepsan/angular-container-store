import { Component, OnInit } from '@angular/core';
import { ANUNT_LISTED } from '../../constants/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  index: number = 0;
  anunturi = ANUNT_LISTED;

  ngOnInit(): void {
    
  }

  changeTextSide(textId: number) {
    let side: string; 
    if (textId % 2 === 0) {
      side = "left";

      return side;
    }
    else {
      side = "right";
      
      return side;
    }
  }

  changeImageSide(imageId: number) {
    let side: string;
    
    if (imageId % 2 === 0) {
      side = "right";

      return side;
    }
    else {
      side = "left";
      
      return side;
    }
  }
}

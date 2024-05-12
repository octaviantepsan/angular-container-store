import { Component } from '@angular/core';
import { SECTIONS } from '../app/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularproject';
  sections = SECTIONS;
  isHomepageVisible: boolean = true;
  isProductsgridVisible: boolean = false;
  selectedSection: string | undefined;

  sendFilter(sectionName: string) {
    this.isHomepageVisible = false;
    this.isProductsgridVisible = true;
    this.selectedSection = sectionName;
  }

  returnToHomepage() {
    this.isHomepageVisible = true;
    this.isProductsgridVisible = false;
  }

  catchOutputValue($event: any) {
    console.log($event);
  }
}

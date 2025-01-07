import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images: string[] = ['/poert1.png', '/port2.png', '/port3.png', '/poert1.png', '/port2.png', '/port3.png'];

  isOpen = false;
  urlImage: string = '';

  openImage(image: string) {
    this.urlImage = image;
    this.isOpen = true;
  }

  closeImage() {
    this.isOpen = false;
  }
}

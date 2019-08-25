import { Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgZone } from '@angular/core';



@Component({
  selector: 'lw-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
 


export class CarouselComponent implements OnInit {


  constructor(config : NgbCarouselConfig,zone:NgZone) {
    config.showNavigationArrows = false;
    config.pauseOnHover = false;

   }
   

  ngOnInit() {
  }


}

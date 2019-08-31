import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../pictures.service';
import { Picture } from '../picture';

@Component({
  selector: 'lw-displaypic',
  templateUrl: './displaypic.component.html',
  styleUrls: ['./displaypic.component.css']
})
export class DisplaypicComponent implements OnInit {
   pictures : Picture[];
  constructor(private prictureService:PicturesService) { }

  ngOnInit() {
    this.getAllPictures();
  }
  getAllPictures() : void {
    this.prictureService.getPictrures().subscribe(pictures => this.pictures = pictures);

  }
  getPicturesByCategory(category:string) : void {
    this.prictureService.getPicturesByCateroy(category).subscribe(pictures => this.pictures = pictures);

  }
  

}

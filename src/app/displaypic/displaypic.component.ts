import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../pictures.service';
import { Picture } from '../picture';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'lw-displaypic',
  templateUrl: './displaypic.component.html',
  styleUrls: ['./displaypic.component.css']
})
export class DisplaypicComponent implements OnInit {
   pictures : Picture[];
   categoryFormFirst:string;
  constructor(private prictureService:PicturesService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    this.categoryFormFirst = params['category']
   });}

  ngOnInit() {
    if(this.categoryFormFirst ==null){
    this.getAllPictures();
  }
    else
    {
     this.getPicturesByCategory(this.categoryFormFirst);
    }
  }
  getAllPictures() : void {
    this.prictureService.getPictrures().subscribe(pictures => this.pictures = pictures);

  }
  getPicturesByCategory(category:string) : void {
    this.prictureService.getPicturesByCateroy(category).subscribe(pictures => this.pictures = pictures);

  }
  

}

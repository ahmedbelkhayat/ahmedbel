import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'lw-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],

})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getCategory(category:string) : void{
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "category": category,
        }
    };
    this.router.navigate(["/portfolio"], navigationExtras);
}

}

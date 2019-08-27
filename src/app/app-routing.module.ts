import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DisplaypicComponent } from './displaypic/displaypic.component';

// To use the scrolling to some page
const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};



const routes: Routes = [
  {path: 'home', component: CarouselComponent},
  { path: '', component : FirstpageComponent },
  {path: 'portfolio', component: DisplaypicComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

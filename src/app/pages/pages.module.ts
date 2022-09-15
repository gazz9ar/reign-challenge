import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';
import { FavsComponent } from './favs/favs.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ButtonToggleComponent } from './shared/button-toggle/button-toggle.component';
import { NewsServiceService } from './shared/services/news-service.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PagesComponent,
    NewsComponent,
    FavsComponent,
    NavbarComponent,
    ButtonToggleComponent,    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,	
	InfiniteScrollModule
  ],
  providers:[
	NewsServiceService
  ]
})
export class PagesModule { }


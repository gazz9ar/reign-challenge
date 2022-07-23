import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';
import { FavsComponent } from './favs/favs.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ButtonToggleComponent } from './shared/button-toggle/button-toggle.component';
import { NewsServiceService } from './shared/services/news-service.service';
import { StoryLinkDirective } from './shared/directives/story-link.directive';



@NgModule({
  declarations: [
    PagesComponent,
    NewsComponent,
    FavsComponent,
    NavbarComponent,
    ButtonToggleComponent,
    StoryLinkDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,	
  ],
  providers:[
	NewsServiceService
  ]
})
export class PagesModule { }

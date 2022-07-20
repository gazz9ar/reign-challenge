import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages.component';
import { FavsComponent } from './favs/favs.component';

const routes: Routes = [
	{
		path: 'home',
		component:PagesComponent,
		children: [
			{
				path:'news',
				component:NewsComponent
			},
			{
				path:'favs',
				component:FavsComponent
			},
		]
	},
	{ path: "", redirectTo: "home/news", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

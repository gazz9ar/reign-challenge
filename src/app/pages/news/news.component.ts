import { Component, OnInit, ElementRef } from '@angular/core';
import { NewsServiceService } from '../shared/services/news-service.service';
import { New } from './shared/models/New';
import { ApiResponse } from './shared/models/ApiResponse';
import { finalize, map } from 'rxjs';

interface categoriesFilter {
	id:number,
	name:string,
	fileName:string,
	like:boolean
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NewsComponent implements OnInit {

	public categories:categoriesFilter[] = [
		{id:0, name:"Angular",fileName:"angular",like:true},
		{id:1, name:"Reactjs",fileName:"reactjs",like:false},
		{id:2, name:"Vuejs",fileName:"vuejs",like:true}
	]
	public showCategories:boolean = false;	
	public selected:any = "Select your news";
	public news:New[] = [];
	public favs:New[] = [];
	public clickFav:boolean = false;
  constructor(
	private newsService:NewsServiceService,
	private _eref: ElementRef
  ) { }

  ngOnInit(): void {		
	this.checkForFilter();	
	this.fillFavs();
  }

  public loadData(filter?:string) {
	if (filter) {
		this.newsService.getNews(filter)
		.pipe(
			finalize(()=> {
				this.formatNews();
			})
		)		
		.subscribe((resp:ApiResponse) => {
			this.news = resp.hits;
			// console.log(this.news);
		});
	} else {
		// do nothing: first time *maybe welcome sign
	}	

  }

  private checkForFilter(): void {	
	if (!localStorage.getItem('filter')) {
		this.loadData();
	} else {
		this.selected = localStorage.getItem('filter');
		this.loadData(this.selected);
	}	
  }

  private fillFavs(): void {
	this.favs = JSON.parse(localStorage.getItem('favs'));
  }

  public formatNews(): void {	
	this.news.map((neww) => {
		// el like va ir false si no hay nada en el local storage
		for (const fav of this.favs) {
			if (fav.objectID === neww.objectID) {
				neww.like = true;
			}			
		}		
	})
  }

  public showList(): void {	
	if (this.showCategories) {
		this.showCategories = false;
	} else {
		this.showCategories = true;
	}	
  }
  public changeSelected(categorie:string): void {		
	this.selected = categorie;
	this.showCategories = false;
	localStorage.setItem('filter',this.selected);
	this.loadData(this.selected);
  }

  public like(neww:New) {	
	if (neww.like) {		
		this.favs = this.favs.filter( fav => fav.objectID !== neww.objectID);
		localStorage.setItem('favs', JSON.stringify(this.favs)); 
		neww.like = false;
	} else {
		this.favs.push(neww);
		localStorage.setItem('favs', JSON.stringify(this.favs)); 		
		neww.like = true;
	}	
  }
  public unlike(neww:New) {
	console.error('UNNLIKEEE')
  }

  public openNew():void {

  }

  onClick(event:any) {	
	if (event.target.id.includes('new-') || event.target.id.includes('likeContainer-')) {
		//just open tab
		let idNewSelected:string = '';
		if (event.target.id.includes('new-')) {			
			idNewSelected = event.target.id.substring(4,event.target.id.length);
		} else {
			idNewSelected = event.target.id.substring(14, event.target.id.length);
		}				
		let openNew = this.news.find( (neww) => {			
			return neww.objectID == idNewSelected;
		});
		window.open(openNew.story_url,'_blank');		
	} else {
		// do not open tab		
	}	
	  
}	

  public relativeDays(date:string) {
	const timestamp = new Date(date).getTime();
	const rtf = new Intl.RelativeTimeFormat('en', {
	  numeric: 'auto',
	});
	const oneDayInMs = 1000 * 60 * 60 * 24;
	const daysDifference = Math.round(
	  (timestamp - new Date().getTime()) / oneDayInMs,
	);
  
	return rtf.format(daysDifference, 'day');
  }
  

}

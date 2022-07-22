import { Component, OnInit } from '@angular/core';

interface categoriesFilter {
	id:number,
	name:string,
	fileName:string,
	like:boolean
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	public categories:categoriesFilter[] = [
		{id:0, name:"Angular",fileName:"angular",like:true},
		{id:1, name:"Reactjs",fileName:"reactjs",like:false},
		{id:2, name:"Vuejs",fileName:"vuejs",like:true}
	]
	public showCategories:boolean = false;
	public selected:any = "Select your news";
  constructor() { }

  ngOnInit(): void {
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
  }

  public like() {
	console.error('LIKEEE')
  }

}
